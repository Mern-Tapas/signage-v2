// components/ui/Typography.tsx
import React, { JSX } from 'react';
import { cn } from '@/lib/utils';
// Type definitions
export type TypographyVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'h5' 
  | 'h6'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline'
  | 'metric-xl'
  | 'metric-lg'
  | 'metric-md'
  | 'metric-sm';

export type TypographyColor = 
  | 'primary'
  | 'secondary' 
  | 'muted'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

export type TypographyWeight = 
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold';

export interface TypographyProps {
  variant?: TypographyVariant;
  color?: TypographyColor;
  weight?: TypographyWeight;
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  truncate?: boolean;
  align?: 'left' | 'center' | 'right';
}

// Variant styles mapping
const variantStyles: Record<TypographyVariant, string> = {
  h1: 'text-4xl leading-tight tracking-tight',
  h2: 'text-3xl leading-tight tracking-tight',
  h3: 'text-2xl leading-snug',
  h4: 'text-xl leading-snug',
  h5: 'text-lg leading-normal',
  h6: 'text-base leading-normal',
  body1: 'text-base leading-relaxed',
  body2: 'text-sm leading-relaxed',
  caption: 'text-xs leading-normal',
  overline: 'text-xs uppercase tracking-widest leading-normal',
  'metric-xl': 'text-6xl leading-none tracking-tight font-bold',
  'metric-lg': 'text-4xl leading-none tracking-tight font-semibold',
  'metric-md': 'text-2xl leading-tight font-semibold',
  'metric-sm': 'text-xl leading-tight font-medium',
};

// Color styles mapping
const colorStyles: Record<TypographyColor, string> = {
  primary: 'text-gray-900 dark:text-gray-100',
  secondary: 'text-gray-700 dark:text-gray-300',
  muted: 'text-gray-500 dark:text-gray-400',
  success: 'text-green-600 dark:text-green-400',
  warning: 'text-amber-600 dark:text-amber-400',
  error: 'text-red-600 dark:text-red-400',
  info: 'text-blue-600 dark:text-blue-400',
};

// Weight styles mapping
const weightStyles: Record<TypographyWeight, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
};

// Default HTML elements for variants
const defaultElements: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2', 
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
  'metric-xl': 'div',
  'metric-lg': 'div',
  'metric-md': 'div',
  'metric-sm': 'div',
};

export const Typography = React.forwardRef<
  HTMLElement,
  TypographyProps
>(({
  variant = 'body1',
  color = 'primary',
  weight,
  className,
  children,
  as,
  truncate = false,
  align = 'left',
  ...props
}, ref) => {
  const Component = as || defaultElements[variant];
  
  // Get default weight for metric variants
  const getDefaultWeight = (): TypographyWeight | undefined => {
    if (weight) return weight;
    if (variant.startsWith('metric')) return undefined; // Let variant handle it
    if (variant.startsWith('h')) return 'semibold';
    return undefined;
  };

  const classes = cn(
    // Base styles
    'font-sans',
    // Variant styles
    variantStyles[variant],
    // Color styles
    colorStyles[color],
    // Weight styles (if specified)
    weight && weightStyles[weight],
    // Default weights for headings
    getDefaultWeight() && weightStyles[getDefaultWeight()!],
    // Text alignment
    {
      'text-left': align === 'left',
      'text-center': align === 'center',
      'text-right': align === 'right',
    },
    // Truncation
    truncate && 'truncate',
    className
  );

  return React.createElement(
    Component,
    {
      ref,
      className: classes,
      ...props,
    },
    children
  );
});

Typography.displayName = 'Typography';

// Convenience components
export const Heading = ({ level, ...props }: Omit<TypographyProps, 'variant'> & { level: 1 | 2 | 3 | 4 | 5 | 6 }) => (
  <Typography variant={`h${level}` as TypographyVariant} {...props} />
);

export const Text = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="body1" {...props} />
);

export const Caption = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="caption" {...props} />
);

export const Overline = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="overline" {...props} />
);

export const Metric = ({ 
  size = 'md', 
  ...props 
}: Omit<TypographyProps, 'variant'> & { 
  size?: 'xl' | 'lg' | 'md' | 'sm' 
}) => (
  <Typography variant={`metric-${size}` as TypographyVariant} {...props} />
);