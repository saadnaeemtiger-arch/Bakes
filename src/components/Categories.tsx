import { motion } from "motion/react";
import { CATEGORIES } from "../data";
import { ArrowUpRight } from "lucide-react";

interface CategoriesProps {
  onSelectCategory: (categoryId: string) => void;
}

export default function Categories({ onSelectCategory }: CategoriesProps) {
  return (
    <section id="cakes" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-gold">
            Our Sweet Collections
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-choco">
            Featured Cake Categories
          </h2>
          <p className="font-sans text-sm text-choco/70 max-w-2xl mx-auto">
            Explore our diverse collection of handcrafted bakes, prepared fresh with custom designs for all of life's special celebrations.
          </p>
        </div>

        {/* Categories Grid (Bento Grid Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              id={`cat-card-${category.id}`}
              className="group relative h-[360px] rounded-3xl overflow-hidden bg-ivory border border-blush/20 shadow-sm flex flex-col justify-end p-6 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Image with zoom on hover */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay for reading accessibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-choco/90 via-choco/40 to-transparent" />
              </div>

              {/* Category Info */}
              <div className="relative z-10 space-y-3">
                <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                  {category.name}
                </h3>
                <p className="font-sans text-[11px] leading-relaxed text-cream/90 line-clamp-2">
                  {category.description}
                </p>
                <button
                  onClick={() => onSelectCategory(category.id)}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-gold hover:text-white uppercase tracking-wider pt-2 group/btn cursor-pointer"
                  id={`cat-view-btn-${category.id}`}
                >
                  <span>View Collection</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
