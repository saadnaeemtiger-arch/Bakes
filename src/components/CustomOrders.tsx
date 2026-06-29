import React, { useState, useEffect } from "react";
import { Sparkles, Check, Send, AlertCircle, ShoppingBag, Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import { CustomOrderInquiry } from "../types";

interface CustomOrdersProps {
  prefilledName?: string;
  prefilledCategory?: string;
}

export default function CustomOrders({ prefilledName, prefilledCategory }: CustomOrdersProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ success: boolean; orderId: string; message: string } | null>(null);

  const initialFormState: CustomOrderInquiry = {
    eventType: "Birthday",
    servingSize: "20 guests",
    flavor: "Chocolate Fudge",
    frosting: "Buttercream",
    filling: "Chocolate Ganache",
    details: "",
    referenceUrl: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    deliveryMethod: "pickup",
    dateNeeded: ""
  };

  const [formData, setFormData] = useState<CustomOrderInquiry>(initialFormState);

  useEffect(() => {
    if (prefilledName) {
      setFormData(prev => ({
        ...prev,
        eventType: prefilledCategory ? (prefilledCategory.charAt(0).toUpperCase() + prefilledCategory.slice(1)) : "Special Milestone",
        flavor: prefilledName.includes("Biscoff") ? "Lotus Biscoff" : prefilledName.includes("Velvet") ? "Red Velvet" : prefilledName.includes("Strawberry") ? "Strawberry Rose" : "Chocolate Fudge",
        details: `Interested in ordering the signature: ${prefilledName}.`
      }));
      // Smoothly scroll to inquiry builder
      const targetElement = document.querySelector("#inquiry-builder");
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
          behavior: "smooth"
        });
      }
    }
  }, [prefilledName, prefilledCategory]);

  const stepsInfo = [
    {
      num: "01",
      title: "Choose Your Cake",
      desc: "Pick your core style, estimated servings, flavor base, and premium fillings."
    },
    {
      num: "02",
      title: "Share Your Design",
      desc: "Provide custom styling details, color schemes, or drop a reference photo link."
    },
    {
      num: "03",
      title: "Confirm Your Order",
      desc: "Mom personally calculates pricing, checks date slots, and emails a secure deposit link."
    },
    {
      num: "04",
      title: "Freshly Baked",
      desc: "Your masterpiece is prepared from scratch with pure butter, local organic eggs, and deep care."
    },
    {
      num: "05",
      title: "Pickup or Delivery",
      desc: "Collect from our sweet home kitchen or receive hand-delivered courier boxes."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDeliverySelect = (method: "pickup" | "delivery") => {
    setFormData(prev => ({ ...prev, deliveryMethod: method }));
  };

  const validateStep = () => {
    if (step === 1) {
      return true;
    }
    if (step === 2) {
      if (!formData.details.trim()) {
        alert("Please provide some styling details so Mom understands your theme!");
        return false;
      }
      return true;
    }
    if (step === 3) {
      if (!formData.contactName.trim() || !formData.contactEmail.trim() || !formData.contactPhone.trim() || !formData.dateNeeded) {
        alert("Please complete all fields so we can contact you securely!");
        return false;
      }
      return true;
    }
    return true;
  };

  const handleNextStep = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setLoading(true);
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderDetails: formData })
      });
      const data = await response.json();
      if (data.success) {
        setSubmittedData({
          success: true,
          orderId: data.orderId,
          message: data.message
        });
      }
    } catch (error) {
      console.error(error);
      alert("Submission error. Please check internet connection or try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetForm = () => {
    setFormData(initialFormState);
    setSubmittedData(null);
    setStep(1);
  };

  return (
    <section id="custom-orders" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-gold">
            Tailored Just For You
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-choco">
            Custom Cake Ordering Process
          </h2>
          <p className="font-sans text-sm text-choco/70 max-w-2xl mx-auto">
            Bring your dream design to life. Follow our simple, structured process to place a custom cake inquiry directly with Mom.
          </p>
        </div>

        {/* Process Steps Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-20" id="order-process-steps">
          {stepsInfo.map((s, idx) => (
            <div
              key={idx}
              className="bg-ivory rounded-3xl p-6 border border-blush/10 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                <div className="text-4xl font-serif font-bold text-gold/30 group-hover:text-gold transition-colors">
                  {s.num}
                </div>
                <h3 className="font-serif text-base font-bold text-choco">
                  {s.title}
                </h3>
                <p className="font-sans text-xs leading-relaxed text-choco/70">
                  {s.desc}
                </p>
              </div>
              <div className="w-12 h-1 bg-blush/20 mt-6 rounded-full group-hover:bg-gold transition-colors" />
            </div>
          ))}
        </div>

        {/* Custom Order inquiry builder card */}
        <div className="max-w-4xl mx-auto bg-ivory rounded-[2.5rem] border border-blush/25 overflow-hidden shadow-xl" id="inquiry-builder">
          <div className="bg-choco text-cream p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full filter blur-xl" />
            <span className="font-sans text-[10px] uppercase tracking-widest font-bold text-gold">
              Interactive Builder
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-2">
              Online Cake Inquiry Form
            </h3>
            <p className="font-sans text-xs text-cream/80 mt-2 max-w-lg mx-auto">
              Answer a few questions about your celebration. Mom will check her kitchen calendar, review your specifications, and reply within 24 hours.
            </p>

            {/* Step indicators */}
            {!submittedData && (
              <div className="flex justify-center items-center space-x-3 mt-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-sans text-xs font-bold transition-all ${
                        step === s
                          ? "bg-gold text-white scale-110"
                          : step > s
                          ? "bg-green-600 text-white"
                          : "bg-white/10 text-cream/70"
                      }`}
                    >
                      {step > s ? <Check className="w-4 h-4" /> : s}
                    </div>
                    {s < 3 && <div className={`w-8 h-0.5 ${step > s ? "bg-green-600" : "bg-white/10"}`} />}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-8 sm:p-12 bg-white">
            {submittedData ? (
              /* Success Submission Card */
              <div className="text-center py-12 space-y-6" id="order-success-card">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto shadow-sm">
                  <Check className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <span className="font-sans text-[11px] uppercase tracking-wider font-bold text-green-600">
                    Order Request Received
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-choco">
                    Reference Code: {submittedData.orderId}
                  </h4>
                  <p className="font-sans text-sm text-choco/70 max-w-md mx-auto leading-relaxed">
                    {submittedData.message}
                  </p>
                </div>

                {/* Brief details overview */}
                <div className="bg-ivory rounded-2xl p-6 max-w-md mx-auto border border-blush/20 text-left space-y-2">
                  <p className="font-sans text-xs text-choco/80"><strong>Customer Name:</strong> {formData.contactName}</p>
                  <p className="font-sans text-xs text-choco/80"><strong>Celebration Flavor:</strong> {formData.flavor}</p>
                  <p className="font-sans text-xs text-choco/80"><strong>Party Size:</strong> {formData.servingSize}</p>
                  <p className="font-sans text-xs text-choco/80"><strong>Date Needed:</strong> {formData.dateNeeded}</p>
                  <p className="font-sans text-xs text-choco/80"><strong>Fulfillment:</strong> {formData.deliveryMethod === "pickup" ? "Contactless Home Pickup" : "Courier Safe Delivery"}</p>
                </div>

                <button
                  onClick={handleResetForm}
                  className="px-6 py-3 bg-choco hover:bg-gold hover:text-white rounded-full text-xs font-bold uppercase tracking-wider text-cream shadow-md transition-all cursor-pointer"
                  id="reset-order-builder-btn"
                >
                  Start New Inquiry
                </button>
              </div>
            ) : (
              /* Wizard Steps Form */
              <form onSubmit={handleSubmit} className="space-y-8" id="custom-order-form">
                
                {/* STEP 1: Core Customizations */}
                {step === 1 && (
                  <div className="space-y-6" id="wizard-step-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label className="font-sans text-xs font-bold uppercase tracking-wider text-choco/70">
                          Celebration Event Type
                        </label>
                        <select
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-blush/40 bg-ivory text-choco text-sm focus:outline-none focus:border-gold"
                        >
                          <option value="Birthday">Birthday Celebration</option>
                          <option value="Wedding">Dream Wedding</option>
                          <option value="Anniversary">Anniversary Milestone</option>
                          <option value="Baby Shower">Baby Shower / Gender Reveal</option>
                          <option value="Corporate">Corporate / Office Sharing</option>
                          <option value="Other">Custom Celebration Event</option>
                        </select>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label className="font-sans text-xs font-bold uppercase tracking-wider text-choco/70">
                          Serving Size Estimation
                        </label>
                        <select
                          name="servingSize"
                          value={formData.servingSize}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-blush/40 bg-ivory text-choco text-sm focus:outline-none focus:border-gold"
                        >
                          <option value="10 guests">10 guests - 6" Round Cake</option>
                          <option value="15 guests">15 guests - 7" Round Cake</option>
                          <option value="20 guests">20 guests - 8" Round Cake</option>
                          <option value="25 guests">25 guests - 9" Round Cake</option>
                          <option value="30 guests">30 guests - 10" Round Cake</option>
                          <option value="40 guests">40 guests - 2-Tier Stacked Cake</option>
                          <option value="50+ guests">50+ guests - Deluxe Multi-Tier Wedding Style</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label className="font-sans text-xs font-bold uppercase tracking-wider text-choco/70">
                          Cake Flavor Base
                        </label>
                        <select
                          name="flavor"
                          value={formData.flavor}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-blush/40 bg-ivory text-choco text-sm focus:outline-none focus:border-gold"
                        >
                          <option value="Chocolate Fudge">Belgian Chocolate Fudge</option>
                          <option value="Red Velvet">Velvety Smooth Red Velvet</option>
                          <option value="Vanilla Celebration">Madagascar Vanilla Bean</option>
                          <option value="Lotus Biscoff">Crunchy Lotus Biscoff</option>
                          <option value="Strawberry Rose">Fresh Strawberry Rose Chantilly</option>
                          <option value="Lemon Elderflower">Zesty Lemon Elderflower</option>
                          <option value="Elegant Carrot">Spiced Elegant Walnut Carrot</option>
                        </select>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label className="font-sans text-xs font-bold uppercase tracking-wider text-choco/70">
                          Frosting Choice
                        </label>
                        <select
                          name="frosting"
                          value={formData.frosting}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-blush/40 bg-ivory text-choco text-sm focus:outline-none focus:border-gold"
                        >
                          <option value="Buttercream">Smooth Italian Meringue Buttercream</option>
                          <option value="Fondant">Sleek Custom Fondant Finish</option>
                          <option value="Whipped Cream">Fresh Light Whipped Chantilly</option>
                          <option value="Cream Cheese">Signature Cream Cheese Frosting</option>
                        </select>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label className="font-sans text-xs font-bold uppercase tracking-wider text-choco/70">
                          Premium Center Filling
                        </label>
                        <select
                          name="filling"
                          value={formData.filling}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-blush/40 bg-ivory text-choco text-sm focus:outline-none focus:border-gold"
                        >
                          <option value="Chocolate Ganache">Rich Belgian Ganache</option>
                          <option value="Raspberry Jam">Simmered Raspberry Compote</option>
                          <option value="Caramel">Slow-Cooked Salted Caramel</option>
                          <option value="Fresh Berries">Organic Sliced Strawberry Mix</option>
                          <option value="Lotus Spread">Gooey Lotus Cookie Crumble</option>
                          <option value="None">None - Standard Frosted</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="px-6 py-3 bg-choco hover:bg-gold text-cream hover:text-white rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-all cursor-pointer"
                        id="step1-next-btn"
                      >
                        <span>Next: Style & Theme</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Style & Theme details */}
                {step === 2 && (
                  <div className="space-y-6" id="wizard-step-2">
                    <div className="flex flex-col space-y-2">
                      <label className="font-sans text-xs font-bold uppercase tracking-wider text-choco/70">
                        Design theme, color story, or text to write on the cake *
                      </label>
                      <textarea
                        name="details"
                        rows={4}
                        value={formData.details}
                        onChange={handleInputChange}
                        placeholder="Please write about your desired colors, text notes, topper designs, or dietary requirements (e.g. gluten-free, vegan sponge, eggless)..."
                        className="w-full px-4 py-3 rounded-xl border border-blush/40 bg-ivory text-choco text-sm focus:outline-none focus:border-gold placeholder:text-choco/40"
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label className="font-sans text-xs font-bold uppercase tracking-wider text-choco/70">
                        Reference Image URL (Optional)
                      </label>
                      <input
                        type="url"
                        name="referenceUrl"
                        value={formData.referenceUrl || ""}
                        onChange={handleInputChange}
                        placeholder="Paste any link to Pinterest, Instagram, or a google drive folder image reference..."
                        className="w-full px-4 py-3 rounded-xl border border-blush/40 bg-ivory text-choco text-sm focus:outline-none focus:border-gold placeholder:text-choco/40"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-5 py-3 border border-blush text-choco rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-2 hover:bg-blush/10 transition-all cursor-pointer"
                        id="step2-prev-btn"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Previous</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="px-6 py-3 bg-choco hover:bg-gold text-cream hover:text-white rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-all cursor-pointer"
                        id="step2-next-btn"
                      >
                        <span>Next: Contact Info</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Contact details & Fulfillment */}
                {step === 3 && (
                  <div className="space-y-6" id="wizard-step-3">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label className="font-sans text-xs font-bold uppercase tracking-wider text-choco/70">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          required
                          value={formData.contactName}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-xl border border-blush/40 bg-ivory text-choco text-sm focus:outline-none focus:border-gold placeholder:text-choco/40"
                        />
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label className="font-sans text-xs font-bold uppercase tracking-wider text-choco/70">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          name="contactEmail"
                          value={formData.contactEmail}
                          onChange={handleInputChange}
                          placeholder="email@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-blush/40 bg-ivory text-choco text-sm focus:outline-none focus:border-gold placeholder:text-choco/40"
                        />
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label className="font-sans text-xs font-bold uppercase tracking-wider text-choco/70">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          name="contactPhone"
                          value={formData.contactPhone}
                          onChange={handleInputChange}
                          placeholder="e.g. (123) 456-7890"
                          className="w-full px-4 py-3 rounded-xl border border-blush/40 bg-ivory text-choco text-sm focus:outline-none focus:border-gold placeholder:text-choco/40"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label className="font-sans text-xs font-bold uppercase tracking-wider text-choco/70">
                          Preferred Fulfillment Method
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => handleDeliverySelect("pickup")}
                            className={`py-3 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                              formData.deliveryMethod === "pickup"
                                ? "bg-choco text-cream border-choco shadow-sm"
                                : "bg-ivory text-choco border-blush/45 hover:bg-blush/10"
                            }`}
                            id="delivery-picker-pickup"
                          >
                            Contactless Pickup
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeliverySelect("delivery")}
                            className={`py-3 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                              formData.deliveryMethod === "delivery"
                                ? "bg-choco text-cream border-choco shadow-sm"
                                : "bg-ivory text-choco border-blush/45 hover:bg-blush/10"
                            }`}
                            id="delivery-picker-delivery"
                          >
                            Courier Safe Delivery
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label className="font-sans text-xs font-bold uppercase tracking-wider text-choco/70">
                          Fulfillment Date Needed *
                        </label>
                        <input
                          type="date"
                          required
                          name="dateNeeded"
                          value={formData.dateNeeded}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-blush/40 bg-ivory text-choco text-sm focus:outline-none focus:border-gold"
                        />
                      </div>
                    </div>

                    {/* Notice Disclaimer text */}
                    <div className="flex items-start space-x-2 text-xs text-choco/60 bg-blush/20 p-4 rounded-xl border border-blush/30" id="inquiry-disclaimer">
                      <AlertCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        Submitting this inquiry holds your place in our baking queue, but does not charge any deposit fees immediately. Mom will personally verify your details and coordinate the 50% booking deposit.
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-5 py-3 border border-blush text-choco rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-2 hover:bg-blush/10 transition-all cursor-pointer"
                        id="step3-prev-btn"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Previous</span>
                      </button>

                      <button
                        type="submit"
                        disabled={loading}
                        className="px-8 py-3.5 bg-gold hover:bg-choco text-white hover:text-cream rounded-full text-xs font-bold uppercase tracking-widest flex items-center space-x-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
                        id="submit-inquiry-btn"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending Details...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Send Custom Inquiry</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
