import { useState } from 'react';
import Icon from '@/components/ui/icon.tsx';
import OrderModal from '@/components/OrderModal.tsx';

const stats = [
  { value: '12+', label: 'лет на рынке', icon: 'Calendar' },
  { value: '100+', label: 'домов построено', icon: 'Home' },
  { value: '47 000', label: 'м² сдано в эксплуатацию', icon: 'Maximize2' },
  { value: '78%', label: 'клиентов по рекомендациям', icon: 'Heart' },
  { value: '45+', label: 'специалистов в штате', icon: 'Users' },
  { value: '3–6', label: 'месяцев — средний срок строительства', icon: 'Clock' },
  { value: '25+', label: 'объектов за последний год', icon: 'TrendingUp' },
  { value: '96%', label: 'объектов сдано в срок', icon: 'CheckCircle' },
];

const advantages = [
  {
    icon: 'MapPin',
    title: 'Работаем по всей ДНР',
    text: 'Выезжаем в любой город и район республики. Знаем местную специфику и работаем в любых текущих условиях.',
  },
  {
    icon: 'Hammer',
    title: 'Строим на совесть',
    text: 'Большой опыт в строительстве и восстановлении жилья. Делаем надежно, чтобы дом служил долгие годы.',
  },
  {
    icon: 'Users',
    title: 'Профессиональные бригады',
    text: 'Опытные мастера своего дела. Работаем напрямую, без посредников и лишних переплат.',
  },
  {
    icon: 'DollarSign',
    title: 'Честная цена',
    text: 'Фиксируем стоимость работ до их начала. Прозрачные расчеты, никаких скрытых накруток.',
  },
  {
    icon: 'Package',
    title: 'Помощь с материалами',
    text: 'Берем на себя выбор, закупку и доставку качественных стройматериалов.',
  },
  {
    icon: 'Clock',
    title: 'Соблюдение сроков',
    text: 'Ценим ваше время, работаем оперативно и сдаем объект точно в срок.',
  },
];

const guaranteePoints = [
  'Официальная гарантия на строительные работы — 5 лет',
  'Гарантия на кровельные и фасадные работы — 10 лет',
  'Гарантия на используемые материалы — по сертификатам производителей',
  'Контроль качества на каждом этапе — от фундамента до финишной отделки',
  'Фотоотчёты и акты приёмки на каждом этапе строительства',
  'Персональный прораб, ответственный за ваш объект',
];

export default function AboutSection() {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            О компании
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mb-12">
            Строительная компания с 2014 года. За это время мы прошли путь от небольшой бригады
            до полноценной компании с собственным штатом инженеров, прорабов и мастеров.
            Каждый объект — это наша репутация.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Icon name={stat.icon} size={20} className="text-blue-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            Почему выбирают нас
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {advantages.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name={item.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                  <p className="text-slate-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <Icon name="ShieldCheck" size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Официальная гарантия</h3>
                <p className="text-blue-100 text-lg">
                  Мы несём полную ответственность за качество выполненных работ и используемых материалов
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {guaranteePoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={20} className="text-green-300" />
                  </div>
                  <span className="text-blue-50">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-white/20">
              <div className="flex items-center gap-3 text-blue-100">
                <Icon name="FileText" size={20} />
                <span>Договор подряда с каждым клиентом. Все обязательства зафиксированы юридически.</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                Остались вопросы?
              </h3>
              <p className="text-slate-600">
                Оставьте номер — перезвоним в течение 15 минут и бесплатно проконсультируем по вашему проекту.
              </p>
            </div>
            <button
              onClick={() => setIsCallbackOpen(true)}
              className="flex-shrink-0 flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <Icon name="PhoneCall" size={24} />
              Перезвонить мне
            </button>
          </div>
        </div>
      </div>

      <OrderModal
        isOpen={isCallbackOpen}
        onClose={() => setIsCallbackOpen(false)}
        title="Обратный звонок"
        submitLabel="Жду звонка"
        submitIcon="PhoneCall"
        messagePrefix="Запрос обратного звонка"
      />
    </section>
  );
}
