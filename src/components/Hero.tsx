import { motion } from "motion/react";
import { Sparkles, ArrowRight, Heart, Award } from "lucide-react";

interface HeroProps {
  onOpenCustomWizard: () => void;
  onBrowseCollection: () => void;
}

export default function Hero({ onOpenCustomWizard, onBrowseCollection }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-ivory via-cream to-ivory pt-24 pb-12"
    >
      {/* Decorative Floating Blobs and Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blush/30 filter blur-3xl opacity-60 animate-float-slow -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold/10 filter blur-3xl opacity-50 animate-float-reverse -z-10" />

      {/* Decorative Vector Shapes (representing floating decorations) */}
      <div className="absolute top-1/4 right-1/4 text-gold/30 animate-float-slow hidden md:block">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 text-blush/80 animate-float-reverse hidden md:block">
        <Heart className="w-6 h-6 fill-blush/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-blush/40 border border-blush text-choco px-4 py-1.5 rounded-full self-center lg:self-start shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider">
                Mom's Secret recipes, now serving smiles
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-choco leading-tight">
                Homemade Cakes <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-choco via-gold to-choco italic">
                  Crafted with Love
                </span>
              </h1>
              <p className="font-sans text-base sm:text-lg text-choco/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Freshly baked cakes, cupcakes, pastries, and desserts made from premium organic ingredients for birthdays, weddings, anniversaries, and every special celebration.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onOpenCustomWizard}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-choco hover:bg-choco/90 text-cream font-bold uppercase text-sm tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                id="hero-order-custom-btn"
              >
                <span>Order Your Cake</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onBrowseCollection}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-ivory text-choco border border-blush font-bold uppercase text-sm tracking-wider shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                id="hero-browse-collection-btn"
              >
                Browse Collection
              </button>
            </motion.div>

            {/* Quick value badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-blush/30"
            >
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-serif text-2xl font-bold text-choco">100%</span>
                <span className="font-sans text-xs text-choco/70">Homemade Love</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-serif text-2xl font-bold text-choco">Premium</span>
                <span className="font-sans text-xs text-choco/70">Organic Butter</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-serif text-2xl font-bold text-choco">Custom</span>
                <span className="font-sans text-xs text-choco/70">Free Estimates</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visuals - Luxury Stacked Cakes Carousel / Design */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[400px] sm:h-[500px]">
            {/* Main Center Image Frame with luxury border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative w-72 sm:w-80 h-[380px] sm:h-[440px] rounded-t-full rounded-b-2xl overflow-hidden border-8 border-white shadow-2xl z-20 hover:scale-102 transition-transform duration-500"
            >
              <img
                src="https://images.unsplash.com/photo-1527525443983-6e60c75ecc04?w=800&auto=format&fit=crop&q=80"
                alt="Luxury Floral Cake"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-choco/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-serif italic text-lg leading-tight">"A sweet piece of heaven."</p>
                  <p className="text-[10px] tracking-wider uppercase font-semibold text-blush mt-1">
                    Signature Wedding Rose
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Behind Background Circle */}
            <div className="absolute w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] rounded-full border border-gold/20 animate-spin-slow -z-10" />

            {/* Back Offset Card Left */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -6 }}
              animate={{ opacity: 1, x: -80, rotate: -12 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute left-4 w-44 h-56 rounded-2xl overflow-hidden border-4 border-white shadow-lg z-10 hidden sm:block"
            >
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80"
                alt="Chocolate Fudge Cake"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Back Offset Card Right */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 6 }}
              animate={{ opacity: 1, x: 80, rotate: 12 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute right-4 w-44 h-56 rounded-2xl overflow-hidden border-4 border-white shadow-lg z-10 hidden sm:block"
            >
              <img
                src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&auto=format&fit=crop&q=80"
                alt="Biscoff Cake"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Decorative Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-6 right-2 bg-white px-4 py-2.5 rounded-xl shadow-lg border border-blush/30 z-30 flex items-center space-x-2"
            >
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <Award className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xs font-bold text-choco">Award Winner</span>
                <span className="font-sans text-[9px] text-choco/70">Best Local Bakery 2026</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
