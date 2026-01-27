import { BlogPost, BlogAuthor } from '@/lib/types/blog';

// =============================================================================
// BLOG SERVICE
// =============================================================================
// This service layer abstracts blog data operations. Currently uses in-memory
// test data, but can be easily swapped for Postgres/Prisma queries.
//
// To migrate to Postgres:
// 1. Install Prisma: bun add prisma @prisma/client
// 2. Define schema in prisma/schema.prisma
// 3. Replace the functions below with Prisma queries
// =============================================================================

// Test author data
const TEST_AUTHOR: BlogAuthor = {
  id: '1',
  name: 'Matt Jaikaran',
  email: 'matt@example.com',
};

// Test blog posts data
const TEST_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'getting-started-with-nextjs-15',
    title: 'Getting Started with Next.js 15',
    excerpt:
      'An introduction to the latest features in Next.js 15, including the new App Router and React Server Components.',
    content: `
# Getting Started with Next.js 15

Next.js 15 brings exciting new features that make building React applications even better.

## Key Features

### App Router
The App Router is now stable and provides a more intuitive way to handle routing in your applications.

### React Server Components
Server Components allow you to render components on the server, reducing the JavaScript bundle sent to the client.

### Improved Performance
With automatic code splitting and optimized bundling, your applications load faster than ever.

## Getting Started

\`\`\`bash
bunx create-next-app@latest my-app
cd my-app
bun dev
\`\`\`

## Conclusion

Next.js 15 is a solid foundation for building modern web applications. Give it a try!
    `.trim(),
    publishedAt: new Date('2025-01-20'),
    createdAt: new Date('2025-01-20'),
    updatedAt: new Date('2025-01-20'),
    authorId: '1',
    tags: ['Next.js', 'React', 'TypeScript'],
    published: true,
  },
  {
    id: '2',
    slug: 'building-apis-with-django',
    title: 'Building REST APIs with Django',
    excerpt:
      'A practical guide to building robust REST APIs using Django REST Framework.',
    content: `
# Building REST APIs with Django

Django REST Framework (DRF) is a powerful toolkit for building Web APIs.

## Setup

\`\`\`bash
pip install django djangorestframework
\`\`\`

## Creating a Simple API

\`\`\`python
from rest_framework import viewsets
from .models import Project
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
\`\`\`

## Best Practices

1. Use serializers for validation
2. Implement proper authentication
3. Write comprehensive tests
4. Document your API

## Conclusion

DRF makes it straightforward to build production-ready APIs with Django.
    `.trim(),
    publishedAt: new Date('2025-01-15'),
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-01-15'),
    authorId: '1',
    tags: ['Django', 'Python', 'API'],
    published: true,
  },
  {
    id: '3',
    slug: 'typescript-tips-and-tricks',
    title: 'TypeScript Tips and Tricks',
    excerpt:
      'Useful TypeScript patterns and techniques to improve your code quality.',
    content: `
# TypeScript Tips and Tricks

TypeScript helps catch errors early and makes your code more maintainable.

## Utility Types

\`\`\`typescript
// Partial makes all properties optional
type PartialUser = Partial<User>;

// Pick selects specific properties
type UserName = Pick<User, 'firstName' | 'lastName'>;

// Omit excludes specific properties
type UserWithoutPassword = Omit<User, 'password'>;
\`\`\`

## Type Guards

\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}
\`\`\`

## Generics

\`\`\`typescript
function first<T>(array: T[]): T | undefined {
  return array[0];
}
\`\`\`

## Conclusion

Master these patterns to write better TypeScript code.
    `.trim(),
    publishedAt: new Date('2025-01-10'),
    createdAt: new Date('2025-01-10'),
    updatedAt: new Date('2025-01-10'),
    authorId: '1',
    tags: ['TypeScript', 'JavaScript', 'Tips'],
    published: true,
  },
];

// =============================================================================
// SERVICE FUNCTIONS
// Replace these with Prisma queries when migrating to Postgres
// =============================================================================

/**
 * Get all published blog posts
 * TODO: Replace with: prisma.blogPost.findMany({ where: { published: true }, orderBy: { publishedAt: 'desc' } })
 */
export async function getAllPublishedPosts(): Promise<BlogPost[]> {
  return TEST_POSTS.filter((post) => post.published).sort(
    (a, b) =>
      (b.publishedAt?.getTime() ?? 0) - (a.publishedAt?.getTime() ?? 0)
  );
}

/**
 * Get a single blog post by slug
 * TODO: Replace with: prisma.blogPost.findUnique({ where: { slug, published: true } })
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const post = TEST_POSTS.find((p) => p.slug === slug && p.published);
  return post ?? null;
}

/**
 * Get posts by tag
 * TODO: Replace with: prisma.blogPost.findMany({ where: { tags: { has: tag }, published: true } })
 */
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllPublishedPosts();
  return posts.filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

/**
 * Get all unique tags
 * TODO: Replace with aggregation query
 */
export async function getAllTags(): Promise<string[]> {
  const tags = new Set<string>();
  TEST_POSTS.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

/**
 * Get blog author by ID
 * TODO: Replace with: prisma.user.findUnique({ where: { id } })
 */
export async function getAuthor(id: string): Promise<BlogAuthor | null> {
  if (id === TEST_AUTHOR.id) {
    return TEST_AUTHOR;
  }
  return null;
}

/**
 * Calculate reading time for a post
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Generate static params for blog posts (for Next.js generateStaticParams)
 * TODO: Replace with: prisma.blogPost.findMany({ where: { published: true }, select: { slug: true } })
 */
export async function getBlogSlugs(): Promise<{ slug: string }[]> {
  return TEST_POSTS.filter((p) => p.published).map((p) => ({ slug: p.slug }));
}
