import { NextResponse } from 'next/server';
import { LeadFormData, LeadApiResponse } from '@/types/lead';
import { getStoredLeads, saveLead } from '@/lib/leads-store';

// GET Handler to list captured leads
export async function GET() {
  try {
    const leads = getStoredLeads();
    return NextResponse.json({
      success: true,
      total: leads.length,
      leads,
    });
  } catch (error) {
    console.error('API GET /api/leads Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to retrieve stored leads.' },
      { status: 500 }
    );
  }
}

// POST Handler to submit & persist new enterprise leads
export async function POST(request: Request) {
  try {
    const body: LeadFormData & {
      deliveryMode?: string;
      location?: string;
      candidates?: string;
    } = await request.json();

    const errors: Record<string, string> = {};

    // Validate Full Name
    if (!body.fullName || body.fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name.';
    }

    // Validate Email
    if (!body.corporateEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.corporateEmail)) {
      errors.corporateEmail = 'Please enter a valid corporate email address.';
    } else if (
      body.corporateEmail.endsWith('@gmail.com') ||
      body.corporateEmail.endsWith('@yahoo.com') ||
      body.corporateEmail.endsWith('@hotmail.com')
    ) {
      errors.corporateEmail = 'Please use your corporate work email address.';
    }

    // Validate Phone
    if (!body.phone || body.phone.trim().length < 8) {
      errors.phone = 'Please enter a valid phone number.';
    }

    // Validate Company Name
    if (!body.companyName || body.companyName.trim().length < 2) {
      errors.companyName = 'Please enter your company or organization name.';
    }

    // Validate Team Size
    if (!body.teamSize) {
      errors.teamSize = 'Please select your estimated team size or candidates count.';
    }

    // Validate Training Domain
    if (!body.trainingDomain) {
      errors.trainingDomain = 'Please select a primary training domain.';
    }

    // Return validation errors if any
    if (Object.keys(errors).length > 0) {
      return NextResponse.json<LeadApiResponse>(
        {
          success: false,
          message: 'Form validation failed. Please check the highlighted fields.',
          errors,
        },
        { status: 400 }
      );
    }

    // Save lead to persistent storage
    const savedLead = saveLead({
      fullName: body.fullName.trim(),
      corporateEmail: body.corporateEmail.trim().toLowerCase(),
      phone: body.phone.trim(),
      companyName: body.companyName.trim(),
      teamSize: body.teamSize,
      trainingDomain: body.trainingDomain,
      deliveryMode: body.deliveryMode,
      location: body.location,
      candidates: body.candidates,
    });

    console.log(`[Lead Captured & Stored]: ID=${savedLead.id}`, savedLead);

    return NextResponse.json<LeadApiResponse>({
      success: true,
      message: 'Thank you! Your enterprise inquiry has been registered. Our corporate advisor will reach out within 24 hours.',
      leadId: savedLead.id,
    });
  } catch (error) {
    console.error('Lead Capture API Error:', error);
    return NextResponse.json<LeadApiResponse>(
      {
        success: false,
        message: 'An unexpected server error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
