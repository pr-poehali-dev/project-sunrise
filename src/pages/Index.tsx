import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon.tsx';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OrderModal from '@/components/OrderModal';
import { servicesData } from '@/data/servicesData';

const images = [
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920',
  'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=1920',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920',
];

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white">
      <Header />

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          {images.map((src, index) => (
            <div
              key={src}
              className={cn(
                'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                currentIndex === index ? 'opacity-100' : 'opacity-0'
              )}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent" />

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 pt-16">
            <div className="flex max-w-3xl flex-col gap-6">
              <div className={cn('transform transition-all duration-1000', isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0')}>
                <span className="inline-block bg-amber-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                  Акция: Установка шифера — скидка 15% на ремонт крыш
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Строительные и кровельные работы под ключ
                </h1>
              </div>
              <div className={cn('transform transition-all duration-1000 delay-200', isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0')}>
                <p className="text-xl md:text-2xl font-light text-white/90">
                  Надёжное строительство, ремонт и кровля в Донецке и по всей ДНР — от замера до сдачи с гарантией
                </p>
              </div>
              <div className={cn('transform transition-all duration-1000 delay-300', isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0')}>
                <p className="text-sm text-white/70 flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-2"><Icon name="MapPin" size={16} />Работаем по Донецку и области</span>
                  <span>•</span>
                  <span className="flex items-center gap-2"><Icon name="UserCheck" size={16} />Бесплатный выезд специалиста</span>
                  <span>•</span>
                  <span className="flex items-center gap-2"><Icon name="Clock" size={16} />Чёткие сроки</span>
                </p>
              </div>
              <div className={cn('transform transition-all duration-1000 delay-500', isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0')}>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg"
                  >
                    <Icon name="Calculator" size={22} />
                    Рассчитать стоимость работ
                  </button>
                  <a
                    href="tel:+79490049053"
                    className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg"
                  >
                    <Icon name="Phone" size={22} />
                    +7 949 004-90-53
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn('h-1 transition-all duration-300', currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60')}
            />
          ))}
        </div>
      </section>

      {/* УСЛУГИ КРАТКО */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Наши услуги</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Полный спектр строительных и кровельных работ для частных и коммерческих объектов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {servicesData.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all hover:border-blue-500 group"
              >
                {service.images[0] && (
                  <div className="h-40 overflow-hidden">
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">{service.description}</p>
                  <span className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    Подробнее <Icon name="ArrowRight" size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              <Icon name="LayoutGrid" size={20} />
              Все услуги подробно
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <div className="inline-block bg-amber-400 text-amber-900 text-sm font-bold px-4 py-2 rounded-full mb-6">
            Скидка 15% на установку шифера
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Рассчитайте стоимость работ бесплатно
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Заполните короткую форму — мастер перезвонит, приедет на замер и назовёт точную цену без скрытых доплат
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-3 bg-white text-blue-700 hover:bg-blue-50 px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-lg"
            >
              <Icon name="Calculator" size={22} />
              Рассчитать стоимость работ
            </button>
            <a
              href="https://t.me/DonetskStroyBot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg"
            >
              <Icon name="MessageCircle" size={22} />
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <a
        href="https://t.me/DonetskStroyBot"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all hover:scale-110"
        aria-label="Telegram"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      </a>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default Index;