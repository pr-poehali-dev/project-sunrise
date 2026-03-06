import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon.tsx';
import OrderModal from '@/components/OrderModal';
import { servicesData } from '@/data/servicesData';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-white">
      <Header />
      <div className="pt-16">
        <div className="bg-blue-700 py-16 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Все услуги</h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Полный спектр строительных и кровельных работ в Донецке и по всей ДНР
            </p>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {servicesData.map((service) => (
                <div key={service.id} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
                  {service.images[0] && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={service.images[0]}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon name={service.icon} size={22} className="text-blue-600" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">{service.title}</h2>
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="whitespace-pre-line text-slate-600 text-sm leading-relaxed mb-6">
                      {service.fullDescription}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <Icon name="Calculator" size={18} />
                        Рассчитать стоимость
                      </button>
                      <Link
                        to={`/services/${service.id}`}
                        className="flex items-center justify-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Примеры работ
                        <Icon name="ArrowRight" size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Не нашли нужную услугу?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Позвоните нам — мы беремся за нестандартные проекты и всегда найдём решение
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all"
              >
                <Icon name="MessageSquare" size={20} />
                Оставить заявку
              </button>
              <a
                href="tel:+79490049053"
                className="flex items-center gap-3 bg-white hover:bg-gray-50 text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all"
              >
                <Icon name="Phone" size={20} />
                +7 949 004-90-53
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
