import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Home',
    title: 'Монтаж кровли',
    description: 'Устройство кровли под ключ: металлочерепица, профнастил, мягкая кровля, шифер. Частные дома, коммерческие здания, хозяйственные постройки.',
  },
  {
    icon: 'Wrench',
    title: 'Ремонт кровли',
    description: 'Устраняем протечки, заменяем повреждённые элементы, выполняем капитальный и частичный ремонт крыш любой сложности.',
  },
  {
    icon: 'Building2',
    title: 'Общестроительные работы',
    description: 'Фундаменты, стены, перекрытия, пристройки, реконструкция зданий. Строительство с нуля и по проекту заказчика.',
  },
  {
    icon: 'Snowflake',
    title: 'Утепление домов и крыш',
    description: 'Утепление фасадов, кровли, чердаков и перекрытий. Снижение теплопотерь и расходов на отопление.',
  },
  {
    icon: 'Paintbrush',
    title: 'Фасадные и отделочные работы',
    description: 'Облицовка фасадов, декоративные элементы, подшивка свесов, внутренние и внешние отделочные работы.',
  },
  {
    icon: 'Droplets',
    title: 'Водосточные системы',
    description: 'Монтаж и замена водосточных систем для защиты здания от влаги и разрушений.',
  },
];

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
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all hover:border-orange-500 group"
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

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-all text-sm">
                  Заказать
                </button>
                <button className="px-5 py-2 border border-orange-500 text-orange-500 hover:bg-orange-50 rounded-lg font-semibold transition-all text-sm">
                  Рассчитать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
