import { useState, useEffect } from "react";
import { PRODUCTS, CATEGORIES } from "../data";
import { Heart, Sparkles, ShoppingBag, RotateCcw } from "lucide-react";

interface BestSellersProps {
  selectedCategory: string;
  onResetCategory: () => void;
  onOrderNow: (productName: string, categoryId: string) => void;
}

export default function BestSellers({ selectedCategory, onResetCategory, onOrderNow }: BestSellersProps) {
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    if (selectedCategory) {
      setActiveTab(selectedCategory);
    } else {
      setActiveTab("all");
    }
  }, [selectedCategory]);

  const handleTabChange = (categoryId: string) => {
    setActiveTab(categoryId);
    if (categoryId === "all") {
      onResetCategory();
    }
  };

  const filteredProducts = activeTab === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeTab);

  const getCategoryName = (id: string) => {
    if (id === "all") return "All Creations";
    return CATEGORIES.find(c => c.id === id)?.name || id;
  };

  return (
    <section id="best-sellers" className="py-24 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="text-center md:text-left space-y-2">
            <span className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-gold flex items-center justify-center md:justify-start gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Chef's Handcrafted Picks
            </span>
            <h2 className="font-serif text-4xl font-bold text-choco">
              Our Best Sellers
            </h2>
            <p className="font-sans text-xs text-choco/70 max-w-lg">
              Freshly prepped cakes and boxes crafted using Mom's authentic family recipes. Over hundreds ordered this season.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 max-w-full overflow-x-auto pb-2">
            <button
              onClick={() => handleTabChange("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-choco text-cream shadow-sm"
                  : "bg-white text-choco border border-blush/30 hover:bg-blush/10"
              }`}
              id="filter-tab-all"
            >
              All Best Sellers
            </button>
            {CATEGORIES.map(c => (
              <button
                key={c.id}
                onClick={() => handleTabChange(c.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === c.id
                    ? "bg-choco text-cream shadow-sm"
                    : "bg-white text-choco border border-blush/30 hover:bg-blush/10"
                }`}
                id={`filter-tab-${c.id}`}
              >
                {c.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Category Alert/Reset helper */}
        {selectedCategory && (
          <div className="flex items-center space-x-2 bg-blush/30 border border-blush px-4 py-2 rounded-xl mb-8 self-start w-fit text-xs text-choco" id="selected-category-badge">
            <span>Showing custom category: <strong>{getCategoryName(selectedCategory)}</strong></span>
            <button onClick={onResetCategory} className="text-gold font-bold hover:underline inline-flex items-center gap-1 cursor-pointer">
              <RotateCcw className="w-3 h-3" /> Clear filter
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-blush/20 max-w-lg mx-auto" id="no-products-alert">
            <p className="font-serif text-xl text-choco">More goodies baking in the oven!</p>
            <p className="font-sans text-xs text-choco/60 mt-2">
              We're currently whipping up new customized samples for this category. Click 'All Best Sellers' to view available orders or consult with BakeBot below!
            </p>
            <button
              onClick={() => handleTabChange("all")}
              className="mt-6 px-6 py-2.5 bg-choco text-cream rounded-full text-xs font-bold uppercase tracking-wider"
              id="no-products-reset-btn"
            >
              Show All Best Sellers
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="group bg-white rounded-3xl border border-blush/20 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* Product Image Frame */}
                <div className="relative h-64 overflow-hidden bg-ivory">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Heart Like Accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-choco hover:text-red-500 cursor-pointer shadow-sm transition-colors">
                    <Heart className="w-4 h-4" />
                  </div>
                  {/* Category Tag Badge */}
                  {product.tag && (
                    <div className="absolute bottom-4 left-4 bg-choco/80 backdrop-blur-md text-cream text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      {product.tag}
                    </div>
                  )}
                </div>

                {/* Info and Purchase Options */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-bold text-choco tracking-tight group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-sans text-xs text-choco/70 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-blush/20 mt-auto">
                    {product.price && (
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-choco/50">
                          Starting at
                        </span>
                        <span className="font-serif text-lg font-bold text-choco">
                          {product.price}
                        </span>
                      </div>
                    )}
                    <button
                      onClick={() => onOrderNow(product.name, product.category)}
                      className="px-5 py-2.5 bg-choco hover:bg-gold hover:text-white rounded-full text-[10px] uppercase tracking-widest font-bold text-cream flex items-center space-x-1.5 transition-all duration-300 shadow-sm cursor-pointer"
                      id={`product-order-btn-${product.id}`}
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Order Now</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
