import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Header />
      <div className="pt-16">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
