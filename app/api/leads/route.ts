import { NextResponse } from 'next/server';
import { LeadFormData, LeadApiResponse } from '@/types/lead';

export async function POST(request: Request) {
  try {
    const body: LeadFormData = await request.json();

    const errors: Record<string, string> = {};

    // Validate required fields
    if (!body.fullName || body.fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name.';
    }

    if (!body.corporateEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.corporateEmail)) {
      errors.corporateEmail = 'Please enter a valid corporate email address.';
    } else if (
      body.corporateEmail.endsWith('@gmail.com') ||
      body.corporateEmail.endsWith('@yahoo.com') ||
      body.corporateEmail.endsWith('@hotmail.com')
    ) {
      // Encourage corporate business email
      errors.corporateEmail = 'Please use your corporate work email address.';
    }

    if (!body.phone || body.phone.trim().length < 8) {
      errors.phone = 'Please enter a valid phone number.';
    }

    if (!body.companyName || body.companyName.trim().length < 2) {
      errors.companyName = 'Please enter your company/organization name.';
    }

    if (!body.teamSize) {
      errors.teamSize = 'Please select your estimated team size.';
    }

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

    // Simulate database delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Generate unique Lead ID
    const leadId = `ACC-ENT-${Math.floor(100000 + Math.random() * 900000)}`;

    console.log(`[Lead Captured Successfully]: ID=${leadId}`, body);

    return NextResponse.json<LeadApiResponse>({
      success: true,
      message: 'Thank you! Your enterprise inquiry has been submitted. Our team will contact you within 24 hours.',
      leadId,
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
