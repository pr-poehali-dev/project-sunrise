import Icon from '@/components/ui/icon.tsx';

const steps = [
  { number: 1, icon: 'MessageSquare', title: 'Заявка или сообщение в Telegram-бот', description: 'Свяжитесь удобным способом' },
  { number: 2, icon: 'Ruler', title: 'Бесплатный выезд и замер', description: 'Специалист приедет в удобное время' },
  { number: 3, icon: 'Calculator', title: 'Расчёт стоимости и согласование', description: 'Прозрачная смета без скрытых платежей' },
  { number: 4, icon: 'HardHat', title: 'Выполнение работ', description: 'Профессиональная бригада в срок' },
  { number: 5, icon: 'CheckCircle', title: 'Сдача объекта и гарантия', description: 'Проверка качества и документы' },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 text-center">
          Как проходит работа
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-10 top-20 bottom-0 w-0.5 bg-orange-300 -mb-6" />
                )}
                
                <div className="flex items-start gap-6 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center relative z-10">
                    <Icon name={step.icon} size={32} className="text-white" />
                  </div>
                  
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-orange-500">{step.number}</span>
                      <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-slate-600 text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}