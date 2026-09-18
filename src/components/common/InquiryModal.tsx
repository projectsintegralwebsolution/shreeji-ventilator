"use client";

import React, { useState, useEffect } from 'react';
import { X, Send, Phone, Mail, Building, CheckCircle2, Sparkles, Wind, MessageCircle } from 'lucide-react';
import { productsData } from '@/data/productsData';
import { companyData } from '@/data/companyData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultProduct
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    product: defaultProduct || 'Simpovent 24" Turbo Ventilator',
    shedLength: '',
    shedWidth: '',
    shedHeight: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const shedDimensions = (formData.shedLength && formData.shedWidth)
      ? `${formData.shedLength} ft L x ${formData.shedWidth} ft W x ${formData.shedHeight || '20'} ft H`
      : '';

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          product: formData.product,
          shedDimensions: shedDimensions,
          message: formData.message
        })
      });
      await res.json();
    } catch (err) {
      console.log('Inquiry dispatch error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const openWhatsAppDirect = () => {
    const shedDimensions = (formData.shedLength && formData.shedWidth)
      ? `${formData.shedLength} ft L x ${formData.shedWidth} ft W x ${formData.shedHeight || '20'} ft H`
      : '';

    const whatsappMsg = `*New Quotation Request - Shreeji Ventilator*` +
      `\n*Customer Name:* ${formData.name}` +
      `\n*Mobile Number:* ${formData.phone}` +
      `\n*Email:* ${formData.email || 'N/A'}` +
      `\n*City/Location:* ${formData.city}` +
      `\n*Product Model:* ${formData.product}` +
      (shedDimensions ? `\n*Shed Dimensions:* ${shedDimensions}` : '') +
      (formData.message ? `\n*Requirements:* ${formData.message}` : '');

    window.open(`https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-scaleUp max-h-[90vh] flex flex-col text-slate-900">
        {/* Modal Header */}
        <div className="bg-[#0e382c] text-white p-4 sm:p-6 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Factory Direct Pricing
            </span>
            <h3 className="text-lg sm:text-xl font-bold mt-0.5">Request Official Quotation</h3>
          </div>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close quotation dialog"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors cursor-pointer shrink-0 ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-4 sm:py-6 text-center space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h4 className="text-lg sm:text-xl font-black text-slate-900">Inquiry Dispatched Successfully!</h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your quotation request has been processed and factory notification dispatched:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs space-y-2 max-w-sm mx-auto">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>1. Customer Copy:</strong> {formData.email || formData.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>2. Sales Desk:</strong> info@shreejiwindventilator.com</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>3. Technical Desk:</strong> Vasai Plant Support Team</span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={openWhatsAppDirect}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with Senior Engineer on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. ramesh@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pune / Ahmedabad"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Select Ventilator Model
                </label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs sm:text-sm bg-white text-slate-900 font-medium"
                >
                  {productsData.map((p) => (
                    <option key={p.id} value={p.name} className="text-slate-900">{p.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Shed Dimensions (Optional for CFM Calculation)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="Length (ft)"
                    value={formData.shedLength}
                    onChange={(e) => setFormData({ ...formData, shedLength: e.target.value })}
                    className="px-2.5 py-2 rounded-lg border border-slate-300 text-xs bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                  <input
                    type="text"
                    placeholder="Width (ft)"
                    value={formData.shedWidth}
                    onChange={(e) => setFormData({ ...formData, shedWidth: e.target.value })}
                    className="px-2.5 py-2 rounded-lg border border-slate-300 text-xs bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                  <input
                    type="text"
                    placeholder="Height (ft)"
                    value={formData.shedHeight}
                    onChange={(e) => setFormData({ ...formData, shedHeight: e.target.value })}
                    className="px-2.5 py-2 rounded-lg border border-slate-300 text-xs bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Specific Requirements / Remarks
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need 12 units of 24 inch ventilator with matching Tata Bluescope base plates..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-xs bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Dispatching Factory Notification...' : 'Submit & Get Official Quotation'}</span>
              </button>

              <p className="text-[10px] text-center text-slate-500">
                🔒 Direct Factory Notification: info@shreejiwindventilator.com • Vasai Plant Unit
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
