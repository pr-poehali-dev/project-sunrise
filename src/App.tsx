import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import WhyUsPage from "./pages/WhyUsPage";
import SocialPage from "./pages/SocialPage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";
import AwardsPage from "./pages/AwardsPage";
import ServicePage from "./pages/ServicePage";
import ReviewsPage from "./pages/ReviewsPage";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/why-us" element={<WhyUsPage />} />
      <Route path="/social" element={<SocialPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/awards" element={<AwardsPage />} />
      <Route path="/services/:serviceId" element={<ServicePage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;