import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ComponentsGallery from './components/ComponentsGallery';
import Benefits from './components/Benefits';
import TechSpecs from './components/TechSpecs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import TermsPage from './components/TermsPage';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Gallery />
        <ComponentsGallery />
        <Benefits />
        <TechSpecs />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/términos-condiciones" element={<TermsPage />} />
      </Routes>
    </HashRouter>
  );
}
