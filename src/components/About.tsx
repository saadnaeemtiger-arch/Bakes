import { motion } from "motion/react";
import { Heart, Star, Sparkles, ShieldCheck, Flame } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Heart className="w-5 h-5 text-gold" />,
      title: "Homemade with Love",
      desc: "Every batter is whipped, folded, and baked by hand with the warmth and care of a mother's home recipe."
    },
    {
      icon: <Star className="w-5 h-5 text-gold" />,
      title: "Premium Ingredients",
      desc: "We use only Madagascar vanilla beans, premium Belgian cocoa, organic farm eggs, and sweet cream butter."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-gold" />,
      title: "Beautiful Custom Designs",
      desc: "From delicate pressed edible gold leaves to handcrafted sugar florals, we design cakes as unique as your story."
    },
    {
      icon: <Flame className="w-5 h-5 text-gold" />,
      title: "Freshly Baked Every Day",
      desc: "We never freeze our bakes. Your cake is baked, filled, and frosted fresh specifically for your celebration day."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-gold" />,
      title: "Personalized Service",
      desc: "Mom personally manages every single order, ensuring tailored custom flavors and a joyful sweet consultation."
    }
  ];

  return (
    <section id="about" className="py-24 bg-ivory relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blush/20 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Professional Story Visuals */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 rounded-[2rem] overflow-hidden border border-blush/30 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1516224490913-c1b75960c226?w=600&auto=format&fit=crop&q=80"
                  alt="Mom whipping cake batter"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-44 rounded-[2rem] bg-blush/30 p-8 flex flex-col justify-center border border-blush/20">
                <span className="font-serif text-4xl font-bold text-choco">100%</span>
                <span className="font-sans text-xs uppercase tracking-widest text-gold font-bold mt-1">
                  Artisanal Care
                </span>
                <p className="text-xs text-choco/70 mt-2">Zero commercial pre-mixes or artificial preservatives.</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-44 rounded-[2rem] bg-white p-8 flex flex-col justify-center border border-orange-100/40 shadow-sm">
                <span className="font-serif text-3xl font-bold text-choco">Est. 2020</span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-choco/60 mt-1">
                  Home Kitchen Origin
                </span>
                <p className="text-xs text-choco/70 mt-2">Serving exquisite luxury bakes locally with absolute joy.</p>
              </div>
              <div className="h-64 rounded-[2rem] overflow-hidden border border-blush/30 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=600&auto=format&fit=crop&q=80"
                  alt="Finishing cake details"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right: Narrative Story */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-gold">
                The Heart of MomBakes9
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-choco leading-tight">
                Freshly Baked with Sweet Motherly Care & Luxury Craft
              </h2>
              <p className="font-sans text-base text-choco/80 leading-relaxed">
                What began as a mother's passion to bake beautiful, delicious celebration cakes for her own kids has grown into <strong>MomBakes9</strong>. Today, we craft spectacular custom multi-tiered wedding cakes, delightful birthday treats, and artisanal pastries for our beautiful community.
              </p>
              <p className="font-sans text-sm text-choco/70 leading-relaxed">
                We believe that a cake shouldn't just look like a modern sculpture—it should taste incredibly rich, moist, and unforgettable. That's why we source pure vanilla beans, fine Belgian cocoa, and organic fruits to hand-make everything from scratch. No shortcuts, no compromises.
              </p>
            </div>

            {/* Premium values listed with minimal elegance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-blush/20">
              {values.map((v, idx) => (
                <div key={idx} className="flex items-start space-x-3" id={`about-val-${idx}`}>
                  <div className="w-10 h-10 rounded-full bg-white border border-blush/50 flex items-center justify-center shadow-sm shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-choco">{v.title}</h4>
                    <p className="font-sans text-xs text-choco/70 mt-1 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
