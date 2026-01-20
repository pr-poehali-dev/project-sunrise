import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon.tsx';
import { servicesData } from '@/data/servicesData';

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-center">
          Наши услуги
        </h2>
        <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          Полный спектр строительных и кровельных работ для частных и коммерческих объектов
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all hover:border-orange-500 group cursor-pointer block"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <Icon name={service.icon} size={32} className="text-orange-500 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-orange-500 font-semibold">
                Подробнее
                <Icon name="ArrowRight" size={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}