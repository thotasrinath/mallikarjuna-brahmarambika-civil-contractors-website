# Brahmarambika Mallikarjuna Construction Website

A professional website for Brahmarambika Mallikarjuna Construction built with Nuxt Content and Tailwind CSS.

## Project Structure

```
nuxt-website/
├── app.vue              # Root app component
├── nuxt.config.ts        # Nuxt configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── layouts/
│   └── default.vue       # Default layout with header/footer
├── pages/
│   ├── index.vue         # Home page
│   ├── about.vue         # About page
│   ├── services.vue      # Services page
│   ├── portfolio.vue     # Portfolio page
│   └── contact.vue       # Contact page
├── content/
│   ├── index.md          # Home page content
│   ├── about.md          # About page content
│   ├── services.md       # Services page content
│   ├── portfolio.md      # Portfolio page content
│   └── contact.md       # Contact page content
└── public/
    └── images/           # Static assets
```

## Features

- ✅ Responsive design with Tailwind CSS
- ✅ Content management with Nuxt Content
- ✅ Professional layout with header/footer
- ✅ SEO optimized pages
- ✅ Modern, clean design
- ✅ Mobile-friendly navigation

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
# Build the application
npm run build

# Preview the built application
npm run preview

# Generate static site
npm run generate
```

## Pages

### Home (`/`)
- Hero section with call-to-action
- Company overview and statistics
- Service highlights
- Featured projects
- Client testimonials

### About (`/about`)
- Company history and mission
- Core values and philosophy
- Team information
- Certifications and achievements

### Services (`/services`)
- Residential construction
- Commercial construction
- Specialized services
- Project management
- Detailed service descriptions

### Portfolio (`/portfolio`)
- Featured projects showcase
- Project categories
- Client testimonials
- Project statistics

### Contact (`/contact`)
- Contact information
- Service areas
- FAQs
- Contact form guidance

## Content Management

All content is managed through Markdown files in the `content/` directory:

- Edit `content/index.md` for home page content
- Edit `content/about.md` for about page content
- Edit `content/services.md` for services content
- Edit `content/portfolio.md` for portfolio content
- Edit `content/contact.md` for contact page content

## Customization

### Styling
- Modify Tailwind configuration in `tailwind.config.js`
- Custom CSS can be added as needed

### Layout
- Edit `layouts/default.vue` for header/footer changes
- Modify `app.vue` for global app structure

### Pages
- Each page has its own Vue file in `pages/` directory
- Content is managed through corresponding Markdown files

## Deployment

The website can be deployed to various platforms:

### Static Hosting (recommended)
- Deploy to Netlify, Vercel, or GitHub Pages
- Generate static files with `npm run generate`

### Node.js Hosting
- Build with `npm run build`
- Deploy `.output` directory to Node.js server

## Support

For any issues or questions about the website, contact the development team.
