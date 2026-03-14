import { useState, useEffect, useRef, useCallback } from 'react';
import Icon from '@/components/ui/icon.tsx';

const testimonials = [
  {
    name: 'Александр М.',
    city: 'Донецк',
    text: 'Заказывали монтаж крыши из металлочерепицы. Всё сделали аккуратно и точно в срок. Цена адекватная, результатом довольны на 100%.',
    rating: 5,
    initials: 'АМ',
  },
  {
    name: 'Виктор С.',
    city: 'Макеевка',
    text: 'Заказывали перекрытие крыши шифером. Работу сделали быстро и аккуратно, помогли с покупкой материала по хорошей цене. Всё ровно, ничего не течёт. Спасибо за честный подход!',
    rating: 5,
    initials: 'ВС',
  },
  {
    name: 'Ольга П.',
    city: 'Донецк',
    text: 'Делали кровлю в частном доме. Ребята опытные, сразу видно — знают своё дело. Цена была зафиксирована заранее, без доплат. Результатом довольны, рекомендуем.',
    rating: 5,
    initials: 'ОП',
  },
  {
    name: 'Дмитрий В.',
    city: 'Горловка',
    text: 'Утепляли дом перед зимой. Бригада работала быстро и качественно. Теплопотери заметно снизились, в доме стало значительно теплее. Спасибо!',
    rating: 5,
    initials: 'ДВ',
  },
  {
    name: 'Елена К.',
    city: 'Донецк',
    text: 'Ремонтировали фасад дома — штукатурка, покраска. Работали профессионально, без задержек. Всё аккуратно, соседи спрашивают у кого заказывали. Рекомендую!',
    rating: 5,
    initials: 'ЕК',
  },
  {
    name: 'Николай Т.',
    city: 'Ясиноватая',
    text: 'Ставили забор из профлиста с воротами и калиткой. Сделали быстро, стоит крепко. Приятно удивил подход — всё объяснили, предложили варианты. Буду ещё обращаться.',
    rating: 5,
    initials: 'НТ',
  },
  {
    name: 'Татьяна Р.',
    city: 'Донецк',
    text: 'Заливали отмостку вокруг дома и укладывали плитку во дворе. Работа выполнена аккуратно, геометрия идеальная. За три месяца ничего не просело и не потрескалось.',
    rating: 5,
    initials: 'ТР',
  },
  {
    name: 'Сергей Л.',
    city: 'Харцызск',
    text: 'Обращались по ремонту фундамента — были трещины в цоколе. Ребята приехали, всё осмотрели, объяснили причину и сделали гидроизоляцию. Проблема решена, цена разумная.',
    rating: 5,
    initials: 'СЛ',
  },
];

const COLORS = [
  'bg-blue-600',
  'bg-orange-500',
  'bg-emerald-600',
  'bg-violet-600',
  'bg-rose-500',
  'bg-amber-600',
  'bg-cyan-600',
  'bg-indigo-600',
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = testimonials.length;

  const updateVisible = useCallback(() => {
    const w = window.innerWidth;
    if (w < 768) setVisibleCount(1);
    else if (w < 1024) setVisibleCount(2);
    else setVisibleCount(3);
  }, []);

  useEffect(() => {
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, [updateVisible]);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
  }, [total]);

  useEffect(() => {
    startAutoplay();
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [startAutoplay]);

  const goTo = (index: number) => {
    setCurrent((index + total) % total);
    startAutoplay();
  };

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(testimonials[(current + i) % total]);
    }
    return items;
  };

  const visible = getVisible();

  return (
    <section id="reviews" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Более 200 выполненных проектов — вот что говорят наши заказчики
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Стрелка влево */}
          <button
            onClick={() => goTo(current - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-11 h-11 bg-white border border-slate-200 rounded-full shadow-md flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
            aria-label="Предыдущий отзыв"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          {/* Карточки */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
            {visible.map((t, i) => {
              const colorIndex = testimonials.indexOf(t);
              return (
                <div
                  key={`${t.name}-${current}-${i}`}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-4 animate-fade-in"
                >
                  {/* Рейтинг */}
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, s) => (
                      <Icon key={s} name="Star" size={18} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Текст */}
                  <p className="text-slate-700 leading-relaxed flex-1">
                    «{t.text}»
                  </p>

                  {/* Автор */}
                  <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${COLORS[colorIndex % COLORS.length]}`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                      {t.city && (
                        <p className="text-slate-500 text-xs flex items-center gap-1">
                          <Icon name="MapPin" size={12} />
                          {t.city}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Стрелка вправо */}
          <button
            onClick={() => goTo(current + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-11 h-11 bg-white border border-slate-200 rounded-full shadow-md flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
            aria-label="Следующий отзыв"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Точки навигации */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-8 h-2.5 bg-blue-600'
                  : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Отзыв ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
