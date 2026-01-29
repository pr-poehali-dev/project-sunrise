import HeroSection from '@/components/HeroSection';
import PromoSection from '@/components/PromoSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import SocialSupportSection from '@/components/SocialSupportSection';
import WhyUsSection from '@/components/WhyUsSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="bg-white">
      <HeroSection />
      <PromoSection />
      <AboutSection />
      <ServicesSection />
      <SocialSupportSection />
      <WhyUsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;