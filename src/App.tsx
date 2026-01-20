import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/services/:serviceId" element={<ServicePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;