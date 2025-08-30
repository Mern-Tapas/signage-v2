
import Image from 'next/image'
import { Heading, Overline, Typography, Text, Metric, Caption } from '@/components/typography/typography'
import BlogCard, { BlogGrid } from '@/components/ui/BlogCard'
import React from 'react'

function page() {


  const blogPost = {
    id: '1',
    title: 'Building Modern Dashboard UI with Next.js and TypeScript',
    excerpt: 'Learn how to create beautiful, responsive dashboard interfaces using the latest web technologies. We\'ll cover component architecture, state management, and best practices for scalable applications.',
    content: 'Full article content would go here...',
    slug: 'building-modern-dashboard-ui-nextjs-typescript',
    featuredImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b05b?w=100&h=100&fit=crop&crop=face',
      role: 'Senior Frontend Developer'
    },
    publishedAt: '2024-01-15',
    readTime: 12,
    category: 'Development',
    tags: ['React', 'TypeScript', 'Next.js', 'UI/UX', 'Dashboard'],
    isPopular: true,
    viewCount: 15420,
    likeCount: 342
  }

  return (
    <div>


      <div className="space-y-8 p-6">
        <div>
          <Typography variant="h2" className="mb-4">Typography Showcase</Typography>

          {/* Headers */}
          <div className="space-y-4 mb-8">
            <Typography variant="h3" color="secondary">Headers</Typography>
            <Heading level={1}>Dashboard Title (H1)</Heading>
            <Heading level={2}>Page Title (H2)</Heading>
            <Heading level={3}>Section Title (H3)</Heading>
            <Heading level={4}>Card Title (H4)</Heading>
            <Heading level={5}>Subsection (H5)</Heading>
            <Heading level={6}>Small Header (H6)</Heading>
          </div>

          {/* Body Text */}
          <div className="space-y-4 mb-8">
            <Typography variant="h3" color="secondary">Body Text</Typography>
            <Text>This is body1 text for main content and descriptions.</Text>
            <Typography variant="body2">This is body2 text for secondary content.</Typography>
            <Caption color="muted">This is caption text for small details.</Caption>
            <Overline color="muted">Overline Text</Overline>
          </div>

          {/* Metrics */}
          <div className="space-y-4 mb-8">
            <Typography variant="h3" color="secondary">Metrics</Typography>
            <Metric size="xl" color="success">$12,345</Metric>
            <Metric size="lg" color="info">1,234</Metric>
            <Metric size="md" color="warning">567</Metric>
            <Metric size="sm" color="error">89</Metric>
          </div>

          {/* Colors */}
          <div className="space-y-2 mb-8">
            <Typography variant="h3" color="secondary">Color Variants</Typography>
            <Text color="primary">Primary text color</Text>
            <Text color="secondary">Secondary text color</Text>
            <Text color="muted">Muted text color</Text>
            <Text color="success">Success text color</Text>
            <Text color="warning">Warning text color</Text>
            <Text color="error">Error text color</Text>
            <Text color="info">Info text color</Text>
          </div>

          {/* Weights */}
          <div className="space-y-2">
            <Typography variant="h3" color="secondary">Font Weights</Typography>
            <Text weight="light">Light weight text</Text>
            <Text weight="normal">Normal weight text</Text>
            <Text weight="medium">Medium weight text</Text>
            <Text weight="semibold">Semibold weight text</Text>
            <Text weight="bold">Bold weight text</Text>
            <Text weight="extrabold">Extra bold weight text</Text>
          </div>

        </div>
        <div className=' grid lg:grid-cols-3 grid-cols-1 gap-4'>
          <BlogCard post={blogPost} />
          <BlogCard post={blogPost} />
          <BlogCard post={blogPost} />
          <BlogCard post={blogPost} />
          <BlogCard post={blogPost} />


          {/* <BlogGrid posts={} variant="compact" columns={4} /> */}


        </div>
          <BlogCard post={blogPost} variant="featured" />
      </div>

    </div>
  )
}

export default page