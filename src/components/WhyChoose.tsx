import { motion } from "motion/react";
import {
  Sparkles,
  ShoppingBag,
  Flame,
  Heart,
  Gem,
  Award,
  Truck,
  HeartHandshake,
  DollarSign
} from "lucide-react";

export default function WhyChoose() {
  const highlights = [
    {
      icon: <Flame className="w-6 h-6 text-gold" />,
      title: "Freshly Baked Daily",
      desc: "Every pastry and cake layer is freshly prepped to order in our home bakery kitchen on your special celebration morning."
    },
    {
      icon: <Heart className="w-6 h-6 text-gold" />,
      title: "Handmade Recipes",
      desc: "No bulk commercial additives or cheap pre-mixes. We fold real fruit purées, slow-cooked caramel, and love into our doughs."
    },
    {
      icon: <Gem className="w-6 h-6 text-gold" />,
      title: "Premium Ingredients",
      desc: "Our recipes feature pure organic Madagascar vanilla extract, imported gourmet chocolate, sweet cream farm butter, and organic berries."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold" />,
      title: "Custom Designs",
      desc: "Collaborate directly with Mom to customize textures, fresh florist flowers, pastel palettes, and custom toppers for your bakes."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-gold" />,
      title: "Affordable Prices",
      desc: "We believe in honest, direct-to-baker pricing without retail store markup, giving you elite luxury level for incredible value."
    },
    {
      icon: <Truck className="w-6 h-6 text-gold" />,
      title: "Fast & Safe Delivery",
      desc: "Rest easy with our professional, temperature-controlled direct courier deliveries safely bringing cakes straight to your venue doors."
    },
    {
      icon: <Award className="w-6 h-6 text-gold" />,
      title: "Elegant Presentation",
      desc: "We package every bake in gorgeous custom luxury cake boxes tied with double-faced silk ribbons—perfect for magnificent gifting."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-gold" />,
      title: "Friendly Customer Support",
      desc: "Get fast personalized replies directly from Mom or check size suggestions and flavor pairs instantly with BakeBot, our AI expert."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blush/20 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-gold">
            Pure Craftsmanship
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-choco">
            Why Choose MomBakes9
          </h2>
          <p className="font-sans text-sm text-choco/70 max-w-2xl mx-auto">
            We are dedicated to elevating your special occasions with magnificent designs and unforgettable flavor stories baked with care.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              id={`why-choose-card-${idx}`}
              className="bg-ivory rounded-3xl p-8 border border-blush/10 hover:border-gold/30 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col items-center text-center group"
            >
              {/* Animated Icon Ring */}
              <div className="w-14 h-14 rounded-full bg-white border border-blush/40 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-gold/60 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-base font-bold text-choco mt-6 mb-3 group-hover:text-gold transition-colors">
                {item.title}
              </h3>
              <p className="font-sans text-xs leading-relaxed text-choco/75">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
