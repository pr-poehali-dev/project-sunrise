import Header from '@/components/Header';
import SocialSupportSection from '@/components/SocialSupportSection';
import Footer from '@/components/Footer';

export default function SocialPage() {
  return (
    <main className="bg-white">
      <Header />
      <div className="pt-16">
        <div className="bg-blue-700 py-16 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Социальная поддержка</h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Мы помогаем тем, кто нуждается в поддержке — льготные условия и скидки для социальных категорий граждан
            </p>
          </div>
        </div>
        <SocialSupportSection />
      </div>
      <Footer />
    </main>
  );
}
