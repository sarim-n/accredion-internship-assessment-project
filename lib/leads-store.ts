import fs from 'fs';
import path from 'path';
import { LeadFormData } from '@/types/lead';

export interface StoredLead extends LeadFormData {
  id: string;
  createdAt: string;
  ip?: string;
  deliveryMode?: string;
  location?: string;
  candidates?: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

// Initial seed data for demonstration
const SEED_LEADS: StoredLead[] = [
  {
    id: 'ACC-ENT-918234',
    fullName: 'Rohan Sharma',
    corporateEmail: 'rohan.sharma@tcs.com',
    phone: '+91 9876543210',
    companyName: 'Tata Consultancy Services',
    jobTitle: 'L&D Director',
    teamSize: '50-100',
    trainingDomain: 'Generative AI & LLMs',
    deliveryMode: 'Hybrid Cohort',
    location: 'Mumbai, India',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: 'ACC-ENT-482190',
    fullName: 'Priya Nair',
    corporateEmail: 'priya.nair@infosys.com',
    phone: '+91 9812345678',
    companyName: 'Infosys Ltd',
    jobTitle: 'VP Engineering',
    teamSize: '100+',
    trainingDomain: 'Tech & Data Insights',
    deliveryMode: 'Online Live Interactive',
    location: 'Bengaluru, India',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
];

// Helper to ensure data file exists
function ensureDataFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(LEADS_FILE)) {
      fs.writeFileSync(LEADS_FILE, JSON.stringify(SEED_LEADS, null, 2), 'utf-8');
    }
  } catch (error) {
    console.error('Error ensuring leads data file:', error);
  }
}

// In-memory fallback if file system is read-only in serverless/edge environments
let inMemoryLeads: StoredLead[] = [...SEED_LEADS];

export function getStoredLeads(): StoredLead[] {
  try {
    ensureDataFile();
    if (fs.existsSync(LEADS_FILE)) {
      const content = fs.readFileSync(LEADS_FILE, 'utf-8');
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed)) {
        inMemoryLeads = parsed;
        return parsed;
      }
    }
  } catch (error) {
    console.warn('File storage read failed, using in-memory leads:', error);
  }
  return inMemoryLeads;
}

export function saveLead(leadData: Omit<StoredLead, 'id' | 'createdAt'>): StoredLead {
  const newLead: StoredLead = {
    ...leadData,
    id: `ACC-ENT-${Math.floor(100000 + Math.random() * 900000)}`,
    createdAt: new Date().toISOString(),
  };

  try {
    ensureDataFile();
    const leads = getStoredLeads();
    leads.unshift(newLead); // Insert newest lead at top
    inMemoryLeads = leads;
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
  } catch (error) {
    console.warn('File storage write failed, updating in-memory leads only:', error);
    inMemoryLeads.unshift(newLead);
  }

  return newLead;
}
