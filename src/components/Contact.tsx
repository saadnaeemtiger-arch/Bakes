import React, { useState } from "react";
import { Mail, Phone, Clock, MapPin, Send, MessageCircle, Instagram, Facebook, Calendar, Check, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Cake Custom Inquiry",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate successful submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "Cake Custom Inquiry", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-gold">
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-choco">
            Contact MomBakes9
          </h2>
          <p className="font-sans text-sm text-choco/70 max-w-2xl mx-auto">
            Have an idea or a sketch for a dream cake? Reach out directly via the form, WhatsApp, or email, or drop by to pick up your sweet bakes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Info & Working Hours */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="bg-ivory rounded-[2rem] p-8 border border-blush/25 space-y-8 flex-1">
              <div>
                <h3 className="font-serif text-2xl font-bold text-choco">Bakery Details</h3>
                <p className="font-sans text-xs text-choco/70 mt-1">
                  We are a premium licensed home bakery workspace in Seattle, WA.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-blush/35 flex items-center justify-center text-gold shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] uppercase font-bold text-choco/50 block">Phone Number</span>
                    <a href="tel:+15551234567" className="font-serif text-sm font-bold text-choco hover:text-gold transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-blush/35 flex items-center justify-center text-gold shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] uppercase font-bold text-choco/50 block">Email Address</span>
                    <a href="mailto:hello@mombakes9.com" className="font-serif text-sm font-bold text-choco hover:text-gold transition-colors">
                      hello@mombakes9.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-blush/35 flex items-center justify-center text-gold shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] uppercase font-bold text-choco/50 block">Bakery Location</span>
                    <p className="font-serif text-sm font-bold text-choco">
                      1204 Pine Street, Seattle, WA 98101
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-blush/35 flex items-center justify-center text-gold shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] uppercase font-bold text-choco/50 block">Business Hours</span>
                    <p className="font-serif text-sm font-bold text-choco">
                      Tue - Sat: 9:00 AM - 6:00 PM
                    </p>
                    <p className="font-sans text-[10px] text-choco/60 mt-0.5">
                      Sunday & Monday: Closed (Pre-booked Wedding Deliveries Only)
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat on WhatsApp CTA Button */}
              <div className="pt-4 border-t border-blush/20">
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-sm transition-all cursor-pointer"
                  id="whatsapp-chat-direct-btn"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Chat Direct on WhatsApp</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="flex items-center space-x-4 pt-4 border-t border-blush/20 justify-center">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-choco hover:text-gold border border-blush/30 hover:scale-110 transition-transform">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-choco hover:text-gold border border-blush/30 hover:scale-110 transition-transform">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Premium styled map graphic representation (SEO, clean look) */}
            <div className="h-44 rounded-[2rem] overflow-hidden relative border border-blush/30 shadow-inner group" id="mock-maps-widget">
              <div className="absolute inset-0 bg-[#E5E3DF] flex items-center justify-center p-4">
                {/* Visual Minimalist Map representation */}
                <div className="absolute top-4 left-6 bg-white/80 backdrop-blur-md border border-blush/40 px-3 py-1.5 rounded-xl shadow-sm z-10 flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span className="font-sans text-[9px] font-bold text-choco uppercase">Seattle Central Area</span>
                </div>
                <div className="w-full h-full relative opacity-85">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-choco flex items-center justify-center text-white border-4 border-white shadow-lg animate-bounce">
                      🍰
                    </div>
                    <div className="bg-choco text-white text-[9px] font-sans font-bold uppercase px-3 py-1 rounded-full shadow-md mt-1.5 whitespace-nowrap">
                      MomBakes9 Kitchen
                    </div>
                  </div>
                  {/* Decorative road grids */}
                  <div className="absolute inset-x-0 h-1 bg-white/60 top-1/3 rotate-12" />
                  <div className="absolute inset-x-0 h-1.5 bg-white/60 top-2/3 -rotate-6" />
                  <div className="absolute inset-y-0 w-1 bg-white/60 left-1/3 rotate-45" />
                  <div className="absolute inset-y-0 w-1.5 bg-white/60 left-2/3 -rotate-12" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Inquiry Message Form */}
          <div className="lg:col-span-7 bg-ivory rounded-[2.5rem] p-8 sm:p-12 border border-blush/25 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-choco">Leave a Message</h3>
                <p className="font-sans text-xs text-choco/70 mt-1">
                  Have a quick general question or want to ask about special booking slots? Use this sweet mailbox!
                </p>
              </div>

              {success ? (
                <div className="p-8 bg-green-50 border border-green-200 rounded-2xl text-center space-y-4" id="contact-success">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-choco">Sweet Message Received!</h4>
                  <p className="font-sans text-xs text-choco/75 max-w-sm mx-auto">
                    Thank you so much! Your greeting has flown into Mom's inbox. She will get back to you personally very soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="direct-contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <label className="font-sans text-[10px] uppercase font-bold tracking-wider text-choco/60">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Lily Adams"
                        className="w-full px-4 py-3 rounded-xl border border-blush/40 bg-white text-choco text-sm focus:outline-none focus:border-gold placeholder:text-choco/35"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <label className="font-sans text-[10px] uppercase font-bold tracking-wider text-choco/60">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="lily@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-blush/40 bg-white text-choco text-sm focus:outline-none focus:border-gold placeholder:text-choco/35"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label className="font-sans text-[10px] uppercase font-bold tracking-wider text-choco/60">
                      Subject Matter
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-blush/40 bg-white text-choco text-sm focus:outline-none focus:border-gold"
                    >
                      <option value="Cake Custom Inquiry">Cake Custom Inquiry</option>
                      <option value="Event Catering Quote">Event Catering Quote</option>
                      <option value="Dietary Options Question">Dietary Options Question</option>
                      <option value="Feedback / Saying Hello">Feedback / Saying Hello</option>
                    </select>
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label className="font-sans text-[10px] uppercase font-bold tracking-wider text-choco/60">
                      Write your note
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share your sweet ideas, party date, design request, or references here..."
                      className="w-full px-4 py-3 rounded-xl border border-blush/40 bg-white text-choco text-sm focus:outline-none focus:border-gold placeholder:text-choco/35"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-choco hover:bg-gold text-cream hover:text-white rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2 transition-all shadow-sm cursor-pointer disabled:opacity-50"
                    id="contact-form-submit-btn"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 animate-spin" />
                        <span>Sending Mailbox...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
