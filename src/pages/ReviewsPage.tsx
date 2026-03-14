import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon.tsx';

const initialReviews = [
  {
    name: 'Александр М.',
    city: 'Донецк',
    text: 'Заказывали монтаж крыши из металлочерепицы. Всё сделали аккуратно и точно в срок. Цена адекватная, результатом довольны на 100%.',
    rating: 5,
    initials: 'АМ',
    color: 'bg-blue-600',
    date: 'Февраль 2025',
    service: 'Кровельные работы',
  },
  {
    name: 'Виктор С.',
    city: 'Макеевка',
    text: 'Заказывали перекрытие крыши шифером. Работу сделали быстро и аккуратно, помогли с покупкой материала по хорошей цене. Всё ровно, ничего не течёт. Спасибо за честный подход!',
    rating: 5,
    initials: 'ВС',
    color: 'bg-orange-500',
    date: 'Январь 2025',
    service: 'Кровельные работы',
  },
  {
    name: 'Ольга П.',
    city: 'Донецк',
    text: 'Делали кровлю в частном доме. Ребята опытные, сразу видно — знают своё дело. Цена была зафиксирована заранее, без доплат. Результатом довольны, рекомендуем.',
    rating: 5,
    initials: 'ОП',
    color: 'bg-emerald-600',
    date: 'Март 2025',
    service: 'Кровельные работы',
  },
  {
    name: 'Дмитрий В.',
    city: 'Горловка',
    text: 'Утепляли дом перед зимой. Бригада работала быстро и качественно. Теплопотери заметно снизились, в доме стало значительно теплее. Спасибо!',
    rating: 5,
    initials: 'ДВ',
    color: 'bg-violet-600',
    date: 'Октябрь 2024',
    service: 'Фасадные работы',
  },
  {
    name: 'Елена К.',
    city: 'Донецк',
    text: 'Ремонтировали фасад дома — штукатурка, покраска. Работали профессионально, без задержек. Всё аккуратно, соседи спрашивают у кого заказывали. Рекомендую!',
    rating: 5,
    initials: 'ЕК',
    color: 'bg-rose-500',
    date: 'Ноябрь 2024',
    service: 'Фасадные работы',
  },
  {
    name: 'Николай Т.',
    city: 'Ясиноватая',
    text: 'Ставили забор из профлиста с воротами и калиткой. Сделали быстро, стоит крепко. Приятно удивил подход — всё объяснили, предложили варианты. Буду ещё обращаться.',
    rating: 5,
    initials: 'НТ',
    color: 'bg-amber-600',
    date: 'Сентябрь 2024',
    service: 'Заборы и ограждения',
  },
  {
    name: 'Татьяна Р.',
    city: 'Донецк',
    text: 'Заливали отмостку вокруг дома и укладывали плитку во дворе. Работа выполнена аккуратно, геометрия идеальная. За три месяца ничего не просело и не потрескалось.',
    rating: 5,
    initials: 'ТР',
    color: 'bg-cyan-600',
    date: 'Август 2024',
    service: 'Плиточные работы',
  },
  {
    name: 'Сергей Л.',
    city: 'Харцызск',
    text: 'Обращались по ремонту фундамента — были трещины в цоколе. Ребята приехали, всё осмотрели, объяснили причину и сделали гидроизоляцию. Проблема решена, цена разумная.',
    rating: 5,
    initials: 'СЛ',
    color: 'bg-indigo-600',
    date: 'Июль 2024',
    service: 'Фундаментные работы',
  },
];

const EMPTY_FORM = { name: '', city: '', service: '', text: '', rating: 5 };

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return;

    const initials = form.name
      .trim()
      .split(' ')
      .map((w) => w[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    const colors = ['bg-blue-600', 'bg-orange-500', 'bg-emerald-600', 'bg-violet-600', 'bg-rose-500', 'bg-amber-600'];
    const color = colors[reviews.length % colors.length];

    setReviews((prev) => [
      {
        name: form.name.trim(),
        city: form.city.trim(),
        text: form.text.trim(),
        service: form.service.trim(),
        rating: form.rating,
        initials,
        color,
        date: 'Только что',
      },
      ...prev,
    ]);
    setForm(EMPTY_FORM);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="bg-white">
      <Header />
      <div className="pt-24 pb-20">
        {/* Шапка */}
        <section className="bg-slate-900 py-14">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Отзывы наших клиентов</h1>
            <p className="text-slate-300 text-lg max-w-xl mx-auto">
              Реальные отзывы жителей Донецка и ДНР о нашей работе
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={24} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-white text-2xl font-bold">{avgRating}</span>
              <span className="text-slate-400">из 5 · {reviews.length} отзывов</span>
            </div>
          </div>
        </section>

        {/* Список отзывов */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {reviews.map((r, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex gap-1">
                      {[...Array(r.rating)].map((_, s) => (
                        <Icon key={s} name="Star" size={16} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400 whitespace-nowrap">{r.date}</span>
                  </div>

                  {r.service && (
                    <span className="inline-block self-start text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                      {r.service}
                    </span>
                  )}

                  <p className="text-slate-700 leading-relaxed flex-1">«{r.text}»</p>

                  <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${r.color}`}>
                      {r.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{r.name}</p>
                      {r.city && (
                        <p className="text-slate-500 text-xs flex items-center gap-1">
                          <Icon name="MapPin" size={11} />
                          {r.city}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Форма */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Оставить отзыв</h2>
                <p className="text-slate-600">Расскажите о вашем опыте работы с нами</p>
              </div>

              {submitted && (
                <div className="mb-6 flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 rounded-xl px-5 py-4">
                  <Icon name="CheckCircle" size={20} className="text-green-600 flex-shrink-0" />
                  Спасибо! Ваш отзыв добавлен.
                </div>
              )}

              <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-8 flex flex-col gap-5 border border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">Ваше имя *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Иван Иванов"
                      required
                      className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">Город</label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="Донецк"
                      className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">Услуга</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Выберите услугу</option>
                    <option>Кровельные работы</option>
                    <option>Фасадные работы</option>
                    <option>Фундаментные работы</option>
                    <option>Заборы и ограждения</option>
                    <option>Плиточные работы</option>
                    <option>Другое</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">Оценка</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setForm({ ...form, rating: star })}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Icon
                          name="Star"
                          size={28}
                          className={
                            star <= (hoverRating || form.rating)
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-300'
                          }
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">Ваш отзыв *</label>
                  <textarea
                    value={form.text}
                    onChange={(e) => setForm({ ...form, text: e.target.value })}
                    placeholder="Расскажите о качестве работ, сроках, отношении мастеров..."
                    required
                    rows={4}
                    className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all"
                >
                  <Icon name="Send" size={18} />
                  Отправить отзыв
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
