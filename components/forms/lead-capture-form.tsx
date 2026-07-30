'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  BookOpen, 
  Users, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export interface LeadCaptureFormProps {
  onSuccess?: () => void;
  programContext?: string;
  variant?: 'card' | 'inline' | 'modal';
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ onSuccess, variant = 'card' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    domain: '',
    candidates: '25-50 learners',
    deliveryMode: 'Online Live Interactive',
    location: '',
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const domainOptions = [
    'Generative AI & LLMs',
    'Leadership & Executive Development',
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

  const candidateOptions = [
    '10 - 25 learners',
    '25 - 50 learners',
    '50 - 100 learners',
    '100+ enterprise cohort',
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
          teamSize: formData.candidates,
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
        setErrorMsg(data.message || 'Submission failed. Please check the highlighted fields.');
      }
    } catch (err) {
      setErrorMsg('Network error occurred. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 text-center space-y-5 bg-gradient-to-b from-blue-50/80 to-indigo-50/50 rounded-2xl border border-blue-100/80 shadow-sm animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/25">
          <CheckCircle2 className="w-9 h-9 text-white" />
        </div>
        
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Request Registered
          </span>
          <h3 className="text-2xl font-bold text-slate-900">Inquiry Received!</h3>
          <p className="text-sm text-slate-600 max-w-sm mx-auto mt-1">
            Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our enterprise learning team will contact you within 24 hours.
          </p>
        </div>

        {submittedLeadId && (
          <div className="p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 max-w-xs mx-auto">
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Reference Lead ID</p>
            <p className="text-base font-mono font-bold text-[#1D61E7] mt-0.5">{submittedLeadId}</p>
          </div>
        )}

        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              domain: '',
              candidates: '25-50 learners',
              deliveryMode: 'Online Live Interactive',
              location: '',
            });
          }}
          className="mt-2 px-6 py-2.5 bg-[#1D61E7] hover:bg-[#154ec2] text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      {errorMsg && (
        <div className="p-3.5 bg-red-50 text-red-700 border border-red-200 text-xs font-medium rounded-xl flex items-center gap-2.5 animate-shake">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Grid Row 1: Full Name & Corporate Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              name="name"
              placeholder="e.g. Vikramaditya Roy"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full bg-[#F8FAFC] border rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white transition-all ${
                fieldErrors.fullName
                  ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 bg-red-50/20'
                  : 'border-slate-200 focus:border-[#1D61E7] focus:ring-2 focus:ring-[#1D61E7]/15'
              }`}
            />
          </div>
          {fieldErrors.fullName && (
            <p className="text-[11px] text-red-500 mt-1">{fieldErrors.fullName}</p>
          )}
        </div>

        {/* Corporate Email */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Corporate Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="email"
              name="email"
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full bg-[#F8FAFC] border rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white transition-all ${
                fieldErrors.corporateEmail
                  ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 bg-red-50/20'
                  : 'border-slate-200 focus:border-[#1D61E7] focus:ring-2 focus:ring-[#1D61E7]/15'
              }`}
            />
          </div>
          {fieldErrors.corporateEmail && (
            <p className="text-[11px] text-red-500 mt-1">{fieldErrors.corporateEmail}</p>
          )}
        </div>
      </div>

      {/* Grid Row 2: Phone & Company Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div
            className={`flex items-center border rounded-xl bg-[#F8FAFC] focus-within:bg-white px-3.5 py-2 transition-all ${
              fieldErrors.phone
                ? 'border-red-400 bg-red-50/20'
                : 'border-slate-200 focus-within:border-[#1D61E7] focus-within:ring-2 focus-within:ring-[#1D61E7]/15'
            }`}
          >
            <Phone className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
            <span className="text-xs font-semibold text-slate-600 border-r border-slate-200 pr-2 mr-2 shrink-0">
              🇮🇳 +91
            </span>
            <input
              type="tel"
              name="phone"
              placeholder="98765 43210"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
            />
          </div>
          {fieldErrors.phone && (
            <p className="text-[11px] text-red-500 mt-1">{fieldErrors.phone}</p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Company / Organization <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              name="company"
              placeholder="e.g. TechCorp Solutions"
              value={formData.company}
              onChange={handleChange}
              required
              className={`w-full bg-[#F8FAFC] border rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white transition-all ${
                fieldErrors.companyName
                  ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 bg-red-50/20'
                  : 'border-slate-200 focus:border-[#1D61E7] focus:ring-2 focus:ring-[#1D61E7]/15'
              }`}
            />
          </div>
          {fieldErrors.companyName && (
            <p className="text-[11px] text-red-500 mt-1">{fieldErrors.companyName}</p>
          )}
        </div>
      </div>

      {/* Grid Row 3: Domain & Learners Count */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Select Domain */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Primary Training Domain <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <select
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              required
              className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl pl-10 pr-8 py-2.5 text-sm text-slate-800 focus:outline-none focus:bg-white focus:border-[#1D61E7] focus:ring-2 focus:ring-[#1D61E7]/15 transition-all appearance-none cursor-pointer"
            >
              <option value="">Select Domain</option>
              {domainOptions.map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Expected Learners */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Estimated Team Size
          </label>
          <div className="relative">
            <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <select
              name="candidates"
              value={formData.candidates}
              onChange={handleChange}
              className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl pl-10 pr-8 py-2.5 text-sm text-slate-800 focus:outline-none focus:bg-white focus:border-[#1D61E7] focus:ring-2 focus:ring-[#1D61E7]/15 transition-all appearance-none cursor-pointer"
            >
              {candidateOptions.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Delivery Mode Selection Pills */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          Preferred Delivery Format
        </label>
        <div className="grid grid-cols-2 gap-2">
          {deliveryOptions.map((mode) => (
            <button
              type="button"
              key={mode}
              onClick={() => setFormData((prev) => ({ ...prev, deliveryMode: mode }))}
              className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                formData.deliveryMode === mode
                  ? 'bg-[#1D61E7]/10 border-[#1D61E7] text-[#1D61E7] font-semibold'
                  : 'bg-[#F8FAFC] border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 px-6 bg-gradient-to-r from-[#1D61E7] to-[#154ec2] hover:from-[#174ec3] hover:to-[#0f3ca3] active:scale-[0.99] text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all cursor-pointer flex items-center justify-center gap-2 group disabled:opacity-75"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4.5 h-4.5 animate-spin" />
              <span>Registering Enterprise Request...</span>
            </>
          ) : (
            <>
              <span>Get Customized Enterprise Proposal</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>

      <p className="text-[11px] text-center text-slate-400 pt-1">
        🔒 100% Confidential. We respect your corporate privacy and NDA policies.
      </p>
    </form>
  );
};
