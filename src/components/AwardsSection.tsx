import { useState } from 'react';
import Icon from '@/components/ui/icon.tsx';

const awards = [
  {
    image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/2e4f3bd2-043b-41d0-be90-c02d85b90869.jpg',
    title: 'Сертификат качества',
    description: 'Рекомендованный исполнитель строительных работ. Соблюдение строительных норм, контроль качества на каждом этапе.',
  },
  {
    image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/b9cfb46d-981f-4809-81f7-edb4d9ae0748.jpg',
    title: 'Сертификат надёжности',
    description: 'Надёжный подрядчик в сфере строительных работ. Выполнение сроков, гарантийные обязательства.',
  },
  {
    image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/b34ad238-d1b8-4053-b51f-229d4255fd2a.jpg',
    title: 'Сертификат надёжности 2018',
    description: 'Проверенный подрядчик с безупречной деловой репутацией и чётким соблюдением сроков.',
  },
  {
    image: 'https://cdn.poehali.dev/projects/84ffef16-74aa-4268-b058-108d5367ee02/bucket/63d9624b-0fd2-495a-8828-f3f000ced338.jpg',
    title: 'Сертификат соответствия 2025',
    description: 'Подтверждение соответствия стандартам качества выполнения строительных и монтажных работ.',
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
