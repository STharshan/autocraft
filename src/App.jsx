import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Pricing from './pages/Pricing';
import Home from './pages/Home';
import Service from './pages/Service';
import Contact from './pages/Contact';
import PaintServices from './pages/ExtraServices/PaintServices';
import ACServices from './pages/ExtraServices/ACServices';
import MOT from './pages/ExtraServices/MOT';
import Mechanical from './pages/ExtraServices/Mechanical.jsx';
import Body from './pages/ExtraServices/Body';
import BodyService from './pages/ExtraServices/BodyService';
import Diagnostics from './pages/ExtraServices/Diagnostics';
import Dents from './pages/ExtraServices/Dents';
import ScrollToTop from './components/ScrollToTop.jsx';
import TermsConditions from './components/Term.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import GDPRConsent from './components/GDPRButton.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/paint-services" element={<PaintServices />} />
        <Route path="/services/ac-service" element={<ACServices />} />
        <Route path="/services/mot" element={<MOT />} />
        <Route path="/services/mechanical-repairs" element={<Mechanical />} />
        <Route path="/services/body-smart-repairs" element={<Body />} />
        <Route path="/services/service" element={<BodyService />} />
        <Route path="/services/diagnostics" element={<Diagnostics />} />
        <Route path="/services/dent-repair" element={<Dents />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
