import HeroSection from '@/components/HeroSection';
import PromoSection from '@/components/PromoSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import SocialSupportSection from '@/components/SocialSupportSection';
import WhyUsSection from '@/components/WhyUsSection';
import ProcessSection from '@/components/ProcessSection';
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
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;