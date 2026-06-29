import React, { useState } from "react";
import { GALLERY_ITEMS } from "../data";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Wedding Cakes", "Birthday Cakes", "Cupcakes", "Dessert Tables", "Cookies", "Brownies", "Baking Process", "Happy Customers"];

  const filteredItems = activeFilter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const handleOpenLightbox = (index: number) => {
    // Find index of the item in the filtered list
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center space-y-4 mb-12">
          <span className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-gold">
            A Feast for the Eyes
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-choco">
            Our Sweet Gallery
          </h2>
          <p className="font-sans text-sm text-choco/70 max-w-2xl mx-auto">
            Browse beautiful snapshots of our actual customer celebration cakes, behind-the-scenes magic, and golden smile moments.
          </p>
        </div>

        {/* Gallery Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === cat
                  ? "bg-choco text-cream shadow-sm"
                  : "bg-white text-choco border border-blush/30 hover:bg-blush/10"
              }`}
              id={`gallery-filter-${cat.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid/Masonry Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="gallery-grid">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white border border-blush/10 h-72 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Blur Glass Overlay */}
              <div className="absolute inset-0 bg-choco/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <ZoomIn className="w-4 h-4" />
                </div>
                <span className="text-[9px] uppercase tracking-wider font-bold text-gold mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-sm font-semibold text-white leading-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-choco/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={handleCloseLightbox}
          id="gallery-lightbox"
        >
          {/* Close button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            id="lightbox-close-btn"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            id="lightbox-prev-btn"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            id="lightbox-next-btn"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Core Lightbox Card */}
          <div
            className="relative max-w-4xl max-h-[85vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col sm:flex-row border border-white/20"
            onClick={(e) => e.stopPropagation()}
            id="lightbox-content-card"
          >
            {/* Left image area */}
            <div className="sm:w-2/3 h-[50vh] sm:h-[70vh] bg-ivory">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right text details */}
            <div className="sm:w-1/3 p-8 flex flex-col justify-between bg-ivory">
              <div className="space-y-4">
                <span className="font-sans text-[10px] uppercase tracking-widest font-bold text-gold bg-gold/10 px-3 py-1 rounded-full self-start w-fit">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-choco leading-tight">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="font-sans text-xs text-choco/75 leading-relaxed">
                  Every photo displayed in our gallery represents a genuine handcrafted product prepared inside MomBakes9's home workspace. Feel inspired? Create a customized quote with Mom using our custom order wizard!
                </p>
              </div>

              <div className="pt-6 border-t border-blush/30 mt-6 sm:mt-0 flex flex-col space-y-3">
                <a
                  href="#custom-orders"
                  onClick={(e) => {
                    handleCloseLightbox();
                    const targetElement = document.querySelector("#custom-orders");
                    if (targetElement) {
                      window.scrollTo({
                        top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
                        behavior: "smooth"
                      });
                    }
                  }}
                  className="w-full py-3 bg-choco hover:bg-gold hover:text-white rounded-full text-center text-[10px] font-bold uppercase tracking-wider text-cream shadow-md transition-all duration-300"
                >
                  Inquire For Custom Design
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
