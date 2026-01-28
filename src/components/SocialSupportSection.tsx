import Icon from '@/components/ui/icon.tsx';

export default function SocialSupportSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Icon name="Heart" size={18} />
              Социальная поддержка
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Социальная поддержка и скидки
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Мы понимаем текущую ситуацию и всегда идем навстречу тем, кто нуждается в поддержке.
              Для нас важно, чтобы качественный ремонт был доступен каждому.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Пенсионерам</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Предоставляем особые условия и скидки на все виды строительных и ремонтных работ.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Инвалидам и ветеранам</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Приоритетное обслуживание и максимально выгодные цены.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" size={24} className="text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Семьям участников СВО</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Индивидуальный подход и помощь в решении строительных вопросов.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Baby" size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Многодетным семьям</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Делаем скидки на капитальный ремонт и строительство жилья.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Package" size={24} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Помощь с материалами</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Подскажем, где купить дешевле, и поможем с доставкой, чтобы вы не переплачивали.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="tel:+79490049053"
              className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <Icon name="Phone" size={24} />
              Узнать подробнее о скидках
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
