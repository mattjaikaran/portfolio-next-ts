import { NextResponse } from 'next/server';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

export async function GET() {
  try {
    const username = 'mattjaikaran';
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repos');
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter out forked repos and get the most recently updated
    const filteredRepos = repos
      .filter((repo) => !repo.name.includes('.github'))
      .slice(0, 6);

    return NextResponse.json(filteredRepos);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    );
  }
}
