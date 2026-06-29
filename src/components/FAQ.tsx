import { useState } from "react";
import { FAQS } from "../data";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-ivory relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-gold">
            Baking Inquiries
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-choco">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-sm text-choco/70 max-w-lg mx-auto">
            Find answers to commonly asked questions about booking custom bakes, delivery ranges, deposit structures, and dietary needs.
          </p>
        </div>

        {/* Accordion container */}
        <div className="space-y-4" id="faq-accordion-group">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-blush/20 overflow-hidden shadow-sm transition-all duration-300"
                id={`faq-item-${idx}`}
              >
                {/* Header question button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-blush/5 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                  id={`faq-btn-${idx}`}
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-gold shrink-0" />
                    <span className="font-serif text-sm sm:text-base font-bold text-choco">
                      {faq.question}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-ivory flex items-center justify-center text-choco shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer block */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-blush/10 bg-ivory/20" id={`faq-answer-${idx}`}>
                    <p className="font-sans text-xs sm:text-sm text-choco/85 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center bg-white border border-blush/20 rounded-3xl p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6" id="faq-need-more-help">
          <div className="text-left space-y-1">
            <h4 className="font-serif text-base font-bold text-choco">Still have some questions?</h4>
            <p className="font-sans text-xs text-choco/60">
              Mom or BakeBot would be delighted to help you explore cake possibilities!
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-choco hover:bg-gold hover:text-white rounded-xl text-[10px] font-bold uppercase tracking-wider text-cream transition-all text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
