# FarmSight Design System

## Overview
The FarmSight design system provides a comprehensive set of design tokens, components, and guidelines to ensure consistency across the agricultural technology platform.

## Brand Identity
**Mission**: Empowering farmers with intelligent technology for sustainable agriculture
**Vision**: Making farming smarter, more efficient, and data-driven

## Color Palette

### Primary Colors
- **Forest Green**: `#22c55e` (Primary brand color)
- **Deep Forest**: `#16a34a` (Primary hover state)
- **Sage Green**: `#84cc16` (Secondary accent)

### Neutral Colors
- **Pure White**: `#ffffff` (Background)
- **Soft Gray**: `#f8fafc` (Light background)
- **Medium Gray**: `#64748b` (Secondary text)
- **Dark Gray**: `#1e293b` (Primary text)
- **Charcoal**: `#0f172a` (Headers)

### Semantic Colors
- **Success**: `#10b981` (Positive actions)
- **Warning**: `#f59e0b` (Alerts)
- **Error**: `#ef4444` (Errors)
- **Info**: `#3b82f6` (Information)

## Typography

### Font Stack
- **Primary**: Inter (Headings and UI)
- **Secondary**: System fonts fallback

### Type Scale
- **Hero**: 48px-80px (Mobile-Desktop)
- **H1**: 32px-48px
- **H2**: 24px-36px
- **H3**: 20px-28px
- **Body Large**: 18px-20px
- **Body**: 16px
- **Body Small**: 14px
- **Caption**: 12px

### Line Heights
- **Tight**: 1.2 (Headlines)
- **Normal**: 1.5 (Body text)
- **Relaxed**: 1.6 (Long-form content)

## Spacing System

### Base Unit: 4px
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px
- **4xl**: 96px

### Component Spacing
- **Button padding**: 12px 24px
- **Card padding**: 24px
- **Section margins**: 64px-96px
- **Grid gaps**: 16px-24px

## Breakpoints

### Mobile-First Approach
- **xs**: 0px (Base mobile)
- **sm**: 640px (Large mobile)
- **md**: 768px (Tablet)
- **lg**: 1024px (Desktop)
- **xl**: 1280px (Large desktop)
- **2xl**: 1536px (Extra large)

## Component Guidelines

### Buttons
- **Primary**: Green background, white text
- **Secondary**: White background, green border
- **Minimum touch target**: 44px height
- **Border radius**: 8px
- **Hover states**: Darker background

### Cards
- **Background**: White
- **Border radius**: 12px
- **Shadow**: Subtle drop shadow
- **Padding**: 24px
- **Border**: 1px solid light gray

### Forms
- **Input height**: 44px minimum
- **Border radius**: 8px
- **Focus states**: Green border
- **Error states**: Red border and text

### Navigation
- **Height**: 64px
- **Background**: White with shadow
- **Logo size**: 32px height
- **Link spacing**: 24px

## Iconography

### Style
- **Stroke width**: 2px
- **Size**: 16px, 20px, 24px
- **Style**: Outline/stroke based
- **Color**: Inherit from parent

### Usage
- Use consistent sizing within components
- Maintain 2px stroke weight
- Align with text baseline

## Layout Principles

### Grid System
- **Container max-width**: 1200px
- **Gutters**: 16px mobile, 24px desktop
- **Columns**: Flexible based on content

### Spacing
- **Vertical rhythm**: Consistent 24px base
- **Section spacing**: 64px-96px
- **Component spacing**: 16px-32px

## Accessibility

### Color Contrast
- **AA compliance**: 4.5:1 minimum
- **AAA preferred**: 7:1 for body text
- **Focus indicators**: 2px green outline

### Touch Targets
- **Minimum size**: 44px x 44px
- **Spacing**: 8px minimum between targets

### Typography
- **Minimum size**: 16px for body text
- **Line height**: 1.5 minimum
- **Paragraph width**: 65 characters maximum

## Animation & Motion

### Timing
- **Fast**: 150ms (Micro-interactions)
- **Medium**: 300ms (Component transitions)
- **Slow**: 500ms (Page transitions)

### Easing
- **Standard**: ease-in-out
- **Enter**: ease-out
- **Exit**: ease-in

## Usage Guidelines

### Do's
- Use consistent spacing from the scale
- Maintain color contrast ratios
- Follow mobile-first responsive design
- Use semantic HTML elements
- Implement proper focus states

### Don'ts
- Don't use arbitrary spacing values
- Don't mix different font families
- Don't use colors outside the palette
- Don't ignore accessibility requirements
- Don't break the grid system

## Implementation

### CSS Custom Properties
\`\`\`css
:root {
  --color-primary: #22c55e;
  --color-primary-dark: #16a34a;
  --color-secondary: #84cc16;
  --color-text: #1e293b;
  --color-text-muted: #64748b;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --border-radius: 8px;
  --border-radius-lg: 12px;
}
\`\`\`

### Tailwind Configuration
The design system is implemented using Tailwind CSS with custom configuration for colors, spacing, and typography scales.
