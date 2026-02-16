# Design Philosophy - xavierbzz Personal Website

## Design Philosophy

### Core Principles
- **Intentional Minimalism**: Every element serves a purpose. No decorative elements that don't enhance usability or meaning.
- **Longevity Over Trends**: Design choices that age well and remain relevant years from now.
- **Readability First**: Typography and layout prioritize comfortable reading and content consumption.
- **Calm Presence**: Generous white space, subtle transitions, and restrained color palette create a peaceful browsing experience.

### Color Palette
- **Primary**: Warm off-white (#FEFEFE) - main background
- **Secondary**: Charcoal gray (#2D2D2D) - primary text
- **Accent**: Muted sage green (#7A8471) - links and subtle highlights
- **Supporting**: Light gray (#F5F5F5) - section backgrounds and subtle divisions

### Typography
- **Display Font**: "Crimson Text" (serif) - for headings and personal introduction
- **Body Font**: "Inter" (sans-serif) - for all body text, navigation, and UI elements
- **Monospace**: "JetBrains Mono" - for code snippets and technical content

**Hierarchy**:
- H1: 2.5rem, Crimson Text, medium weight
- H2: 1.875rem, Crimson Text, medium weight  
- H3: 1.5rem, Inter, semibold
- Body: 1rem, Inter, regular
- Small: 0.875rem, Inter, regular

### Visual Language
- **Geometric Simplicity**: Clean lines, consistent spacing, mathematical proportions
- **Subtle Depth**: Minimal shadows and borders, relying on spacing for separation
- **Content-Focused**: Visual elements support and enhance content, never distract
- **Human Touch**: Personal photography, handwritten elements, and authentic voice

## Visual Effects & Animation

### Used Libraries
- **Anime.js**: Subtle fade-in animations for content sections
- **Splitting.js**: Letter-by-letter text reveals for headings
- **Typed.js**: Typewriter effect for personal introduction
- **p5.js**: Minimal particle system for background texture
- **ECharts.js**: Clean data visualizations for project timelines
- **Splide.js**: Smooth image carousels for photography
- **Matter.js**: Subtle physics-based interactions

### Effect Implementation
- **Text Animation**: Gentle typewriter effect for introduction, staggered letter reveals for section headings
- **Scroll Motion**: Subtle fade-in animations (opacity 0.9 to 1.0) with 16px vertical movement
- **Hover Effects**: Gentle color transitions and subtle scale changes (1.0 to 1.02)
- **Background**: Consistent warm off-white with subtle texture, no gradients or bold colors
- **Transitions**: 200ms ease-in-out for all interactive elements

### Styling Approach
- **Mobile-First**: Responsive design starting from 320px width
- **Flexible Grid**: CSS Grid and Flexbox for adaptive layouts
- **Consistent Spacing**: 8px base unit system (8, 16, 24, 32, 48, 64px)
- **Accessible Contrast**: All text meets WCAG 4.5:1 contrast requirements
- **Fast Loading**: Optimized images, minimal JavaScript, system fonts where possible

### Header Effect
- **Clean Navigation**: Fixed top navigation with subtle background blur
- **Personal Introduction**: Large serif typography with typewriter animation
- **Subtle Texture**: Barely visible paper-like texture overlay (2% opacity)
- **Breathing Room**: Generous padding and margins for calm, uncluttered feel

This design approach ensures the website feels like a thoughtful, intentional space that will remain relevant and functional for years to come, prioritizing content and user experience over flashy trends.