'use client';

import { useState, useRef, useEffect } from 'react';
import { MapMarker } from '@/lib/data/sources';
import { MessageCircle, X, Send, MapPin, Building, DollarSign } from 'lucide-react';

interface ChatDockProps {
  locale: 'ar' | 'en';
  markers: MapMarker[];
}

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

export default function ChatDock({ locale, markers }: ChatDockProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isRtl = locale === 'ar';

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        type: 'ai',
        content: isRtl 
          ? `مرحباً! أنا مساعدك الذكي للعقارات. يمكنني مساعدتك في العثور على أفضل المشاريع في دبي. لدينا ${markers.length} مشروع متاح على الخريطة.`
          : `Hello! I'm your AI real estate assistant. I can help you find the best projects in Dubai. We have ${markers.length} projects available on the map.`,
        timestamp: new Date(),
        suggestions: isRtl 
          ? ['أظهر لي مشاريع إعمار', 'ما هي أفضل المشاريع في دبي مارينا؟', 'أريد شقة بسعر أقل من مليون درهم']
          : ['Show me Emaar projects', 'What are the best projects in Dubai Marina?', 'I want an apartment under 1 million AED']
      };
      setMessages([welcomeMessage]);
    }
  }, [markers.length, isRtl]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: content.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(content, markers, isRtl);
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 ${isRtl ? 'left-6' : 'right-6'} z-20 w-14 h-14 bg-gradient-to-r from-[#e6c55a] to-[#d4af37] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-black" />
        ) : (
          <MessageCircle className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Chat Dock */}
      {isOpen && (
        <div className={`fixed bottom-24 ${isRtl ? 'left-6' : 'right-6'} z-20 w-80 h-96 bg-black/90 backdrop-blur-xl rounded-xl border border-[#e6c55a]/30 shadow-2xl flex flex-col`}>
          {/* Header */}
          <div className="p-4 border-b border-[#e6c55a]/20">
            <h3 className={`text-white font-semibold ${isRtl ? 'text-right font-amiri' : 'text-left'}`}>
              {isRtl ? 'مساعد الخريطة الذكي' : 'AI Map Assistant'}
            </h3>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? (isRtl ? 'justify-start' : 'justify-end') : (isRtl ? 'justify-end' : 'justify-start')}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-[#e6c55a] text-black'
                      : 'bg-gray-800 text-white border border-[#e6c55a]/20'
                  }`}
                >
                  <p className={`text-sm ${isRtl ? 'text-right' : 'text-left'}`}>
                    {message.content}
                  </p>
                  
                  {/* Suggestions */}
                  {message.suggestions && (
                    <div className="mt-2 space-y-1">
                      {message.suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="block w-full text-left text-xs bg-[#e6c55a]/20 hover:bg-[#e6c55a]/30 text-[#e6c55a] px-2 py-1 rounded transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className={`flex ${isRtl ? 'justify-end' : 'justify-start'}`}>
                <div className="bg-gray-800 text-white p-3 rounded-lg border border-[#e6c55a]/20">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-[#e6c55a] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#e6c55a] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-[#e6c55a] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#e6c55a]/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={isRtl ? 'اكتب رسالتك...' : 'Type your message...'}
                className={`flex-1 bg-gray-800 text-white px-3 py-2 rounded-lg border border-[#e6c55a]/20 focus:border-[#e6c55a] focus:outline-none text-sm ${isRtl ? 'text-right' : 'text-left'}`}
                dir={isRtl ? 'rtl' : 'ltr'}
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim()}
                className="bg-[#e6c55a] text-black p-2 rounded-lg hover:bg-[#d4af37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// AI Response Generator
function generateAIResponse(userInput: string, markers: MapMarker[], isRtl: boolean): Message {
  const input = userInput.toLowerCase();
  
  // Developer-specific queries
  if (input.includes('emaar') || input.includes('إعمار')) {
    const emaarProjects = markers.filter(m => m.developer === 'Emaar');
    return {
      id: Date.now().toString(),
      type: 'ai',
      content: isRtl 
        ? `لدينا ${emaarProjects.length} مشروع من إعمار على الخريطة. إعمار هي واحدة من أكبر شركات التطوير العقاري في دبي، مشهورة بمشاريع مثل برج خليفة ودبي مول.`
        : `We have ${emaarProjects.length} Emaar projects on the map. Emaar is one of Dubai's largest real estate developers, famous for projects like Burj Khalifa and Dubai Mall.`,
      timestamp: new Date(),
      suggestions: isRtl 
        ? ['أظهر لي مشاريع داماك', 'ما هي أفضل المناطق للاستثمار؟', 'أريد شقة في وسط المدينة']
        : ['Show me DAMAC projects', 'What are the best areas for investment?', 'I want an apartment in Downtown']
    };
  }

  // Location-specific queries
  if (input.includes('marina') || input.includes('مارينا')) {
    const marinaProjects = markers.filter(m => 
      m.name.toLowerCase().includes('marina') || 
      (m.latitude > 25.07 && m.latitude < 25.09 && m.longitude > 55.13 && m.longitude < 55.15)
    );
    return {
      id: Date.now().toString(),
      type: 'ai',
      content: isRtl 
        ? `دبي مارينا منطقة رائعة للعيش والاستثمار. لدينا ${marinaProjects.length} مشروع في هذه المنطقة. تتميز بالأبراج الشاهقة والمرسى الجميل.`
        : `Dubai Marina is a fantastic area for living and investment. We have ${marinaProjects.length} projects in this area. It features stunning skyscrapers and a beautiful marina.`,
      timestamp: new Date(),
      suggestions: isRtl 
        ? ['ما هي أسعار الشقق في المارينا؟', 'أظهر لي مشاريع في جميرا', 'أريد فيلا بدلاً من شقة']
        : ['What are apartment prices in Marina?', 'Show me projects in Jumeirah', 'I want a villa instead of apartment']
    };
  }

  // Price-related queries
  if (input.includes('price') || input.includes('سعر') || input.includes('million') || input.includes('مليون')) {
    return {
      id: Date.now().toString(),
      type: 'ai',
      content: isRtl 
        ? `أسعار العقارات في دبي تتراوح من 500 ألف درهم للشقق الصغيرة إلى عدة ملايين للفلل الفاخرة. يمكنني مساعدتك في العثور على خيارات ضمن ميزانيتك.`
        : `Property prices in Dubai range from 500K AED for smaller apartments to several millions for luxury villas. I can help you find options within your budget.`,
      timestamp: new Date(),
      suggestions: isRtl 
        ? ['أريد شقة أقل من مليون درهم', 'ما هي أفضل المشاريع للاستثمار؟', 'أظهر لي الفلل المتاحة']
        : ['I want an apartment under 1 million AED', 'What are the best projects for investment?', 'Show me available villas']
    };
  }

  // Default response
  return {
    id: Date.now().toString(),
    type: 'ai',
    content: isRtl 
      ? `شكراً لسؤالك! لدينا ${markers.length} مشروع متنوع في دبي من مطورين مختلفين. يمكنك النقر على أي علامة على الخريطة لمعرفة المزيد عن المشروع.`
      : `Thank you for your question! We have ${markers.length} diverse projects in Dubai from different developers. You can click on any marker on the map to learn more about the project.`,
    timestamp: new Date(),
    suggestions: isRtl 
      ? ['أظهر لي مشاريع إعمار', 'ما هي أفضل المناطق؟', 'أريد استشارة استثمارية']
      : ['Show me Emaar projects', 'What are the best areas?', 'I want investment advice']
  };
}