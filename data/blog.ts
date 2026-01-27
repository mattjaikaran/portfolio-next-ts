import { BlogPost } from '@/lib/types/blog';

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-scalable-react-applications',
    title: 'Building Scalable React Applications with Next.js',
    excerpt:
      'Learn the patterns and practices I use to build maintainable, scalable React applications using Next.js, TypeScript, and modern tooling.',
    content: `
# Building Scalable React Applications with Next.js

Over the years, I've worked on numerous React applications ranging from small startups to enterprise-scale platforms. Here are the key patterns and practices I've found essential for building maintainable, scalable applications.

## Project Structure

A well-organized project structure is the foundation of any scalable application. I typically organize my Next.js projects like this:

\`\`\`
/app          # Next.js app router
/components   # Reusable UI components
/data         # Static data and constants
/lib          # Utilities, types, and configurations
/hooks        # Custom React hooks
/services     # API and external service integrations
\`\`\`

## Type Safety with TypeScript

TypeScript isn't just about catching bugs—it's about creating self-documenting code that's easier to refactor and maintain. I define explicit interfaces for all data structures and API responses.

\`\`\`typescript
interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
}
\`\`\`

## State Management

For most applications, I've found that a combination of React's built-in state management (useState, useReducer, Context) and server state libraries like RTK Query or TanStack Query is sufficient. Redux Toolkit is reserved for truly complex client-side state.

## Component Patterns

I follow these principles for components:

1. **Single Responsibility**: Each component does one thing well
2. **Composition over Inheritance**: Build complex UIs from simple, composable pieces
3. **Controlled Components**: Prefer controlled inputs for predictable behavior
4. **Error Boundaries**: Gracefully handle component failures

## Testing Strategy

A solid testing strategy includes:

- **Unit Tests**: For utility functions and hooks
- **Integration Tests**: For component interactions
- **E2E Tests**: For critical user journeys

## Performance Optimization

Key techniques I use:

- **Code Splitting**: Dynamic imports for route-based splitting
- **Image Optimization**: Next.js Image component with proper sizing
- **Memoization**: React.memo, useMemo, and useCallback where appropriate
- **Server Components**: Leverage RSC for reduced client-side JavaScript

## Conclusion

Building scalable applications is about making good decisions early and maintaining discipline as the codebase grows. These patterns have served me well across many projects, and I hope they help you too.
    `.trim(),
    date: '2025-01-15',
    author: 'Matt Jaikaran',
    tags: ['React', 'Next.js', 'TypeScript', 'Architecture'],
    published: true,
  },
  {
    slug: 'django-api-best-practices',
    title: 'Django REST API Best Practices for Production',
    excerpt:
      'A comprehensive guide to building robust, production-ready APIs with Django REST Framework, including authentication, performance optimization, and testing.',
    content: `
# Django REST API Best Practices for Production

Django REST Framework (DRF) is my go-to choice for building backend APIs. After years of building APIs for various companies, here are the practices I've found most valuable.

## Project Setup

Start with a solid foundation:

\`\`\`bash
# Create virtual environment
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install django djangorestframework django-cors-headers
\`\`\`

## Serializer Patterns

Serializers are the bridge between your models and API responses. Keep them clean and purposeful:

\`\`\`python
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name']
        read_only_fields = ['id']
\`\`\`

## ViewSet Organization

I prefer ViewSets for CRUD operations:

\`\`\`python
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)
\`\`\`

## Authentication

For most projects, I use JWT authentication:

\`\`\`python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
}
\`\`\`

## Performance Optimization

Key techniques:

1. **Select Related / Prefetch Related**: Avoid N+1 queries
2. **Pagination**: Never return unbounded lists
3. **Caching**: Use Redis for frequently accessed data
4. **Database Indexing**: Index fields used in filters and ordering

## Error Handling

Consistent error responses are crucial:

\`\`\`python
{
    "error": "validation_error",
    "message": "Invalid input data",
    "details": {
        "email": ["This field is required."]
    }
}
\`\`\`

## Testing

Write comprehensive tests:

\`\`\`python
class ProjectAPITestCase(APITestCase):
    def test_create_project(self):
        response = self.client.post('/api/projects/', {
            'title': 'Test Project',
            'description': 'A test project'
        })
        self.assertEqual(response.status_code, 201)
\`\`\`

## Conclusion

A well-structured Django API is a joy to work with and maintain. These practices have helped me deliver reliable APIs for companies like HyVee, Hubble Contacts, and various startups.
    `.trim(),
    date: '2025-01-10',
    author: 'Matt Jaikaran',
    tags: ['Django', 'Python', 'API', 'Backend'],
    published: true,
  },
  {
    slug: 'from-music-to-code',
    title: 'From Music to Code: My Journey into Software Engineering',
    excerpt:
      'How my background in music production and the music industry prepared me for a career in software engineering, and the unexpected parallels between the two fields.',
    content: `
# From Music to Code: My Journey into Software Engineering

Before I wrote my first line of code, I was writing songs. My journey from musician to software engineer taught me that creativity and technical skill aren't opposites—they're complementary.

## The Nashville Years

I studied Music Business at Belmont University in Nashville, where I started my first band, Have You Heard. Those years taught me:

- **Collaboration**: Working with bandmates on creative projects
- **Iteration**: Rewriting songs until they felt right
- **Performance Under Pressure**: Playing live shows with no redo button
- **Self-Promotion**: Marketing yourself and your work

## The Transition

In 2016, I made the leap to software engineering through General Assembly's bootcamp. The transition felt surprisingly natural because:

1. **Problem Solving**: Both music and code require creative problem-solving
2. **Pattern Recognition**: Musical theory and programming both rely on patterns
3. **Continuous Learning**: Both fields evolve rapidly and reward curiosity
4. **Building Something from Nothing**: Whether a song or an app, you start with a blank canvas

## Unexpected Parallels

### Composition and Architecture

Arranging a song is like architecting software. You think about structure, flow, how different parts interact, and the overall user (listener) experience.

### Practice and Iteration

Musicians practice scales; developers practice coding challenges. Both build muscle memory and intuition through repetition.

### Collaboration

A band is just an agile team with better hair. You have standups (soundcheck), sprints (recording sessions), and retrospectives (post-show discussions).

## What Music Taught Me About Code

- **Attention to Detail**: A single wrong note ruins a take; a single bug can crash an app
- **Creative Problem Solving**: There's never just one way to write a song or solve a problem
- **Deadlines Are Real**: Album release dates and product launches both demand delivery
- **Feedback Is Essential**: Play your music for others; get code reviews from peers

## Conclusion

My music background didn't hold me back—it propelled me forward. If you're a creative person considering tech, know that your artistic skills are valuable assets. The best software is built by people who understand both the technical and human sides of creation.
    `.trim(),
    date: '2025-01-05',
    author: 'Matt Jaikaran',
    tags: ['Career', 'Music', 'Personal', 'Software Engineering'],
    published: true,
  },
  {
    slug: 'modern-css-with-tailwind',
    title: 'Modern CSS Architecture with Tailwind CSS',
    excerpt:
      'Why I switched to Tailwind CSS for all my projects, and how utility-first CSS has changed the way I think about styling web applications.',
    content: `
# Modern CSS Architecture with Tailwind CSS

After years of writing CSS with various methodologies—BEM, CSS Modules, styled-components—I've settled on Tailwind CSS as my preferred approach. Here's why.

## The Problem with Traditional CSS

Traditional CSS approaches have common pain points:

- **Naming Things**: BEM helps but still requires decisions for every element
- **Dead Code**: Unused styles accumulate over time
- **Context Switching**: Jumping between files to understand styling
- **Specificity Wars**: Fighting with cascade and inheritance

## Why Tailwind Works

### Colocation

Styles live with components. You see exactly what an element looks like by reading its class names:

\`\`\`jsx
<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  Click me
</button>
\`\`\`

### Consistency

Tailwind's design system enforces consistency:

- Spacing: 4px increments (p-1, p-2, p-4, etc.)
- Colors: Predefined palette with shades
- Typography: Consistent font sizes and weights

### Performance

Tailwind purges unused styles, resulting in tiny CSS bundles. My portfolio site's CSS is under 10KB.

## Common Patterns

### Component Composition

\`\`\`jsx
const Card = ({ children, className }) => (
  <div className={\`rounded-lg border bg-card p-6 \${className}\`}>
    {children}
  </div>
);
\`\`\`

### Responsive Design

Mobile-first with breakpoint prefixes:

\`\`\`jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Content */}
</div>
\`\`\`

### Dark Mode

Built-in dark mode support:

\`\`\`jsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content
</div>
\`\`\`

## Tips for Success

1. **Learn the Defaults**: Memorize common values (p-4 = 1rem, text-lg = 1.125rem)
2. **Use the Docs**: Tailwind's documentation is excellent
3. **Extract Components**: When you repeat patterns, create components
4. **Customize Thoughtfully**: Extend the theme for project-specific needs

## Conclusion

Tailwind CSS has made me faster and more consistent. The utility-first approach felt weird at first but now feels natural. If you haven't tried it, give it a real chance—build something substantial before judging.
    `.trim(),
    date: '2024-12-28',
    author: 'Matt Jaikaran',
    tags: ['CSS', 'Tailwind', 'Frontend', 'Design'],
    published: true,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug && post.published);
}

export function getAllPublishedPosts(): BlogPost[] {
  return blogPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPublishedPosts().filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
