import Icon from '@/components/ui/icon.tsx';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
            О нас
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Работаем по всей ДНР</h3>
                <p className="text-slate-600">Выезжаем в любой город и район республики. Знаем местную специфику и работаем в любых текущих условиях.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Hammer" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Строим на совесть</h3>
                <p className="text-slate-600">Имеем большой опыт в строительстве и восстановлении жилья. Делаем надежно, чтобы дом служил долгие годы.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Профессиональные бригады</h3>
                <p className="text-slate-600">У нас работают опытные мастера своего дела. Работаем напрямую, без посредников и лишних переплат.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="DollarSign" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Честная цена</h3>
                <p className="text-slate-600">Фиксируем стоимость работ до их начала. Прозрачные расчеты, никаких скрытых накруток в процессе.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Package" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Помощь с материалами</h3>
                <p className="text-slate-600">Берем на себя выбор, закупку и доставку качественных стройматериалов. Вам не нужно ни о чем беспокоиться.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Clock" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Соблюдение сроков</h3>
                <p className="text-slate-600">Ценим ваше время, работаем оперативно и сдаем объект точно в срок.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}