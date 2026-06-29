import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cake, Menu, X, Sparkles } from "lucide-react";

interface HeaderProps {
  onOpenCustomWizard: () => void;
  onOpenAIConsultant: () => void;
}

export default function Header({ onOpenCustomWizard, onOpenAIConsultant }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Cakes", href: "#cakes" },
    { name: "Custom Orders", href: "#custom-orders" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-sm border-b border-blush/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center space-x-2 group focus:outline-none"
              id="logo-link"
            >
              <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center text-choco shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Cake className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-choco leading-none">
                  MomBakes9
                </span>
                <span className="font-sans text-[10px] tracking-wider text-gold uppercase font-semibold leading-none mt-1">
                  Homemade with Love
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-sans text-sm font-medium text-choco/80 hover:text-gold transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTAs */}
            <div className="hidden sm:flex items-center space-x-4">
              <button
                onClick={onOpenAIConsultant}
                className="flex items-center space-x-1.5 px-3.5 py-2 rounded-full border border-gold/40 text-choco bg-ivory hover:bg-gold/10 text-xs font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer"
                id="header-ai-consultant-btn"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
                <span>AI Consult</span>
              </button>
              <button
                onClick={onOpenCustomWizard}
                className="px-5 py-2 rounded-full bg-choco hover:bg-choco/90 text-cream text-xs font-semibold tracking-wide uppercase shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                id="header-custom-order-btn"
              >
                Order Custom
              </button>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="lg:hidden flex items-center space-x-3">
              <button
                onClick={onOpenAIConsultant}
                className="p-2 rounded-full bg-blush/30 text-choco"
                aria-label="AI Consultant"
                id="header-ai-mobile-btn"
              >
                <Sparkles className="w-5 h-5 text-gold" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full hover:bg-blush/20 text-choco transition-colors"
                aria-label="Toggle menu"
                id="mobile-menu-toggle"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-30 bg-ivory border-b border-blush/30 shadow-lg lg:hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-4 py-2.5 rounded-lg text-base font-medium text-choco hover:bg-blush/20 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-blush/20 flex flex-col space-y-3 px-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenAIConsultant();
                  }}
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-full border border-gold/50 text-choco bg-cream text-sm font-semibold uppercase tracking-wider"
                  id="mobile-ai-consult-btn"
                >
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span>Talk with AI Consultant</span>
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenCustomWizard();
                  }}
                  className="w-full py-3 rounded-full bg-choco text-cream text-sm font-semibold uppercase tracking-wider text-center shadow-md"
                  id="mobile-custom-order-btn"
                >
                  Order Custom Cake
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
