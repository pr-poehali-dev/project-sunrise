import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon.tsx';

const images = [
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920',
  'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=1920',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
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
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex max-w-4xl flex-col gap-8">
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              )}
            >
              <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                Строительные и кровельные работы под ключ в Донецке
              </h1>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-200 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              )}
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/90">
                Надёжное строительство, ремонт и кровля — от замера до сдачи объекта с гарантией
              </p>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              )}
            >
              <p className="text-sm md:text-base text-white/70 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Работаем по Донецку и области
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <Icon name="UserCheck" size={16} />
                  Бесплатный выезд специалиста
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  Чёткие сроки
                </span>
              </p>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-500 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              )}
            >
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://t.me/DonetskStroyBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <Icon name="Ruler" size={24} />
                  Заказать бесплатный замер
                </a>
                
                <a 
                  href="tel:+79490049053"
                  className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <Icon name="Phone" size={24} />
                  +7 949 004-90-53
                </a>
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-700 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              )}
            >
              <a
                href="https://t.me/DonetskStroyBot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Написать в Telegram-бот
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>

      <a
        href="https://t.me/DonetskStroyBot"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110"
        aria-label="Telegram бот"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      </a>
    </section>
  );
}