import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2, Clock, Globe } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    languageOfInterest: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#c26d38] uppercase tracking-wider">
          <Mail className="w-4 h-4" />
          <span>Get in Touch with FLI Secretariat</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-display text-[#5B0404] tracking-tight">
          Contact Secretariat & Research Headquarters
        </h1>
        <p className="text-sm text-[#4b5563] leading-relaxed">
          Whether you are a community member seeking linguistic support, an academic researcher 
          collaborating on fieldwork, or an educator inquiring about training courses—our team 
          is here to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#e5dfd5] shadow-xs space-y-6">
          <h2 className="text-xl font-bold font-serif-display text-[#5B0404]">
            Send an Inquiry or Book Request
          </h2>

          {submitted ? (
            <div className="p-8 text-center bg-[#FAF2F2] border border-[#E5C158] rounded-2xl space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#5B0404] mx-auto" />
              <h3 className="text-lg font-bold text-[#5B0404]">Thank You!</h3>
              <p className="text-xs text-[#7A0808] max-w-md mx-auto leading-relaxed">
                Your message has been received by the Forum for Language Initiatives Secretariat in Islamabad. 
                Our team will respond to your inquiry via email within 2 business days.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormState({
                    name: '',
                    email: '',
                    phone: '',
                    inquiryType: 'general',
                    languageOfInterest: '',
                    message: ''
                  });
                }}
                className="mt-4 px-4 py-2 bg-[#5B0404] text-white text-xs font-semibold rounded-lg hover:bg-[#480303]"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-[#5B0404]">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Dr. Ahmed Khan"
                    className="w-full p-2.5 bg-[#faf8f5] border border-[#d5cfc5] rounded-xl text-xs text-[#1F1414] focus:outline-none focus:ring-2 focus:ring-[#5B0404]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-[#5B0404]">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. ahmed@university.edu.pk"
                    className="w-full p-2.5 bg-[#faf8f5] border border-[#d5cfc5] rounded-xl text-xs text-[#1F1414] focus:outline-none focus:ring-2 focus:ring-[#5B0404]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-[#5B0404]">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+92 300 1234567"
                    className="w-full p-2.5 bg-[#faf8f5] border border-[#d5cfc5] rounded-xl text-xs text-[#1F1414] focus:outline-none focus:ring-2 focus:ring-[#5B0404]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-[#5B0404]">Nature of Inquiry</label>
                  <select
                    value={formState.inquiryType}
                    onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                    className="w-full p-2.5 bg-[#faf8f5] border border-[#d5cfc5] rounded-xl text-xs text-[#1F1414] focus:outline-none focus:ring-2 focus:ring-[#5B0404]"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="publications">Publications / Book Orders</option>
                    <option value="training">Discovery Course & Training Enrollment</option>
                    <option value="research">Academic & Linguistic Research Collaboration</option>
                    <option value="keyboards">Digital Fonts & Keyboards Support</option>
                    <option value="advocacy">Advocacy & CBO Network Partnership</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-[#5B0404]">Language of Interest (Optional)</label>
                <input
                  type="text"
                  value={formState.languageOfInterest}
                  onChange={(e) => setFormState({ ...formState, languageOfInterest: e.target.value })}
                  placeholder="e.g. Palula, Gawri, Khowar, Shina, Balti, Burushaski..."
                  className="w-full p-2.5 bg-[#faf8f5] border border-[#d5cfc5] rounded-xl text-xs text-[#1F1414] focus:outline-none focus:ring-2 focus:ring-[#5B0404]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-[#5B0404]">Your Detailed Message *</label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Please describe how we can assist you..."
                  className="w-full p-2.5 bg-[#faf8f5] border border-[#d5cfc5] rounded-xl text-xs text-[#1F1414] focus:outline-none focus:ring-2 focus:ring-[#5B0404]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#5B0404] hover:bg-[#480303] text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Send className="w-4 h-4 text-[#f59e0b]" />
                <span>Submit Inquiry to Secretariat</span>
              </button>
            </form>
          )}
        </div>

        {/* Location & Office Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#faf8f5] p-6 rounded-2xl border border-[#e5dfd5] space-y-4">
            <h3 className="font-bold text-base text-[#5B0404] font-serif-display">
              Secretariat Headquarters
            </h3>

            <div className="space-y-3 text-xs text-[#4b5563]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c26d38] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#5B0404] block">Mailing Address:</strong>
                  <span>Forum for Language Initiatives (FLI)<br />P.O. Box No. 763, Islamabad, Federal Capital Territory, Pakistan</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#c26d38] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#5B0404] block">Telephone Secretariat:</strong>
                  <span>+92 (0)51 225 0068</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#c26d38] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#5B0404] block">Office Hours:</strong>
                  <span>Monday – Friday: 9:00 AM – 5:00 PM (PKT)<br />Closed on Weekends and Public Holidays</span>
                </div>
              </div>
            </div>

            {/* Visual Location Map Card */}
            <div className="pt-2">
              <div className="h-44 bg-[#e5dfd5] rounded-xl overflow-hidden relative border border-[#d5cfc5] flex items-center justify-center text-center p-4">
                <div className="space-y-1">
                  <Building2 className="w-6 h-6 text-[#5B0404] mx-auto" />
                  <span className="text-xs font-bold text-[#5B0404] block">Islamabad Central Secretariat</span>
                  <span className="text-[11px] text-[#6b7280] block">Sector H-8 / G-9 Vicinity, Islamabad, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#e5dfd5] space-y-2 text-xs">
            <h4 className="font-bold text-[#5B0404]">Tax-Exempt Status & Contributions</h4>
            <p className="text-[#6b7280] leading-relaxed">
              FLI is a registered non-profit organization under the Societies Registration Act XXI of 1860. 
              Contributions directly fund orthography workshops and primers for endangered language communities.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
