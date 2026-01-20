export default function PortfolioSection() {
  const portfolioImages = [
    'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=800',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
  ];

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
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={image}
                alt={`Проект ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">Объект №{index + 1}</p>
                  <p className="text-white/80 text-sm">Кровельные работы, Донецк</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
