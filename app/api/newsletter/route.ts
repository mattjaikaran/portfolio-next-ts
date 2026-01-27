import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Here you would integrate with your preferred email service:
    // - Buttondown: https://api.buttondown.email/v1/subscribers
    // - ConvertKit: https://api.convertkit.com/v3/forms/{form_id}/subscribe
    // - Resend: Use Resend's audience API
    // - Mailchimp: Use Mailchimp's API

    // For now, we'll just log and return success
    // In production, replace this with actual API integration
    console.log('Newsletter signup:', email);

    // Example Buttondown integration (uncomment and add API key):
    // const response = await fetch('https://api.buttondown.email/v1/subscribers', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email }),
    // });

    return NextResponse.json(
      { message: 'Successfully subscribed to the newsletter!' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
