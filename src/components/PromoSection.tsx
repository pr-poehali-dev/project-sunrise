import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon.tsx';

export default function PromoSection() {
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60);

  useEffect(() => {
    const savedEndTime = localStorage.getItem('promoEndTime');
    const now = Date.now();

    let endTime: number;

    if (savedEndTime) {
      endTime = parseInt(savedEndTime, 10);
      const remaining = Math.floor((endTime - now) / 1000);
      
      if (remaining > 0) {
        setTimeLeft(remaining);
      } else {
        endTime = now + 2 * 60 * 60 * 1000;
        localStorage.setItem('promoEndTime', endTime.toString());
        setTimeLeft(2 * 60 * 60);
      }
    } else {
      endTime = now + 2 * 60 * 60 * 1000;
      localStorage.setItem('promoEndTime', endTime.toString());
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const remaining = Math.floor((endTime - now) / 1000);

      if (remaining > 0) {
        setTimeLeft(remaining);
      } else {
        endTime = now + 2 * 60 * 60 * 1000;
        localStorage.setItem('promoEndTime', endTime.toString());
        setTimeLeft(2 * 60 * 60);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="py-12 bg-gradient-to-br from-orange-500 via-red-500 to-red-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
            <Icon name="Flame" size={20} className="text-yellow-300" />
            АКЦИЯ
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            🔥 УСТАНОВКА ШИФЕРА
          </h2>

          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon name="X" size={20} className="text-red-200" />
                <p className="text-white/90 font-semibold text-sm">Старые цены</p>
              </div>
              <p className="text-3xl font-bold text-white/60 line-through">1500₽/м²</p>
            </div>

            <div className="bg-white rounded-xl p-4 border-4 border-yellow-400 shadow-2xl transform scale-105">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon name="Check" size={20} className="text-green-600" />
                <p className="text-slate-700 font-semibold text-sm">Спецпредложение</p>
              </div>
              <p className="text-4xl font-bold text-red-600">999₽/м²</p>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/30">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Clock" size={24} className="text-yellow-300" />
              <p className="text-white text-xl font-bold">Обратный отсчёт</p>
            </div>

            <div className="flex justify-center gap-4">
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
                <p className="text-5xl font-bold text-white tabular-nums">{String(hours).padStart(2, '0')}</p>
                <p className="text-white/80 text-sm mt-1">часов</p>
              </div>
              <div className="flex items-center">
                <p className="text-5xl font-bold text-white">:</p>
              </div>
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
                <p className="text-5xl font-bold text-white tabular-nums">{String(minutes).padStart(2, '0')}</p>
                <p className="text-white/80 text-sm mt-1">минут</p>
              </div>
              <div className="flex items-center">
                <p className="text-5xl font-bold text-white">:</p>
              </div>
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
                <p className="text-5xl font-bold text-white tabular-nums">{String(seconds).padStart(2, '0')}</p>
                <p className="text-white/80 text-sm mt-1">секунд</p>
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-white font-semibold mb-6 drop-shadow">
            ⚡ Спешите! Предложение ограничено по времени
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+79490049053"
              className="flex items-center justify-center gap-3 bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl transform hover:scale-105"
            >
              <Icon name="Phone" size={24} />
              Позвонить сейчас
            </a>

            <a
              href="https://t.me/DonetskStroyBot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-2xl transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
