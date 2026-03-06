import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon.tsx';
import OrderModal from '@/components/OrderModal';
import { useState } from 'react';

const benefits = [
  {
    icon: 'Handshake',
    title: 'Работаем без посредников',
    text: 'Прямой договор с нашей компанией. Никаких субподрядчиков — вы всегда знаете, кто делает вашу работу.',
  },
  {
    icon: 'Ruler',
    title: 'Бесплатный замер и консультация',
    text: 'Выезжаем на объект без предоплаты. Специалист оценит объём работ и назовёт точную стоимость на месте.',
  },
  {
    icon: 'Users',
    title: 'Собственные бригады',
    text: 'Штатные мастера с многолетним опытом. Мы не нанимаем случайных рабочих — каждый специалист прошёл проверку.',
  },
  {
    icon: 'Calendar',
    title: 'Фиксированные сроки',
    text: 'Прописываем точные сроки выполнения в договоре. Если задержка по нашей вине — компенсируем.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Гарантия на работы',
    text: 'Официальная гарантия: 5 лет на строительные работы, 10 лет на кровельные. Всё закреплено договором.',
  },
  {
    icon: 'Star',
    title: 'Реальные объекты и отзывы',
    text: 'Более 100 выполненных объектов. Можем показать портфолио и организовать выезд на реальный объект.',
  },
  {
    icon: 'DollarSign',
    title: 'Честная цена без скрытых доплат',
    text: 'Смету составляем до начала работ. Что написано в договоре — столько и платите. Никаких сюрпризов.',
  },
  {
    icon: 'Package',
    title: 'Помощь с материалами',
    text: 'Закупаем качественные материалы по оптовым ценам и доставляем на объект. Сами всё организуем.',
  },
  {
    icon: 'MapPin',
    title: 'Работаем по всей ДНР',
    text: 'Выезжаем в любой город и район республики. Знаем местную специфику строительства.',
  },
];

const numbers = [
  { value: '12+', label: 'лет на рынке', icon: 'Calendar' },
  { value: '100+', label: 'объектов сдано', icon: 'Home' },
  { value: '96%', label: 'сдано в срок', icon: 'CheckCircle' },
  { value: '78%', label: 'клиентов по рекомендациям', icon: 'Heart' },
];

export default function WhyUsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-white">
      <Header />
      <div className="pt-16">
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Почему выбирают нас
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
              Мы работаем с 2014 года и знаем, что важно клиенту — прозрачность, качество и соблюдение сроков
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {numbers.map((n) => (
                <div key={n.label} className="bg-slate-800 rounded-xl p-5">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <Icon name={n.icon} size={20} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{n.value}</div>
                  <div className="text-slate-400 text-sm">{n.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Наши преимущества</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-700">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Убедитесь сами</h2>
            <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
              Закажите бесплатный выезд специалиста — и вы лично увидите, как мы работаем
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 bg-white text-blue-700 hover:bg-blue-50 px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-lg"
            >
              <Icon name="Ruler" size={22} />
              Заказать бесплатный замер
            </button>
          </div>
        </section>
      </div>
      <Footer />
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
