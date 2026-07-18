"use client";

import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import {
  X,
  CheckCircle,
  Calendar,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import * as yup from "yup";

const ConsultationContext = createContext(null);

export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error(
      "useConsultation must be used within a ConsultationProvider",
    );
  }
  return context;
}

// Validation schema using yup
const validationSchema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  service: yup.string().required(),
  location: yup.string().required(),
  date: yup.string().nullable(),
  budget: yup.string(),
  message: yup.string(), // optional, no validation
});

export function ConsultationProvider({ children }) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Modular Kitchens",
    location: "USA",
    date: "",
    budget: "$15,000 - $30,000",
    message: "",
  });

  // Custom dropdown states
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);

  const openModal = () => {
    router.push("/consultation");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      setIsSubmitted(true);
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleDropdownSelect = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    // Close dropdown after selection
    if (name === "service") setServiceDropdownOpen(false);
    if (name === "location") setLocationDropdownOpen(false);
  };

  // Service options
  const serviceOptions = [
    "Modular Kitchens",
    "Luxury Wardrobes",
    "Interior Design",
    "Renovations",
    "Commercial Interiors",
  ];

  // Location options
  const locationOptions = ["USA", "Canada", "UK", "Europe", "Ghana"];

  return (
    <ConsultationContext.Provider value={{ openModal }}>
      {children}

      {/* LUXURY SLIDE-IN DIALOG / MODAL (BOOK CONSULTATION) */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in transition-all">
          <div className="relative w-full max-w-2xl bg-[#010129] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all max-h-[90vh] flex flex-col text-white">
            {/* Header trim */}
            <div className="h-2 w-full bg-gradient-to-r from-brand-gold to-[#9A0101]"></div>

            {/* Close Toggle */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-brand-white/5 text-gray-400 hover:text-white transition-colors focus:outline-none z-10"
              aria-label="Close dialogue"
            >
              <X className="w-5.5 h-5.5" />
            </button>

            {/* Scrollable Container */}
            <div className="p-6 sm:p-10 overflow-y-auto no-scrollbar flex-grow">
              {!isSubmitted ? (
                <form
                  onSubmit={handleFormSubmit}
                  className="flex flex-col gap-6"
                >
                  <div className="flex flex-col gap-1.5 border-b border-white/5 pb-4">
                    <h2 className="font-serif text-2xl sm:text-3xl text-white font-semibold">
                      Schedule a Private Session
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-gold tracking-wider font-display uppercase font-semibold">
                      Luxury Consultant Architectural Review Form
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-gray-300 font-semibold uppercase tracking-wider font-display">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`bg-brand-white/5 border ${
                          errors.name ? "border-red-500" : "border-white/10"
                        } focus:border-brand-gold/80 rounded px-4.5 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-all w-full`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-gray-300 font-semibold uppercase tracking-wider font-display">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`bg-brand-white/5 border ${
                          errors.email ? "border-red-500" : "border-white/10"
                        } focus:border-brand-gold/80 rounded px-4.5 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-all w-full`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-gray-300 font-semibold uppercase tracking-wider font-display">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+233501523779"
                        className={`bg-brand-white/5 border ${
                          errors.phone ? "border-red-500" : "border-white/10"
                        } focus:border-brand-gold/80 rounded px-4.5 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-all w-full`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Custom Service Dropdown */}
                    <div className="flex flex-col gap-2 relative">
                      <label className="text-xs text-gray-300 font-semibold uppercase tracking-wider font-display">
                        Target Service
                      </label>
                      <div
                        className="relative cursor-pointer"
                        onClick={() =>
                          setServiceDropdownOpen(!serviceDropdownOpen)
                        }
                      >
                        <div
                          className={`bg-brand-white/5 border ${
                            errors.service
                              ? "border-red-500"
                              : "border-white/10"
                          } rounded px-4.5 py-3 text-sm text-white flex items-center justify-between transition-all`}
                        >
                          <span>{formData.service}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              serviceDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        {serviceDropdownOpen && (
                          <div className="absolute z-20 w-full mt-1 bg-[#1a1c22] border border-white/10 rounded-md shadow-lg max-h-48 overflow-auto">
                            {serviceOptions.map((option) => (
                              <div
                                key={option}
                                className="px-4.5 py-2.5 text-sm text-white hover:bg-brand-gold/20 cursor-pointer transition-colors"
                                onClick={() =>
                                  handleDropdownSelect("service", option)
                                }
                              >
                                {option}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      {errors.service && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.service}
                        </p>
                      )}
                    </div>

                    {/* Custom Location Dropdown */}
                    <div className="flex flex-col gap-2 relative">
                      <label className="text-xs text-gray-300 font-semibold uppercase tracking-wider font-display">
                        Your Location
                      </label>
                      <div
                        className="relative cursor-pointer"
                        onClick={() =>
                          setLocationDropdownOpen(!locationDropdownOpen)
                        }
                      >
                        <div
                          className={`bg-brand-white/5 border ${
                            errors.location
                              ? "border-red-500"
                              : "border-white/10"
                          } rounded px-4.5 py-3 text-sm text-white flex items-center justify-between transition-all`}
                        >
                          <span>{formData.location}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              locationDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        {locationDropdownOpen && (
                          <div className="absolute z-20 w-full mt-1 bg-[#1a1c22] border border-white/10 rounded-md shadow-lg">
                            {locationOptions.map((option) => (
                              <div
                                key={option}
                                className="px-4.5 py-2.5 text-sm text-white hover:bg-brand-gold/20 cursor-pointer transition-colors"
                                onClick={() =>
                                  handleDropdownSelect("location", option)
                                }
                              >
                                {option}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      {errors.location && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.location}
                        </p>
                      )}
                    </div>

                    {/* Preferred Date */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-gray-300 font-semibold uppercase tracking-wider font-display">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="bg-brand-white/5 border border-white/10 focus:border-brand-gold/80 rounded px-4.5 py-3 text-sm text-white focus:outline-none transition-all w-full cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-300 font-semibold uppercase tracking-wider font-display">
                      Expected Project Investment
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        "$15,000 - $30,000",
                        "$30,000 - $75,000",
                        "$75,000+",
                      ].map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, budget: tier }))
                          }
                          className={`py-2 px-3 border rounded text-xs tracking-wider font-medium font-display transition-all ${
                            formData.budget === tier
                              ? "bg-brand-gold/20 border-brand-gold text-brand-gold"
                              : "bg-brand-white/5 border-white/10 text-gray-400 hover:border-white/20"
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Field (Optional) */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-300 font-semibold uppercase tracking-wider font-display">
                      Special Design Goals & Requirements (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share details about your space design, preferred materials, and vision..."
                      className="bg-brand-white/5 border border-white/10 focus:border-brand-gold/80 rounded px-4.5 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-all w-full resize-none"
                    />
                  </div>

                  {/* Bottom Trigger Buttons */}
                  <div className="pt-2 flex justify-end gap-4 border-t border-white/5">
                    <button
                      type="button"
                      onClick={() => setModalOpen(false)}
                      className="px-5 py-3.5 border border-white/10 hover:bg-brand-white/5 text-gray-300 font-display text-xs font-bold tracking-widest rounded-sm transition-all"
                    >
                      CANCEL
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-brand-gold hover:bg-[#9A0101] text-white font-display text-xs font-bold tracking-widest rounded-[1px] flex items-center gap-2 transition-all duration-300"
                    >
                      <Calendar className="w-4 h-4 text-white" />
                      <span>SUBMIT CONFIRMATION</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Success screen */
                <div className="flex flex-col items-center justify-center text-center py-10 px-4 gap-6 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                    <CheckCircle className="w-10 h-10" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-brand-gold font-display text-xs font-semibold tracking-widest uppercase">
                      Appointment Received
                    </span>
                    <h3 className="font-serif text-3xl font-semibold text-white">
                      Thank You, {formData.name}!
                    </h3>
                    <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed mt-1">
                      Our elite interior service architects have registered your
                      request for{" "}
                      <strong className="text-white">{formData.service}</strong>{" "}
                      in{" "}
                      <strong className="text-white">
                        {formData.location}
                      </strong>
                      .
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-brand-white/5 border border-white/5 max-w-md w-full flex flex-col gap-3.5 text-left text-xs text-gray-300">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                      <span className="font-semibold text-white">
                        Representative Contact:
                      </span>
                      <span className="text-brand-gold">
                        Under 2 Hours (Business window)
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                      <span className="font-semibold text-white">
                        Confirmed Date:
                      </span>
                      <span>{formData.date || "To be locked via Call"}</span>
                    </div>
                    <div className="flex justify-between items-center pb-1">
                      <span className="font-semibold text-white">
                        Budget Preference:
                      </span>
                      <span>{formData.budget}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setModalOpen(false)}
                    className="mt-4 px-8 py-3.5 bg-brand-white/5 hover:bg-brand-white/10 border border-white/10 hover:border-brand-gold text-white font-display text-xs font-bold tracking-widest rounded-sm transition-all duration-300 flex items-center gap-2"
                  >
                    <span>CLOSE OVERLAY</span>
                    <ArrowRight className="w-4 h-4 text-brand-gold" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </ConsultationContext.Provider>
  );
}
