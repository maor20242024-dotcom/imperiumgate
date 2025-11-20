import { callOpenRouter, createErrorResponse, createSuccessResponse, FREE_MODELS } from '@/lib/api-utils';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { message, locale, context } = await req.json();

    const systemPrompt = locale === 'ar' 
      ? `أنت مساعد عقاري ذكي متخصص في عقارات دبي. 
      مهمتك مساعدة المستخدمين في العثور على أفضل الخيارات العقارية.
      
      معلومات أساسية:
      - أنت متخصص في عقارات دبي والإمارات
      - يمكنك تقديم نصائح حول الاستثمار العقاري
      - يمكنك مقارنة المشاريع والمطورين
      - يمكنك تقديم معلومات عن المناطق والمرافق
      
      قواعد الرد:
      - كن مفيداً ودقيقاً في المعلومات
      - استخدم لغة ${locale} في الردود
      - إذا لم تكن متأكداً من معلومة، قل ذلك بوضوح
      - قدم اقتراحات مفيدة بناءً على استفسار المستخدم
      - ركز على الجوانب العملية والاستثمارية
      
      السياق: ${context || 'real-estate-dubai'}`
      : `You are a smart real estate assistant specialized in Dubai properties.
      Your task is to help users find the best real estate options.
      
      Background information:
      - You specialize in Dubai and UAE real estate
      - You can provide investment advice
      - You can compare projects and developers
      - You can provide information about areas and amenities
      
      Response rules:
      - Be helpful and accurate with information
      - Use ${locale} language in responses
      - If you're unsure about information, state it clearly
      - Provide useful suggestions based on user inquiry
      - Focus on practical and investment aspects
      
      Context: ${context || 'real-estate-dubai'}`;

    const data = await callOpenRouter(
      {
        model: FREE_MODELS[0], // استخدام DeepSeek Chat المجاني
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 800,
        top_p: 0.9,
        frequency_penalty: 0.1,
        presence_penalty: 0.1
      },
      undefined,
      'https://imperium-gate.vercel.app',
      'Imperium Gate Real Estate'
    );

    const content = data?.choices?.[0]?.message?.content || 
      (locale === 'ar' 
        ? 'عذراً، لم أتمكن من معالجة طلبك. يرجى المحاولة مرة أخرى.'
        : 'Sorry, I was unable to process your request. Please try again.');

    return createSuccessResponse({ 
      response: content,
      model: FREE_MODELS[0],
      usage: data.usage
    });

  } catch (error: any) {
    console.error('AI concierge error:', error);
    return createErrorResponse('AI service error. Please try again later.', 500);
  }
}
