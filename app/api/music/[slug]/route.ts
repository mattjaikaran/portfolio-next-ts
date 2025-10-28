import { NextResponse } from 'next/server';
import { musicProjects, musicData } from '@/data/music';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;

    // Find the music project by slug in new format
    let project = musicProjects.find((p) => p.slug === slug);

    // If not found in new format, try legacy format
    if (!project) {
      const legacyProject = musicData.find((p) => p.id === slug);
      if (legacyProject) {
        // Convert legacy format to new format for consistency
        project = {
          id: legacyProject.id,
          title: legacyProject.title,
          artist: 'Matt Jaikaran',
          description: legacyProject.description,
          longDescription:
            legacyProject.longDescription || legacyProject.description,
          image:
            legacyProject.releases?.[0]?.image || '/images/music/default.jpg',
          streamingUrl: legacyProject.releases?.[0]?.url || '#',
          tags: ['Music', 'Band'],
          date: legacyProject.releases?.[0]?.year?.toString() || 'Unknown',
          slug: legacyProject.id,
          releases: legacyProject.releases,
        };
      }
    }

    if (!project) {
      return NextResponse.json(
        { error: 'Music project not found' },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: project }, { status: 200 });
  } catch (error) {
    console.error('Error fetching music project:', error);
    return NextResponse.json(
      { error: 'Failed to fetch music project' },
      { status: 500 },
    );
  }
}
