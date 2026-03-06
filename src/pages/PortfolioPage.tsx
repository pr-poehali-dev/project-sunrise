import Header from '@/components/Header';
import PortfolioSection from '@/components/PortfolioSection';
import Footer from '@/components/Footer';

export default function PortfolioPage() {
  return (
    <main className="bg-white">
      <Header />
      <div className="pt-16">
        <div className="bg-slate-900 py-16 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Наши выполненные работы</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Реальные фотографии наших объектов — кровля, фасады, фундаменты, строительство
            </p>
          </div>
        </div>
        <PortfolioSection />
      </div>
      <Footer />
    </main>
  );
}
