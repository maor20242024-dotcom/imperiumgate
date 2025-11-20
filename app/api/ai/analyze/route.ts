import { callOpenRouter, createErrorResponse, createSuccessResponse } from '@/lib/api-utils';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    const data = await callOpenRouter({
      model: 'openrouter/auto',
      messages,
      temperature: 0.3
    });
    
    const content = data?.choices?.[0]?.message?.content ?? '';
    return createSuccessResponse({ content });
  } catch (e: any) {
    return createErrorResponse(e?.message || 'AI error', 500);
  }
}
