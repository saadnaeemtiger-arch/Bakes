import React, { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowRight, Cake, Send, Check } from "lucide-react";
import { CATEGORIES } from "../data";

interface FooterProps {
  onSelectCategory: (categoryId: string) => void;
}

export default function Footer({ onSelectCategory }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      if (data.success) {
        setSubscribed(true);
        setEmail("");
        setTimeout(() => setSubscribed(false), 5000);
      }
    } catch (err) {
      console.error(err);
      alert("Error subscribing. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Creations Gallery", href: "#gallery" },
    { name: "Custom Inquiry", href: "#custom-orders" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Baking FAQs", href: "#faq" },
    { name: "Get in Touch", href: "#contact" }
  ];

  return (
    <footer className="bg-choco text-cream pt-20 pb-12 border-t border-blush/10 relative overflow-hidden">
      {/* Background soft flower or circular ring decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/5 rounded-full filter blur-xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-cream/10">
          
          {/* Col 1: Brand details & Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-full bg-blush flex items-center justify-center text-choco">
                <Cake className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                MomBakes9
              </span>
            </div>
            
            <p className="font-sans text-xs text-cream/70 leading-relaxed">
              We specialize in custom multi-tier wedding cakes, celebration bakes, and fresh mini desserts handcrafted inside our Seattle home kitchen with deep motherly care.
            </p>

            {/* Newsletter Subscription */}
            <div className="space-y-3 pt-2">
              <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-gold block">
                Subscribe to our sweet club
              </span>
              {subscribed ? (
                <div className="flex items-center space-x-2 text-xs text-green-400 bg-white/5 border border-green-500/30 p-3 rounded-xl" id="newsletter-success-footer">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Subscribed! Check your inbox for sweet surprises.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex items-center space-x-2" id="footer-newsletter-form">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 text-white text-xs border border-white/10 focus:outline-none focus:border-gold placeholder:text-cream/40"
                    id="newsletter-email-input"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="p-2.5 bg-gold hover:bg-white text-choco hover:text-choco rounded-xl transition-colors cursor-pointer"
                    id="newsletter-submit-btn"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-xs text-cream/75 hover:text-gold transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Cake Collections */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white tracking-wider">Cake Collections</h4>
            <div className="grid grid-cols-1 gap-2">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className="font-sans text-xs text-cream/75 hover:text-gold transition-colors text-left block py-0.5 cursor-pointer focus:outline-none"
                  id={`footer-cat-btn-${cat.id}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Col 4: Contact details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white tracking-wider">Contact Mom</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2.5 text-xs text-cream/75">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>1204 Pine Street, Seattle, WA 98101</span>
              </li>
              <li className="flex items-start space-x-2.5 text-xs text-cream/75">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <a href="tel:+15551234567" className="hover:text-gold transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start space-x-2.5 text-xs text-cream/75">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <a href="mailto:hello@mombakes9.com" className="hover:text-gold transition-colors">
                  hello@mombakes9.com
                </a>
              </li>
            </ul>

            {/* Social channels */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-white rounded-full text-cream hover:text-choco transition-all">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-white rounded-full text-cream hover:text-choco transition-all">
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-wider text-cream/50">
          <div>
            © {new Date().getFullYear()} MomBakes9 Artisan Bakery. Homemade with Sweet Love in Seattle.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
