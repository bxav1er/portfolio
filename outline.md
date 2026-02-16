# Project Outline - xavierbzz Personal Website

## File Structure
```
/mnt/okcomputer/output/
├── index.html              # Landing page with personal introduction
├── projects.html           # Project timeline and work showcase  
├── writing.html            # Blog posts, thoughts, and analysis
├── visual.html             # Photography and visual work
├── main.js                 # Core JavaScript functionality
├── resources/              # Local assets folder
│   ├── hero-image.jpg      # Personal hero image
│   ├── project-*.jpg       # Project thumbnails
│   ├── photo-*.jpg         # Photography images
│   └── texture-bg.jpg      # Subtle background texture
├── interaction.md          # Interaction design documentation
├── design.md              # Design philosophy and guidelines
└── outline.md             # This project outline
```

## Page Breakdown

### 1. index.html - Landing Page
**Purpose**: Personal introduction and current focus
**Content**:
- Navigation bar with all page links
- Personal introduction with typewriter animation
- Current projects and interests overview
- Contact information and availability
- Subtle background texture and animations

**Key Features**:
- Large serif typography for name and tagline
- Typed.js animation for dynamic introduction
- Anime.js fade-in animations for sections
- Clean, centered layout with generous spacing

### 2. projects.html - Work & Experiments
**Purpose**: Timeline of projects and technical work
**Content**:
- Interactive project timeline (ECharts.js)
- Project cards with descriptions and links
- Categories: Development, Cybersecurity, Design
- Status indicators (in-progress, completed, experimental)

**Key Features**:
- Horizontal scrollable timeline
- Filter buttons for project categories
- Expandable project details
- Links to GitHub, demos, and documentation

### 3. writing.html - Thoughts & Analysis  
**Purpose**: Blog posts, analysis, and learning notes
**Content**:
- Filterable post grid by categories
- Manga analysis and game discussions
- Tech learning notes and tutorials
- Personal growth and reflection pieces

**Key Features**:
- Category filter system (Manga, Games, Tech, Personal)
- Reading time estimates
- Search functionality
- Clean typography-focused layout

### 4. visual.html - Photography & Visual Work
**Purpose**: Personal photography and visual experiments
**Content**:
- Photo gallery with lightbox view
- Organized by themes or chronology
- Minimal metadata (date, location)
- Visual experiments and design work

**Key Features**:
- Masonry grid layout
- Lightbox gallery with navigation
- Lazy loading for performance
- Subtle hover effects

## JavaScript Functionality (main.js)

### Core Features
1. **Navigation Management**: Smooth page transitions and active states
2. **Animation Controllers**: Anime.js and Splitting.js implementations
3. **Interactive Components**: Timeline, filters, forms, galleries
4. **Performance Optimizations**: Lazy loading, image optimization
5. **Accessibility**: Keyboard navigation and screen reader support

### Library Integration
- **Anime.js**: Section fade-ins and micro-interactions
- **Typed.js**: Typewriter effect for introduction
- **Splitting.js**: Text reveal animations for headings
- **ECharts.js**: Project timeline visualization
- **Splide.js**: Image carousels and sliders
- **p5.js**: Subtle background texture and particles

## Content Strategy

### Personal Voice
- Authentic, reflective, and honest tone
- First-person narrative throughout
- Mix of technical and creative content
- Personal growth and learning journey

### Content Categories
1. **Technology**: Cybersecurity, programming, IT learning
2. **Creative**: Manga analysis, game discussions, design
3. **Personal**: Growth experiences, reflections, photography
4. **Projects**: Technical work, experiments, collaborations

### SEO & Longevity
- Semantic HTML structure
- Meta descriptions and Open Graph tags
- Clean URL structure
- Fast loading times
- Accessible design patterns

## Technical Implementation

### Performance Priorities
- Optimized images (WebP with fallbacks)
- Minimal JavaScript bundle
- CSS-first animations where possible
- Lazy loading for images and content
- System fonts with web font fallbacks

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement for older browsers
- Mobile-first responsive design
- Touch-friendly interactions

### Accessibility Features
- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast text (4.5:1 minimum)
- Screen reader compatibility

This structure ensures a cohesive, maintainable website that grows with content while maintaining the minimal, intentional aesthetic that prioritizes user experience and content discovery.