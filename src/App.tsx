import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle, Sparkles } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Categories from "./components/Categories";
import BestSellers from "./components/BestSellers";
import WhyChoose from "./components/WhyChoose";
import Gallery from "./components/Gallery";
import CustomOrders from "./components/CustomOrders";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIConsultant from "./components/AIConsultant";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [prefilledCakeName, setPrefilledCakeName] = useState<string>("");
  const [prefilledCakeCategory, setPrefilledCakeCategory] = useState<string>("");
  
  const [isAIConsultantOpen, setIsAIConsultantOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Smooth scroll down to the best sellers section to view selection
    const targetElement = document.querySelector("#best-sellers");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth"
      });
    }
  };

  const handleResetCategory = () => {
    setSelectedCategory("");
  };

  const handleOrderNowTrigger = (productName: string, categoryId: string) => {
    setPrefilledCakeName(productName);
    setPrefilledCakeCategory(categoryId);
    // Smooth scroll down to custom orders wizard
    const targetElement = document.querySelector("#custom-orders");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleOpenCustomWizardDirectly = () => {
    // Clear out previous prefilled and go straight to Custom Order form
    setPrefilledCakeName("");
    setPrefilledCakeCategory("");
    const targetElement = document.querySelector("#custom-orders");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans select-none bg-cream text-choco overflow-x-hidden">
      
      {/* Sticky Header Navigation */}
      <Header
        onOpenCustomWizard={handleOpenCustomWizardDirectly}
        onOpenAIConsultant={() => setIsAIConsultantOpen(true)}
      />

      {/* Hero Intro landing section */}
      <Hero
        onOpenCustomWizard={handleOpenCustomWizardDirectly}
        onBrowseCollection={() => {
          const target = document.querySelector("#cakes");
          if (target) {
            window.scrollTo({
              top: target.getBoundingClientRect().top + window.pageYOffset - 80,
              behavior: "smooth"
            });
          }
        }}
      />

      {/* About MomBakes9 narrative and story values */}
      <About />

      {/* Featured Cake Categories (Bento Grid) */}
      <Categories onSelectCategory={handleSelectCategory} />

      {/* Best Sellers showcase (filterable by selectedCategory) */}
      <BestSellers
        selectedCategory={selectedCategory}
        onResetCategory={handleResetCategory}
        onOrderNow={handleOrderNowTrigger}
      />

      {/* Why Choose MomBakes9 value card deck */}
      <WhyChoose />

      {/* Gallery masonry photo lists with Zoom lightboxes */}
      <Gallery />

      {/* Custom order process walkthrough & Interactive Inquiry Form builder */}
      <CustomOrders
        prefilledName={prefilledCakeName}
        prefilledCategory={prefilledCakeCategory}
      />

      {/* Five-star Client Testimonials reviews slider/grid */}
      <Testimonials />

      {/* FAQ accordions list */}
      <FAQ />

      {/* Direct contact info, WhatsApp channels, locations & map representation */}
      <Contact />

      {/* Dynamic footer, category quicklinks, newsletter signup */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* Interactive AI Baking Assistant (BakeBot Slide Panel) */}
      <AIConsultant
        isOpen={isAIConsultantOpen}
        onClose={() => setIsAIConsultantOpen(false)}
        onTriggerOrderPrefill={handleOrderNowTrigger}
      />

      {/* STACKED FLOATING BUTTONS IN THE BOTTOM RIGHT */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3">
        
        {/* Scroll To Top Action Button */}
        {showScrollTop && (
          <button
            onClick={handleScrollToTop}
            className="w-11 h-11 bg-white hover:bg-ivory text-choco rounded-full border border-blush shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            id="scroll-to-top-btn"
            title="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* AI BakeBot Floating Messenger Launcher */}
        <button
          onClick={() => setIsAIConsultantOpen(!isAIConsultantOpen)}
          className="w-14 h-14 bg-choco hover:bg-gold text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer animate-pulse border border-gold/30"
          id="floating-ai-launcher-btn"
          title="Consult BakeBot (AI Expert)"
        >
          <Sparkles className="w-6 h-6 text-gold fill-gold/10" />
        </button>

        {/* Global Floating WhatsApp Direct Action Button */}
        <a
          href="https://wa.me/15551234567"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer border border-green-400/40"
          id="floating-whatsapp-btn"
          title="Chat directly on WhatsApp with Mom"
        >
          <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
        </a>
      </div>
    </div>
  );
}
