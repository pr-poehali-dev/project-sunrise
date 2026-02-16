import { useState } from 'react';
import Icon from '@/components/ui/icon.tsx';

const awards = [
  {
    image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/files/226409f4-9cc5-407d-966e-7c5cfd14d79d.jpg',
    title: 'Сертификат соответствия',
    description: 'Подтверждение соответствия строительных работ государственным стандартам качества',
  },
  {
    image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/files/fd8decf4-e9bd-405d-886e-ba48929f00a7.jpg',
    title: 'Диплом «Лучшая строительная компания»',
    description: 'Победитель регионального конкурса строительных организаций 2023 года',
  },
  {
    image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/files/6ef405ac-a5f0-4f9c-b587-6618f4e44f0d.jpg',
    title: 'Сертификат качества ISO',
    description: 'Международный стандарт системы менеджмента качества в строительстве',
  },
  {
    image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/files/fe5f6a4a-0de0-4955-8ef7-61f3f0cec734.jpg',
    title: 'Свидетельство СРО',
    description: 'Допуск саморегулируемой организации к выполнению строительных работ',
  },
];

export default function AwardsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <Icon name="Award" size={24} className="text-amber-600" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              Награды и сертификаты
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-3xl mb-12">
            Наши достижения подтверждены официальными документами. Мы работаем в соответствии
            с государственными стандартами и постоянно повышаем качество услуг.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {awards.map((award) => (
              <div key={award.title} className="group">
                <div
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer border border-gray-100 group-hover:border-amber-200"
                  onClick={() => setSelectedImage(award.image)}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 text-sm md:text-base mb-1">
                      {award.title}
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm leading-tight">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <Icon name="X" size={24} className="text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Сертификат"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
