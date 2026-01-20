import Icon from '@/components/ui/icon.tsx';

const testimonials = [
  {
    name: 'Александр М.',
    text: 'Заказывали монтаж крыши. Всё сделали аккуратно и в срок. Цена адекватная, результатом довольны.',
    rating: 5,
  },
  {
    name: 'Елена К.',
    text: 'Ремонтировали фасад дома. Работали профессионально, без задержек. Рекомендую!',
    rating: 5,
  },
  {
    name: 'Дмитрий В.',
    text: 'Утепляли дом перед зимой. Бригада работала быстро, качественно. Теплопотери заметно снизились.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 text-center">
          Отзывы клиентов
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                «{testimonial.text}»
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Icon name="User" size={24} className="text-orange-500" />
                </div>
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}