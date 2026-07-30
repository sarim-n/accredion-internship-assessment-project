'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

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

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState('');
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
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');
    setFieldErrors({});

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          corporateEmail: formData.email,
          phone: formData.phone,
          companyName: formData.company,
          teamSize: formData.candidates || '10-50 employees',
          trainingDomain: formData.domain || 'Generative AI & LLMs',
          deliveryMode: formData.deliveryMode,
          location: formData.location,
          candidates: formData.candidates,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setSubmittedLeadId(data.leadId || '');
        if (onSuccess) onSuccess();
      } else {
        if (data.errors) {
          setFieldErrors(data.errors);
        }
        setErrorMsg(data.message || 'Submission failed. Please verify the highlighted fields.');
      }
    } catch (err) {
      setErrorMsg('Network error occurred. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 text-center space-y-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
        <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto animate-bounce" />
        <h3 className="text-2xl font-bold text-slate-900">Enterprise Inquiry Registered!</h3>
        <p className="text-sm text-slate-600 max-w-sm mx-auto">
          Thank you! Your custom training inquiry has been successfully logged.
        </p>
        {submittedLeadId && (
          <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 text-xs font-mono font-bold rounded-full">
            Ref ID: {submittedLeadId}
          </div>
        )}
        <p className="text-xs text-slate-500">
          Our corporate learning advisor will reach out to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              domain: '',
              candidates: '',
              deliveryMode: '',
              location: '',
            });
          }}
          className="mt-4 px-6 py-2 bg-[#1D61E7] hover:bg-[#154ec2] text-white text-sm font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left text-slate-800">
      {errorMsg && (
        <div className="p-3 bg-red-50 text-red-600 border border-red-200 text-xs font-semibold rounded-lg flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Name */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="e.g. Rahul Sharma"
          value={formData.name}
          onChange={handleChange}
          required
          className={`w-full bg-[#F8FAFC] border rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all ${
            fieldErrors.fullName
              ? 'border-red-400 focus:border-red-500 bg-red-50/20'
              : 'border-slate-300 focus:border-[#1D61E7] focus:ring-1 focus:ring-[#1D61E7]'
          }`}
        />
        {fieldErrors.fullName && (
          <p className="text-xs text-red-500 mt-1">{fieldErrors.fullName}</p>
        )}
      </div>

      {/* Corporate Email */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Corporate Work Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="name@company.com"
          value={formData.email}
          onChange={handleChange}
          required
          className={`w-full bg-[#F8FAFC] border rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all ${
            fieldErrors.corporateEmail
              ? 'border-red-400 focus:border-red-500 bg-red-50/20'
              : 'border-slate-300 focus:border-[#1D61E7] focus:ring-1 focus:ring-[#1D61E7]'
          }`}
        />
        {fieldErrors.corporateEmail && (
          <p className="text-xs text-red-500 mt-1">{fieldErrors.corporateEmail}</p>
        )}
      </div>

      {/* Phone with Country Code */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <div
          className={`flex items-center border rounded-lg bg-[#F8FAFC] px-3.5 py-2.5 transition-all ${
            fieldErrors.phone
              ? 'border-red-400 bg-red-50/20'
              : 'border-slate-300 focus-within:border-[#1D61E7] focus-within:ring-1 focus-within:ring-[#1D61E7]'
          }`}
        >
          <span className="text-sm text-slate-600 font-semibold pr-2 border-r border-slate-300 mr-2 flex items-center gap-1 shrink-0">
            🇮🇳 +91
          </span>
          <input
            type="tel"
            name="phone"
            placeholder="9876543210"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
          />
        </div>
        {fieldErrors.phone && (
          <p className="text-xs text-red-500 mt-1">{fieldErrors.phone}</p>
        )}
      </div>

      {/* Company Name */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Company / Organization Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="company"
          placeholder="e.g. Acme Corp"
          value={formData.company}
          onChange={handleChange}
          required
          className={`w-full bg-[#F8FAFC] border rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all ${
            fieldErrors.companyName
              ? 'border-red-400 focus:border-red-500 bg-red-50/20'
              : 'border-slate-300 focus:border-[#1D61E7] focus:ring-1 focus:ring-[#1D61E7]'
          }`}
        />
        {fieldErrors.companyName && (
          <p className="text-xs text-red-500 mt-1">{fieldErrors.companyName}</p>
        )}
      </div>

      {/* Select Domain & Mode in Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Training Domain
          </label>
          <select
            name="domain"
            value={formData.domain}
            onChange={handleChange}
            className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:border-[#1D61E7]"
          >
            <option value="">Select Domain</option>
            {domainOptions.map((d, i) => (
              <option key={i} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Delivery Mode
          </label>
          <select
            name="deliveryMode"
            value={formData.deliveryMode}
            onChange={handleChange}
            className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:border-[#1D61E7]"
          >
            <option value="">Select Delivery Mode</option>
            {deliveryOptions.map((m, i) => (
              <option key={i} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* No. of candidates & Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            No. of Learners
          </label>
          <input
            type="text"
            name="candidates"
            placeholder="e.g. 25-50"
            value={formData.candidates}
            onChange={handleChange}
            className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D61E7]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            City / Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="e.g. Gurgaon, India"
            value={formData.location}
            onChange={handleChange}
            className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D61E7]"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 bg-[#1D61E7] hover:bg-[#154ec2] active:scale-[0.99] text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-75"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Registering Inquiry...</span>
            </>
          ) : (
            <span>Submit Enterprise Inquiry</span>
          )}
        </button>
      </div>
    </form>
  );
};
