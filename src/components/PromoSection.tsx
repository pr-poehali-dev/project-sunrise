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
    <section className="py-4 bg-gradient-to-r from-orange-500 to-red-600">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <a
            href="tel:+79490049053"
            className="flex items-center justify-center gap-3 bg-white/95 hover:bg-white text-red-600 px-6 py-3 rounded-lg font-bold transition-all shadow-lg transform hover:scale-105 text-center"
          >
            <Icon name="Flame" size={20} className="text-orange-500 flex-shrink-0" />
            <span className="text-sm sm:text-base">
              🔥 Установка шифера — дешевле на 20% | Осталось {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}