import Icon from '@/components/ui/icon';

const benefits = [
  { icon: 'Handshake', text: 'Работаем без посредников' },
  { icon: 'Ruler', text: 'Бесплатный замер и консультация' },
  { icon: 'Users', text: 'Собственные бригады' },
  { icon: 'Calendar', text: 'Фиксированные сроки' },
  { icon: 'ShieldCheck', text: 'Гарантия на работы' },
  { icon: 'Star', text: 'Реальные объекты и отзывы' },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Почему клиенты выбирают нас
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.text}
              className="flex items-center gap-4 bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <Icon name={benefit.icon} size={24} className="text-white" />
              </div>
              <p className="text-white font-semibold text-lg">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
