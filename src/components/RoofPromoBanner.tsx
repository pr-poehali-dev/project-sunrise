import { useState } from 'react';
import Icon from '@/components/ui/icon.tsx';
import OrderModal from '@/components/OrderModal.tsx';

export default function RoofPromoBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-12 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Icon name="Clock" size={16} />
                Только до конца февраля
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Скидка <span className="text-amber-400">15%</span> на ремонт крыш
              </h2>

              <p className="text-lg text-slate-300 mb-6 max-w-lg">
                Подготовьте кровлю к весне по выгодной цене. Устранение протечек, замена покрытия,
                утепление — любые работы со скидкой.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg hover:shadow-xl"
                >
                  <Icon name="PhoneCall" size={22} />
                  Получить скидку
                </button>
                <a
                  href="tel:+79490049053"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Icon name="Phone" size={18} />
                  +7 (949) 004-90-53
                </a>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-40 h-40 md:w-52 md:h-52 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 md:w-44 md:h-44 bg-amber-500/30 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl md:text-6xl font-black text-amber-400">15%</div>
                      <div className="text-sm md:text-base text-amber-300 font-semibold mt-1">скидка</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  Акция
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Скидка 15% на ремонт крыш"
        submitLabel="Получить скидку"
        submitIcon="Percent"
        messagePrefix="Заявка на скидку 15% (ремонт крыш)"
      />
    </>
  );
}
