import { TESTIMONIALS } from "../data";
import { Star, Quote, Heart } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative floral background vectors */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-blush/25 rounded-full filter blur-3xl -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-gold">
            Loved By Families
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-choco">
            What Our Sweet Customers Say
          </h2>
          <p className="font-sans text-sm text-choco/70 max-w-2xl mx-auto">
            Read heartwarming stories from couples, mothers, and hostesses who trusted MomBakes9 to make their milestones sweet and magnificent.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className="bg-ivory rounded-3xl p-8 border border-blush/10 hover:border-gold/20 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
            >
              {/* Quote Icon watermark */}
              <div className="absolute top-6 right-8 text-blush/40 group-hover:text-gold/20 transition-colors">
                <Quote className="w-10 h-10 transform scale-x-[-1]" />
              </div>

              {/* Five Star rating and text */}
              <div className="space-y-4 relative z-10">
                <div className="flex items-center space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="font-sans text-xs italic text-choco/85 leading-relaxed">
                  "{t.review}"
                </p>
              </div>

              {/* Customer Bio */}
              <div className="flex items-center space-x-3 pt-4 border-t border-blush/20 relative z-10">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-blush bg-white">
                  <img
                    src={t.image}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-choco leading-none">
                    {t.name}
                  </h4>
                  <span className="font-sans text-[9px] uppercase tracking-wider text-gold font-bold block mt-1">
                    {t.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge simulation */}
        <div className="mt-16 bg-ivory rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto border border-blush/25 flex flex-col sm:flex-row items-center justify-between gap-6" id="google-reviews-badge">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center font-serif text-2xl font-bold text-choco shadow-sm">
              G
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-choco">Google Customer Rating</h4>
              <div className="flex items-center space-x-1.5 mt-1">
                <span className="font-sans text-xs font-bold text-choco">4.9 / 5.0</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                  ))}
                </div>
                <span className="font-sans text-[10px] text-choco/60">(148 reviews)</span>
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-2.5 bg-choco hover:bg-gold hover:text-white text-cream hover:shadow-sm text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all"
          >
            Leave A Review
          </a>
        </div>
      </div>
    </section>
  );
}
