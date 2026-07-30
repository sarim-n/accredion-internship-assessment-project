'use client';

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export interface LeadCaptureFormProps {
  onSuccess?: () => void;
  programContext?: string;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    domain: '',
    candidates: '',
    deliveryMode: '',
    location: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const domainOptions = [
    'Generative AI & LLMs',
    'Leadership Development',
    'Tech & Data Insights',
    'Fintech Innovation',
    'Digital Business & Product Innovation',
    'Operations Management',
  ];

  const deliveryOptions = [
    'Online Live Interactive',
    'Offline / Classroom Retreat',
    'Hybrid Cohort',
    'On-demand Self-paced',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.company) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          corporateEmail: formData.email,
          phone: formData.phone,
          companyName: formData.company,
          teamSize: formData.candidates || '10-50',
          trainingDomain: formData.domain || 'General',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        if (onSuccess) onSuccess();
      } else {
        setErrorMsg('Submission failed. Please check your information and try again.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
        <h3 className="text-2xl font-bold text-slate-900">Enquiry Submitted!</h3>
        <p className="text-sm text-slate-600">
          Our team will contact you shortly to complete your custom training assessment.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 px-6 py-2 bg-[#1D61E7] text-white text-sm font-semibold rounded-lg"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5 text-left text-slate-800">
      {errorMsg && (
        <div className="p-2.5 bg-red-50 text-red-600 border border-red-200 text-xs font-semibold rounded-lg">
          {errorMsg}
        </div>
      )}

      {/* Name */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-[#F8FAFC] border-b border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D61E7]"
        />
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-[#F8FAFC] border-b border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D61E7]"
        />
      </div>

      {/* Phone with Country Code */}
      <div className="flex items-center border-b border-slate-300 bg-[#F8FAFC] px-3 py-2">
        <span className="text-sm text-slate-600 font-semibold pr-2 border-r border-slate-300 mr-2 flex items-center gap-1">
          🇮🇳 +91
        </span>
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
        />
      </div>

      {/* Company Name */}
      <div>
        <input
          type="text"
          name="company"
          placeholder="Enter company name"
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full bg-[#F8FAFC] border-b border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D61E7]"
        />
      </div>

      {/* Select Domain */}
      <div>
        <select
          name="domain"
          value={formData.domain}
          onChange={handleChange}
          className="w-full bg-[#F8FAFC] border-b border-slate-300 px-3 py-2 text-sm text-slate-700 focus:outline-none focus:border-[#1D61E7]"
        >
          <option value="">Select Domain</option>
          {domainOptions.map((d, i) => (
            <option key={i} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      {/* No. of candidates */}
      <div>
        <input
          type="text"
          name="candidates"
          placeholder="Enter No. of candidates"
          value={formData.candidates}
          onChange={handleChange}
          className="w-full bg-[#F8FAFC] border-b border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D61E7]"
        />
      </div>

      {/* Mode of Delivery */}
      <div>
        <select
          name="deliveryMode"
          value={formData.deliveryMode}
          onChange={handleChange}
          className="w-full bg-[#F8FAFC] border-b border-slate-300 px-3 py-2 text-sm text-slate-700 focus:outline-none focus:border-[#1D61E7]"
        >
          <option value="">Select Mode of Delivery *</option>
          {deliveryOptions.map((m, i) => (
            <option key={i} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      {/* Location */}
      <div>
        <input
          type="text"
          name="location"
          placeholder="Eg: Gurgoan, Delhi, India"
          value={formData.location}
          onChange={handleChange}
          className="w-full bg-[#F8FAFC] border-b border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D61E7]"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-[#1D61E7] hover:bg-[#154ec2] text-white font-bold text-base rounded-lg shadow-md transition-all cursor-pointer"
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};
