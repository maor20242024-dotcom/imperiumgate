
import type { Locale } from '@/lib/i18n-utils';

export default function PaymentPlan({ plan, locale }: { plan: any[], locale: Locale }) {
  if (!plan || plan.length === 0) return null;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">💳</span>
        <h2 className="text-2xl font-bold text-gold">
          {locale === 'ar' ? 'خطة الدفع' : 'Payment Plan'}
        </h2>
      </div>

      <div className="space-y-4">
        {plan.map((item, index) => {
          const title = typeof item.title === 'object' ? (item.title[locale] || item.title.en) : item.title;
          const percent = item.percentage ? `${item.percentage}%` : '';
          const date = item.date ? item.date : '';

          return (
            <div key={index} className="flex justify-between items-center border-b border-zinc-800 pb-4 last:border-0 last:pb-0">
              <div className="text-white font-medium">{title || (locale === 'ar' ? `دفعة ${index + 1}` : `Installment ${index + 1}`)}</div>
              <div className="text-right">
                {percent && <div className="text-gold font-bold">{percent}</div>}
                {date && <div className="text-sm text-gray-400">{date}</div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
