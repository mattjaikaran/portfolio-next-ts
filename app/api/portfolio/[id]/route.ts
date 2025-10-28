import { NextResponse } from 'next/server';
import { webProjects } from '@/data/portfolio';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    // Find the project by id (slug or id)
    const project = webProjects.find(
      (p) =>
        p.slug === id ||
        p.id === id ||
        p.title.toLowerCase().replace(/\s+/g, '-') === id,
    );

    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: project }, { status: 200 });
  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 },
    );
  }
}
