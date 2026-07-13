import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ChatWidget from "./components/ChatWidget.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import BackToTop from "./components/BackToTop.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Products from "./pages/Products.jsx";
import Infrastructure from "./pages/Infrastructure.jsx";
import Clientele from "./pages/Clientele.jsx";
import AiIntegration from "./pages/AiIntegration.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  const { pathname } = useLocation();

  // Keep document title roughly in sync with the route.
  useEffect(() => {
    const titles = {
      "/": "Rejig GreenLogic | Environmental Consultancy & AI Solutions",
      "/about": "About Us | Rejig GreenLogic",
      "/services": "Services | Rejig GreenLogic",
      "/products": "Products & AI | Rejig GreenLogic",
      "/infrastructure": "Infrastructure | Rejig GreenLogic",
      "/clientele": "Clientele | Rejig GreenLogic",
      "/ai-integration": "AI Integration | Rejig GreenLogic",
      "/contact": "Contact Us | Rejig GreenLogic",
      "/login": "Log In | Rejig GreenLogic",
      "/signup": "Sign Up | Rejig GreenLogic",
    };
    document.title = titles[pathname] || "Rejig GreenLogic Private Limited";
  }, [pathname]);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/infrastructure/*" element={<Infrastructure />} />

          <Route path="/events/*" element={<About />} />
          <Route path="/clientele/*" element={<Clientele />} />
          <Route path="/ai-integration/*" element={<AiIntegration />} />
          <Route path="/contact/*" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Legacy URL aliases — old PHP site paths still indexed by Google.
              Vercel 301-redirects these on full loads; these client-side
              redirects cover in-app navigation and non-Vercel hosting. */}
          <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
          <Route path="/contact-us.php" element={<Navigate to="/contact" replace />} />
          <Route path="/contactus" element={<Navigate to="/contact" replace />} />
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/about-us.php" element={<Navigate to="/about" replace />} />
          <Route path="/aboutus" element={<Navigate to="/about" replace />} />
          <Route path="/services.php" element={<Navigate to="/services" replace />} />
          <Route path="/solutions" element={<Navigate to="/services" replace />} />
          <Route path="/infrastructure.php" element={<Navigate to="/infrastructure" replace />} />
          <Route path="/clientele.php" element={<Navigate to="/clientele" replace />} />
          <Route path="/client" element={<Navigate to="/clientele" replace />} />
          <Route path="/client.php" element={<Navigate to="/clientele" replace />} />
          <Route path="/clients" element={<Navigate to="/clientele" replace />} />
          <Route path="/index.php" element={<Navigate to="/" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
