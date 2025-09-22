# FarmSight Components Guide

## Overview
This guide documents all reusable components in the FarmSight platform, providing implementation details, props, and usage examples.

## Navigation Components

### Header Navigation
**File**: `components/header-navigation.tsx`

A responsive navigation header with logo, menu items, and authentication buttons.

#### Props
\`\`\`typescript
interface HeaderNavigationProps {
  className?: string;
  showMobileMenu?: boolean;
  onMobileMenuToggle?: () => void;
}
\`\`\`

#### Usage
\`\`\`tsx
import { HeaderNavigation } from '@/components/header-navigation';

<HeaderNavigation 
  showMobileMenu={false}
  onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
/>
\`\`\`

#### Features
- Responsive design with mobile hamburger menu
- Smooth scroll navigation to page sections
- Active state indicators
- Accessible keyboard navigation

---

## Hero Components

### Hero Section
**File**: `components/hero-section.tsx`

Main landing page hero with headline, description, and primary CTA.

#### Props
\`\`\`typescript
interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}
\`\`\`

#### Usage
\`\`\`tsx
import { HeroSection } from '@/components/hero-section';

<HeroSection
  title="Farm Smarter with AI-Powered Insights"
  subtitle="Transform your agricultural operations with intelligent data analysis"
  ctaText="Start Farming Smarter"
  ctaLink="/login"
/>
\`\`\`

#### Features
- Responsive typography scaling
- Gradient background support
- Animated elements on scroll
- Mobile-optimized layout

---

## Feature Components

### Feature Cards
**File**: `components/feature-cards.tsx`

Grid of feature cards showcasing platform capabilities.

#### Props
\`\`\`typescript
interface FeatureCardsProps {
  features: Array<{
    title: string;
    description: string;
    icon: React.ComponentType;
    gradient: string;
  }>;
  className?: string;
}
\`\`\`

#### Usage
\`\`\`tsx
import { FeatureCards } from '@/components/feature-cards';
import { Calendar, BarChart, Users } from 'lucide-react';

const features = [
  {
    title: "Plan Your Schedules",
    description: "Optimize planting and harvesting schedules",
    icon: Calendar,
    gradient: "from-green-400 to-blue-500"
  }
];

<FeatureCards features={features} />
\`\`\`

#### Features
- Responsive grid layout
- Hover animations
- Custom gradient backgrounds
- Icon integration

### Documentation Section
**File**: `components/documentation-section.tsx`

Interactive feature showcase with visual elements and descriptions.

#### Props
\`\`\`typescript
interface DocumentationSectionProps {
  title: string;
  subtitle: string;
  features: Array<{
    title: string;
    description: string;
    visual: React.ReactNode;
  }>;
}
\`\`\`

#### Usage
\`\`\`tsx
import { DocumentationSection } from '@/components/documentation-section';

<DocumentationSection
  title="Platform Features"
  subtitle="Everything you need for smart farming"
  features={platformFeatures}
/>
\`\`\`

#### Features
- Interactive hover states
- Custom visual elements
- Responsive layout
- Smooth animations

---

## Dashboard Components

### Dashboard Preview
**File**: `components/dashboard-preview.tsx`

Preview of the main dashboard interface with mock data visualization.

#### Props
\`\`\`typescript
interface DashboardPreviewProps {
  className?: string;
  showMockData?: boolean;
}
\`\`\`

#### Usage
\`\`\`tsx
import { DashboardPreview } from '@/components/dashboard-preview';

<DashboardPreview 
  showMockData={true}
  className="max-w-6xl mx-auto"
/>
\`\`\`

#### Features
- Responsive chart displays
- Mock data visualization
- Interactive elements
- Mobile-optimized layout

---

## Integration Components

### Effortless Integration
**File**: `components/effortless-integration-updated.tsx`

Showcase of platform integrations with partner logos and descriptions.

#### Props
\`\`\`typescript
interface EffortlessIntegrationProps {
  integrations: Array<{
    name: string;
    logo: string;
    description: string;
  }>;
  title: string;
  subtitle: string;
}
\`\`\`

#### Usage
\`\`\`tsx
import { EffortlessIntegration } from '@/components/effortless-integration-updated';

<EffortlessIntegration
  title="Seamless Integrations"
  subtitle="Connect with your existing tools"
  integrations={partnerIntegrations}
/>
\`\`\`

#### Features
- Logo grid display
- Hover animations
- Responsive layout
- Partner showcase

---

## CTA Components

### CTA Section
**File**: `components/cta-section.tsx`

Call-to-action section with compelling messaging and action buttons.

#### Props
\`\`\`typescript
interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
}
\`\`\`

#### Usage
\`\`\`tsx
import { CTASection } from '@/components/cta-section';

<CTASection
  title="Ready to Transform Your Farm?"
  subtitle="Join thousands of farmers already using FarmSight"
  primaryCTA={{ text: "Get Started", link: "/signup" }}
  secondaryCTA={{ text: "Learn More", link: "/features" }}
/>
\`\`\`

#### Features
- Multiple CTA options
- Responsive design
- Compelling messaging
- Action-oriented layout

---

## Footer Components

### Footer
**File**: `components/footer.tsx`

Site footer with links, contact information, and social media.

#### Props
\`\`\`typescript
interface FooterProps {
  companyName: string;
  links: Array<{
    title: string;
    items: Array<{
      name: string;
      href: string;
    }>;
  }>;
  socialLinks?: Array<{
    name: string;
    href: string;
    icon: React.ComponentType;
  }>;
}
\`\`\`

#### Usage
\`\`\`tsx
import { Footer } from '@/components/footer';

<Footer
  companyName="FarmSight"
  links={footerLinks}
  socialLinks={socialMediaLinks}
/>
\`\`\`

#### Features
- Multi-column layout
- Social media integration
- Responsive design
- SEO-friendly structure

---

## Form Components

### Login Form
**File**: `app/login/page.tsx`

Authentication form with email/password fields and validation.

#### Features
- Form validation
- Error handling
- Responsive design
- Accessibility compliance

#### Usage
\`\`\`tsx
// Implemented as a page component
// Access via /login route
\`\`\`

---

## UI Components

### Button Variants

#### Primary Button
\`\`\`tsx
<button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors min-h-[44px]">
  Primary Action
</button>
\`\`\`

#### Secondary Button
\`\`\`tsx
<button className="bg-white hover:bg-gray-50 text-green-600 border border-green-500 px-6 py-3 rounded-lg font-medium transition-colors min-h-[44px]">
  Secondary Action
</button>
\`\`\`

#### Ghost Button
\`\`\`tsx
<button className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors">
  Ghost Action
</button>
\`\`\`

### Card Components

#### Feature Card
\`\`\`tsx
<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
    <Icon className="w-6 h-6 text-green-600" />
  </div>
  <h3 className="text-xl font-semibold text-gray-900 mb-2">Card Title</h3>
  <p className="text-gray-600 leading-relaxed">Card description</p>
</div>
\`\`\`

#### Stat Card
\`\`\`tsx
<div className="text-center">
  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">10,000+</div>
  <div className="text-gray-600">Metric Label</div>
</div>
\`\`\`

---

## Layout Components

### Container
\`\`\`tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
\`\`\`

### Section
\`\`\`tsx
<section className="py-12 md:py-16 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section content */}
  </div>
</section>
\`\`\`

### Grid Layouts
\`\`\`tsx
{/* Feature Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  {/* Grid items */}
</div>

{/* Two Column */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
  {/* Two column content */}
</div>
\`\`\`

---

## Component Guidelines

### Naming Conventions
- Use PascalCase for component names
- Use descriptive, specific names
- Include component type in name (e.g., `UserCard`, `LoginForm`)

### File Structure
\`\`\`
components/
├── ui/                 # Basic UI components
├── forms/             # Form-related components
├── navigation/        # Navigation components
├── sections/          # Page section components
└── layout/            # Layout components
\`\`\`

### Props Guidelines
- Use TypeScript interfaces for props
- Provide default values where appropriate
- Make optional props truly optional
- Use descriptive prop names

### Styling Guidelines
- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Implement consistent spacing
- Use design system colors and typography

### Accessibility Guidelines
- Include proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios
- Use semantic HTML elements

### Performance Guidelines
- Lazy load heavy components
- Optimize images and assets
- Use React.memo for expensive renders
- Minimize bundle size

---

## Testing Guidelines

### Component Testing
\`\`\`tsx
import { render, screen } from '@testing-library/react';
import { FeatureCards } from '@/components/feature-cards';

test('renders feature cards', () => {
  const features = [
    { title: 'Test Feature', description: 'Test description', icon: TestIcon, gradient: 'from-blue-400 to-green-500' }
  ];
  
  render(<FeatureCards features={features} />);
  expect(screen.getByText('Test Feature')).toBeInTheDocument();
});
\`\`\`

### Accessibility Testing
- Use axe-core for automated testing
- Test with screen readers
- Verify keyboard navigation
- Check color contrast ratios

This components guide provides comprehensive documentation for all FarmSight platform components, ensuring consistent implementation and maintenance across the application.
