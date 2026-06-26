# Swasthya Sathi - AI Co-Pilot for Clinics

A modern Next.js website for Swasthya Sathi, featuring product information, founder profiles, and contact management.

## Project Structure

```
swasthya-website/
├── app/
│   ├── layout.tsx              # Root layout with navigation & footer
│   ├── globals.css             # Global styles
│   ├── page.tsx                # Home/Landing page
│   ├── product/
│   │   └── page.tsx            # Product details page
│   ├── about/
│   │   └── page.tsx            # About us page
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── Navigation.tsx          # Header navigation
│   ├── Footer.tsx              # Footer
│   ├── Hero.tsx                # Landing page hero section
│   ├── Features.tsx            # Features section
│   ├── CTA.tsx                 # Call-to-action section
│   ├── FoundersSection.tsx     # About page - Founders profiles
│   ├── CompanyStory.tsx        # About page - Company mission & values
│   ├── ContactForm.tsx         # Contact form component
│   ├── ProductDetails.tsx      # Product page - Expandable details
│   └── ProductGallery.tsx      # Product page - Image gallery
├── public/
│   └── images/                 # Store product images here
├── package.json
├── next.config.ts
├── tsconfig.json
└── tailwind.config.ts
```

## Features

### 🏠 Home/Landing Page
- Eye-catching hero section highlighting AI innovation
- Features section covering:
  - Creating Products Using AI
  - Solving Industry Issues
  - Leveraging AI for Productivity
  - Improving Profitability
- Call-to-action section

### 📦 Product Page
- Swasthya Sathi product overview
- Tabbed interface (Overview, Features, Benefits)
- Product gallery with image upload capability
- Expandable product details sections:
  - Key Features
  - Technical Specifications
  - Pricing & Plans

### 👥 About Us Page
- Company story and mission
- Company values
- Two founder profiles:
  - **Darshil Jadeja** (Co-Founder & CTO)
  - **Arin Danish** (Co-Founder & CEO)
- Each founder has:
  - Profile image placeholder
  - Bio
  - Areas of expertise
  - Social media links

### 📧 Contact Page
- Contact information
- Contact form with fields:
  - Name, Email, Phone
  - Company/Clinic name
  - Subject selection
  - Message
- Office location, hours, and social links
- Form validation and status feedback

### 🧭 Navigation & Footer
- Responsive sticky navigation
- Mobile-friendly hamburger menu
- Footer with links to all sections
- Social media links

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd swasthya-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### Adding Founder Images
1. Place images in `public/images/` folder
2. Update paths in `components/FoundersSection.tsx`:
   ```typescript
   image: "/images/darshil.jpg"
   image: "/images/arin.jpg"
   ```

### Adding Product Images
1. Place product screenshots in `public/images/product/` folder
2. Update the `ProductGallery` component with actual image paths
3. Replace placeholder image in product hero section

### Updating Founder Information
Edit `components/FoundersSection.tsx`:
- Modify bio text
- Update expertise areas
- Add social media links

### Updating Product Details
Edit `components/ProductDetails.tsx`:
- Add/modify features
- Update pricing information
- Change specifications

### Contact Form Configuration
Edit `components/ContactForm.tsx`:
- Update the form submission logic to connect to your backend
- Add email notification service integration (e.g., SendGrid, Resend)

### Styling
- All styling uses Tailwind CSS
- Update theme colors in `tailwind.config.ts`
- Global styles in `app/globals.css`

## Color Scheme

- **Primary**: Blue (#0066CC)
- **Secondary**: Red (#FF6B6B)
- **Gradients**: Blue-to-Indigo for hero sections
- Easily customizable in `tailwind.config.ts`

## Form Handling

The contact form is currently set up with local state management. To integrate with a backend:

1. Replace the simulated API call in `ContactForm.tsx`:
```typescript
// Current (simulated):
await new Promise((resolve) => setTimeout(resolve, 1000));

// Replace with:
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

2. Create an API route in `app/api/contact/route.ts`:
```typescript
export async function POST(request: Request) {
  // Handle form submission
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with one click

### Other Platforms
- AWS Amplify
- Netlify
- Docker containers
- Any Node.js hosting

## Next Steps

1. **Add Product Images**: Upload real product screenshots
2. **Founder Photos**: Add professional headshots
3. **Configure Contact Form**: Set up email notifications
4. **SEO Optimization**: Add meta tags and structured data
5. **Analytics**: Integrate Google Analytics or similar
6. **Domain Setup**: Connect custom domain

## Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Responsive Design**: Mobile-first approach
- **Icons**: Unicode/Emoji for simplicity

## License

© 2024 Swasthya Sathi. All rights reserved.

## Support

For questions or support, contact: info@swasthyasathi.com
