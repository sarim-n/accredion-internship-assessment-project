export interface LeadFormData {
  fullName: string;
  corporateEmail: string;
  phone: string;
  companyName: string;
  jobTitle?: string;
  teamSize: string;
  trainingDomain: string;
  additionalNotes?: string;
}

export interface LeadApiResponse {
  success: boolean;
  message: string;
  leadId?: string;
  errors?: Record<string, string>;
}
