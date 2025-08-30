// components/ui/BlogCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Typography, Metric, Text, Caption, Overline } from '../typography/typography';
import { cn } from '@/lib/utils';

// Types
export interface Author {
  name: string;
  avatar?: string;
  role?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  slug: string;
  featuredImage?: string;
  author: Author;
  publishedAt: string;
  readTime: number;
  category: string;
  tags?: string[];
  isPopular?: boolean;
  viewCount?: number;
  likeCount?: number;
}

export interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact' | 'horizontal';
  showStats?: boolean;
  showCategory?: boolean;
  showAuthor?: boolean;
  showExcerpt?: boolean;
  className?: string;
  onClick?: () => void;
}

// Utility function to format date
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};

// Utility function to format numbers
const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

export const BlogCard = ({
  post,
  variant = 'default',
  showStats = true,
  showCategory = true,
  showAuthor = true,
  showExcerpt = true,
  className,
  onClick,
}: BlogCardProps) => {
  const {
    title,
    excerpt,
    slug,
    featuredImage,
    author,
    publishedAt,
    readTime,
    category,
    tags,
    isPopular,
    viewCount,
    likeCount
  } = post;

  // Card variants
  const cardVariants = {
    default: 'flex flex-col',
    featured: 'flex flex-col lg:flex-row lg:items-center gap-6',
    compact: 'flex flex-col',
    horizontal: 'flex flex-row items-start gap-4'
  };

  // Image variants
  const imageVariants = {
    default: 'w-full h-48 relative',
    featured: 'w-full lg:w-1/2 h-64 lg:h-80 relative',
    compact: 'w-full h-32 relative',
    horizontal: 'w-24 h-24 relative flex-shrink-0'
  };

  const CardContent = () => (
    <div className={cn(
      'bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700',
      'hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600',
      'transition-all duration-300 overflow-hidden group',
      variant === 'featured' && 'p-6',
      className
    )}>
      <div className={cardVariants[variant]}>
        {/* Featured Image */}
        {featuredImage && (
          <div className={imageVariants[variant]}>
            <Image
              src={featuredImage}
              alt={title}
              fill
              className="object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
              sizes={variant === 'horizontal' ? '96px' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
            />
            {isPopular && (
              <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full">
                <Caption weight="medium" color="primary" className="text-white text-xs">
                  Popular
                </Caption>
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className={cn(
          'flex-1',
          variant !== 'featured' && 'p-6',
          variant === 'horizontal' && 'p-0'
        )}>
          {/* Category & Stats */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              {showCategory && (
                <Overline 
                  color="info" 
                  className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full"
                >
                  {category}
                </Overline>
              )}
              {showStats && viewCount && (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <Caption color="muted">{formatNumber(viewCount)}</Caption>
                  </div>
                  {likeCount && (
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <Caption color="muted">{formatNumber(likeCount)}</Caption>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Title */}
          <Typography 
            variant={variant === 'featured' ? 'h2' : variant === 'compact' ? 'h5' : 'h4'}
            weight="semibold"
            className={cn(
              'mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors',
              variant === 'horizontal' && 'line-clamp-2'
            )}
            truncate={variant === 'horizontal'}
          >
            {title}
          </Typography>

          {/* Excerpt */}
          {showExcerpt && excerpt && variant !== 'compact' && (
            <Text 
              color="secondary" 
              className={cn(
                'mb-4 line-clamp-2',
                variant === 'horizontal' && 'text-sm line-clamp-1'
              )}
            >
              {excerpt}
            </Text>
          )}

          {/* Tags */}
          {tags && tags.length > 0 && variant !== 'horizontal' && variant !== 'compact' && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag) => (
                <Caption 
                  key={tag}
                  color="muted"
                  className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  #{tag}
                </Caption>
              ))}
              {tags.length > 3 && (
                <Caption color="muted" className="px-2 py-1">
                  +{tags.length - 3} more
                </Caption>
              )}
            </div>
          )}

          {/* Meta Info */}
          <div className={cn(
            'flex items-center justify-between',
            variant === 'horizontal' && 'flex-col items-start gap-2'
          )}>
            {/* Author */}
            {showAuthor && (
              <div className="flex items-center gap-3">
                {author.avatar && (
                  <div className="w-8 h-8 relative rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                )}
                <div className="flex flex-col">
                  <Caption weight="medium" color="primary">
                    {author.name}
                  </Caption>
                  {author.role && (
                    <Caption color="muted" className="text-xs">
                      {author.role}
                    </Caption>
                  )}
                </div>
              </div>
            )}

            {/* Date & Read Time */}
            <div className={cn(
              'flex items-center gap-3 text-right',
              variant === 'horizontal' && 'text-left'
            )}>
              <Caption color="muted">
                {formatDate(publishedAt)}
              </Caption>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <Caption color="muted">
                {readTime} min read
              </Caption>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="w-full text-left">
        <CardContent />
      </button>
    );
  }

  return (
    <Link href={`/blog/${slug}`} className="block">
      <CardContent />
    </Link>
  );
};

// Blog Grid Component
export const BlogGrid = ({ 
  posts, 
  variant = 'default',
  columns = 3 
}: { 
  posts: BlogPost[]; 
  variant?: BlogCardProps['variant'];
  columns?: 1 | 2 | 3 | 4;
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  };

  return (
    <div className={cn('grid gap-6', gridCols[columns])}>
      {posts.map((post) => (
        <BlogCard 
          key={post.id} 
          post={post} 
          variant={variant}
        />
      ))}
    </div>
  );
};

// Example usage component
export const BlogCardShowcase = () => {
  const samplePost: BlogPost = {
    id: '1',
    title: 'Building Modern Dashboard UI with Next.js and TypeScript',
    excerpt: 'Learn how to create beautiful, responsive dashboard interfaces using the latest web technologies. We\'ll cover component architecture, state management, and best practices.',
    slug: 'building-modern-dashboard-ui',
    featuredImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b05b?w=100&h=100&fit=crop&crop=face',
      role: 'Senior Frontend Developer'
    },
    publishedAt: '2024-01-15',
    readTime: 8,
    category: 'Development',
    tags: ['React', 'TypeScript', 'UI/UX', 'Next.js'],
    isPopular: true,
    viewCount: 12500,
    likeCount: 342
  };

  const posts = Array.from({ length: 6 }, (_, i) => ({
    ...samplePost,
    id: `${i + 1}`,
    title: `${samplePost.title} ${i + 1}`,
    isPopular: i === 0,
    viewCount: Math.floor(Math.random() * 20000) + 1000,
    likeCount: Math.floor(Math.random() * 500) + 50,
  }));

  return (
    <div className="space-y-8 p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Typography variant="h1" className="mb-2">Blog Card Showcase</Typography>
        <Text color="secondary" className="mb-8">
          Demonstrating different blog card variants with the Typography system
        </Text>

        {/* Featured Card */}
        <div className="mb-12">
          <Typography variant="h3" className="mb-4">Featured Card</Typography>
          <BlogCard post={samplePost} variant="featured" />
        </div>

        {/* Default Grid */}
        <div className="mb-12">
          <Typography variant="h3" className="mb-4">Default Grid</Typography>
          <BlogGrid posts={posts.slice(0, 3)} />
        </div>

        {/* Compact Cards */}
        <div className="mb-12">
          <Typography variant="h3" className="mb-4">Compact Cards</Typography>
          <BlogGrid posts={posts.slice(0, 4)} variant="compact" columns={4} />
        </div>

        {/* Horizontal Cards */}
        <div>
          <Typography variant="h3" className="mb-4">Horizontal Cards</Typography>
          <div className="grid gap-4 md:grid-cols-2">
            {posts.slice(0, 4).map((post) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                variant="horizontal"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;