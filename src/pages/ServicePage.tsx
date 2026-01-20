import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { servicesData } from '@/data/servicesData';
import Icon from '@/components/ui/icon.tsx';
import { cn } from '@/lib/utils';

export default function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData.find((s) => s.id === serviceId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Услуга не найдена</h1>
          <Link to="/" className="text-orange-500 hover:text-orange-600 font-semibold">
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-4">
            <Icon name="ArrowLeft" size={20} />
            Назад на главную
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center">
              <Icon name={service.icon} size={32} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              {service.title}
            </h1>
          </div>

          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            {service.fullDescription}
          </p>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Галерея работ</h2>
            
            <div className="relative">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={service.images[currentImageIndex]}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {service.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev - 1 + service.images.length) % service.images.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                  >
                    <Icon name="ChevronLeft" size={24} className="text-slate-900" />
                  </button>

                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev + 1) % service.images.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                  >
                    <Icon name="ChevronRight" size={24} className="text-slate-900" />
                  </button>

                  <div className="flex justify-center gap-2 mt-6">
                    {service.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={cn(
                          'h-2 transition-all rounded-full',
                          currentImageIndex === index ? 'w-12 bg-orange-500' : 'w-8 bg-gray-300 hover:bg-gray-400'
                        )}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Примеры выполненных работ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.examples.map((example, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={example.image}
                      alt={example.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {example.title}
                    </h3>
                    <p className="text-slate-600">
                      {example.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Заказать {service.title.toLowerCase()}
              </h2>
              <p className="text-xl text-orange-50 mb-8">
                Свяжитесь с нами для бесплатного замера и расчёта стоимости
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+79494915729"
                  className="flex items-center justify-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-all shadow-lg"
                >
                  <Icon name="Phone" size={24} />
                  Позвонить
                </a>

                <a
                  href="https://t.me/DonetskStroyBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  Написать в Telegram
                </a>

                <button className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg">
                  <Icon name="Calculator" size={24} />
                  Рассчитать стоимость
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-slate-900 text-white py-8 mt-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <Link to="/" className="text-orange-500 hover:text-orange-400 font-semibold">
            ← Вернуться на главную
          </Link>
        </div>
      </footer>
    </div>
  );
}
