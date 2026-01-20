import Icon from '@/components/ui/icon.tsx';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
            О нашей строительной компании
          </h2>
          
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              Мы — строительная компания в Донецке, выполняющая полный комплекс строительных и кровельных работ. 
              Занимаемся монтажом и ремонтом крыш, строительством домов, фасадными, утеплительными и отделочными работами.
            </p>
            
            <p>
              Работаем напрямую, без посредников, используем проверенные материалы и соблюдаем строительные нормы. 
              Для нас важны качество, безопасность и долгосрочный результат.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Опытные строительные бригады</h3>
                <p className="text-slate-600">Профессионалы с многолетним опытом работы</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <Icon name="DollarSign" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Прозрачные цены без скрытых доплат</h3>
                <p className="text-slate-600">Фиксированная стоимость без сюрпризов</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Гарантия на все виды работ</h3>
                <p className="text-slate-600">Юридически закреплённые обязательства</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <Icon name="UserCheck" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Индивидуальный подход к каждому объекту</h3>
                <p className="text-slate-600">Учитываем все особенности и пожелания</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}