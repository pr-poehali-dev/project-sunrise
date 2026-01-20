import { useState } from 'react';
import Icon from '@/components/ui/icon.tsx';
import { cn } from '@/lib/utils';

interface PortfolioItem {
  image: string;
  title: string;
  service: string;
  description: string;
  gallery: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=800',
    title: 'Монтаж металлочерепицы',
    service: 'Монтаж кровли',
    description: 'Частный дом в Донецке, площадь 180 м². Установлена металлочерепица, водосточная система.',
    gallery: [
      'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=1200',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
    title: 'Ремонт кровли',
    service: 'Ремонт кровли',
    description: 'Устранение протечки, замена повреждённых листов. Многоквартирный дом, Донецк.',
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200',
      'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=1200',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
    title: 'Строительство пристройки',
    service: 'Общестроительные работы',
    description: 'Пристройка к частному дому, площадь 40 м². Фундамент, стены, кровля.',
    gallery: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    title: 'Утепление фасада',
    service: 'Утепление домов и крыш',
    description: 'Утепление частного дома минеральной ватой, площадь 150 м². Снижение теплопотерь на 35%.',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=1200',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    title: 'Облицовка фасада',
    service: 'Фасадные и отделочные работы',
    description: 'Облицовка фасада керамогранитом, коммерческое здание, площадь 200 м².',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
    title: 'Монтаж водосточной системы',
    service: 'Водосточные системы',
    description: 'Установка пластиковой водосточной системы, длина 45 м, частный дом.',
    gallery: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200',
      'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=1200',
    ],
  },
];

export default function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setCurrentGalleryIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedItem) {
      setCurrentGalleryIndex((prev) => (prev + 1) % selectedItem.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedItem) {
      setCurrentGalleryIndex((prev) => (prev - 1 + selectedItem.gallery.length) % selectedItem.gallery.length);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-center">
          Наши выполненные работы
        </h2>
        <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          Мы выполняем кровельные и строительные работы различной сложности. Ниже представлены реальные объекты нашей компании.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              onClick={() => openModal(item)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-blue-400 text-sm font-semibold mb-1">{item.service}</p>
                  <p className="text-white font-bold text-lg mb-1">{item.title}</p>
                  <p className="text-white/80 text-sm line-clamp-2">{item.description}</p>
                  <div className="flex items-center gap-2 text-white mt-3">
                    <span className="text-sm">Смотреть галерею</span>
                    <Icon name="Eye" size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <Icon name="X" size={24} />
          </button>

          <div
            className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] bg-gray-100">
                <img
                  src={selectedItem.gallery[currentGalleryIndex]}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {selectedItem.gallery.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                  >
                    <Icon name="ChevronLeft" size={24} className="text-slate-900" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                  >
                    <Icon name="ChevronRight" size={24} className="text-slate-900" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                    {currentGalleryIndex + 1} / {selectedItem.gallery.length}
                  </div>
                </>
              )}
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                  {selectedItem.service}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                {selectedItem.title}
              </h3>

              <p className="text-lg text-slate-600 mb-6">
                {selectedItem.description}
              </p>

              <div className="flex gap-3">
                <a
                  href="tel:+79494915729"
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  <Icon name="Phone" size={20} />
                  Позвонить
                </a>
                <a
                  href="https://t.me/DonetskStroyBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  Telegram
                </a>
              </div>

              {selectedItem.gallery.length > 1 && (
                <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
                  {selectedItem.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentGalleryIndex(idx)}
                      className={cn(
                        'flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all',
                        currentGalleryIndex === idx ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
                      )}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}