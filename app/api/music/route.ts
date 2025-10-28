import { NextResponse } from 'next/server';
import { musicProjects } from '@/data/music';

export async function GET() {
  try {
    return NextResponse.json(
      { success: true, data: musicProjects },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error fetching music projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch music projects' },
      { status: 500 },
    );
  }
}
