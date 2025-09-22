# FarmSight Style Guide

## Introduction
This style guide demonstrates how to implement the FarmSight design system in practice. It provides code examples and usage patterns for consistent implementation across the platform.

## Component Library

### Buttons

#### Primary Button
Used for main actions and call-to-actions.

\`\`\`tsx
<button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors min-h-[44px]">
  Start Farming Smarter
</button>
\`\`\`

**Usage**: Primary actions, form submissions, main CTAs
**States**: Default, hover, active, disabled, loading

#### Secondary Button
Used for secondary actions and alternative options.

\`\`\`tsx
<button className="bg-white hover:bg-gray-50 text-green-600 border border-green-500 px-6 py-3 rounded-lg font-medium transition-colors min-h-[44px]">
  Learn More
</button>
\`\`\`

**Usage**: Secondary actions, cancel buttons, alternative options

#### Ghost Button
Used for subtle actions and navigation.

\`\`\`tsx
<button className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors">
  Features
</button>
\`\`\`

**Usage**: Navigation items, subtle actions, tertiary options

### Typography

#### Headlines
\`\`\`tsx
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
  Farm Smarter with AI-Powered Insights
</h1>
\`\`\`

#### Subheadings
\`\`\`tsx
<h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
  Platform Features
</h2>
\`\`\`

#### Body Text
\`\`\`tsx
<p className="text-base md:text-lg text-gray-600 leading-relaxed">
  Transform your agricultural operations with intelligent data analysis and predictive insights.
</p>
\`\`\`

#### Captions
\`\`\`tsx
<span className="text-sm text-gray-500">
  Trusted by 10,000+ farmers worldwide
</span>
\`\`\`

### Cards

#### Feature Card
\`\`\`tsx
<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
    <Icon className="w-6 h-6 text-green-600" />
  </div>
  <h3 className="text-xl font-semibold text-gray-900 mb-2">Feature Title</h3>
  <p className="text-gray-600 leading-relaxed">Feature description text goes here.</p>
</div>
\`\`\`

#### Stat Card
\`\`\`tsx
<div className="text-center">
  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">10,000+</div>
  <div className="text-gray-600">Active Farmers</div>
</div>
\`\`\`

### Forms

#### Input Field
\`\`\`tsx
<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-700">
    Email Address
  </label>
  <input 
    type="email"
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
    placeholder="Enter your email"
  />
</div>
\`\`\`

#### Form Group
\`\`\`tsx
<form className="space-y-6 max-w-md">
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Full Name
    </label>
    <input 
      type="text"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
    />
  </div>
  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium">
    Submit
  </button>
</form>
\`\`\`

### Navigation

#### Header Navigation
\`\`\`tsx
<nav className="bg-white shadow-sm border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center space-x-8">
        <div className="text-2xl font-bold text-green-600">FarmSight</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
        </div>
      </div>
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
        Login
      </button>
    </div>
  </div>
</nav>
\`\`\`

### Layout Patterns

#### Hero Section
\`\`\`tsx
<section className="bg-gradient-to-br from-green-50 to-blue-50 py-12 md:py-20 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Farm Smarter with AI-Powered Insights
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
        Transform your agricultural operations with intelligent data analysis
      </p>
      <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium">
        Get Started
      </button>
    </div>
  </div>
</section>
\`\`\`

#### Feature Grid
\`\`\`tsx
<section className="py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Platform Features
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Everything you need to optimize your farming operations
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Feature cards go here */}
    </div>
  </div>
</section>
\`\`\`

## Responsive Design Patterns

### Mobile-First Approach
Always start with mobile styles and enhance for larger screens:

\`\`\`tsx
<div className="px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
    Responsive Heading
  </h2>
</div>
\`\`\`

### Breakpoint Usage
- **Mobile (0-640px)**: Single column, compact spacing
- **Tablet (640-1024px)**: Two columns, medium spacing
- **Desktop (1024px+)**: Multi-column, generous spacing

### Touch Targets
Ensure all interactive elements are at least 44px in height:

\`\`\`tsx
<button className="min-h-[44px] px-6 py-3 bg-green-500 text-white rounded-lg">
  Touch-Friendly Button
</button>
\`\`\`

## Color Usage Examples

### Primary Actions
\`\`\`tsx
<button className="bg-green-500 hover:bg-green-600 text-white">
  Primary Action
</button>
\`\`\`

### Secondary Actions
\`\`\`tsx
<button className="bg-white border border-green-500 text-green-600 hover:bg-green-50">
  Secondary Action
</button>
\`\`\`

### Success States
\`\`\`tsx
<div className="bg-green-100 border border-green-200 text-green-800 p-4 rounded-lg">
  Success message
</div>
\`\`\`

### Warning States
\`\`\`tsx
<div className="bg-yellow-100 border border-yellow-200 text-yellow-800 p-4 rounded-lg">
  Warning message
</div>
\`\`\`

## Animation Guidelines

### Hover Transitions
\`\`\`tsx
<button className="transition-colors duration-200 hover:bg-green-600">
  Smooth Hover
</button>
\`\`\`

### Loading States
\`\`\`tsx
<button className="relative" disabled>
  <span className="opacity-0">Button Text</span>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
</button>
\`\`\`

## Accessibility Implementation

### Focus States
\`\`\`tsx
<button className="focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none">
  Accessible Button
</button>
\`\`\`

### Screen Reader Support
\`\`\`tsx
<button aria-label="Close dialog">
  <X className="w-5 h-5" aria-hidden="true" />
</button>
\`\`\`

### Semantic HTML
\`\`\`tsx
<main>
  <section aria-labelledby="features-heading">
    <h2 id="features-heading">Platform Features</h2>
    {/* Content */}
  </section>
</main>
\`\`\`

## Common Patterns

### Loading Skeleton
\`\`\`tsx
<div className="animate-pulse">
  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
</div>
\`\`\`

### Empty States
\`\`\`tsx
<div className="text-center py-12">
  <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
    <Icon className="w-8 h-8 text-gray-400" />
  </div>
  <h3 className="text-lg font-medium text-gray-900 mb-2">No data available</h3>
  <p className="text-gray-600">Get started by adding your first item.</p>
</div>
\`\`\`

### Error States
\`\`\`tsx
<div className="bg-red-50 border border-red-200 rounded-lg p-4">
  <div className="flex items-center">
    <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
    <span className="text-red-800">An error occurred. Please try again.</span>
  </div>
</div>
\`\`\`

## Implementation Checklist

### Before Implementation
- [ ] Review design system tokens
- [ ] Check accessibility requirements
- [ ] Verify responsive breakpoints
- [ ] Test color contrast ratios

### During Implementation
- [ ] Use semantic HTML elements
- [ ] Implement proper focus states
- [ ] Add appropriate ARIA labels
- [ ] Test keyboard navigation
- [ ] Verify touch target sizes

### After Implementation
- [ ] Test across devices
- [ ] Validate HTML
- [ ] Check accessibility with screen reader
- [ ] Performance audit
- [ ] Cross-browser testing

This style guide ensures consistent implementation of the FarmSight design system across all platform components and features.
