# MGP Angola - Modern Website

A modern, responsive website for MGP Investment cc, a leading procurement and investment solutions provider in Angola.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Fast Performance**: Optimized loading times and smooth scrolling
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Interactive Elements**: Animated counters, product tabs, video modal
- **Contact Forms**: Functional contact and supplier application forms
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📋 Sections

1. **Hero Section**: Eye-catching banner with company mission and key statistics
2. **About Us**: Company mission, vision, and values with interactive cards
3. **Services**: Comprehensive service offerings with detailed descriptions
4. **Products**: Interactive product showcase with tabbed interface
5. **Supplier Portal**: Information and application form for potential suppliers
6. **Contact**: Contact information and inquiry form
7. **Footer**: Company links and social media

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive functionality and animations
- **Font Awesome**: Professional icon library
- **Google Fonts**: Inter and Poppins font families
- **AOS Library**: Animate On Scroll effects

## 📁 Project Structure

```
mgp-angola-website/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── images/
│   │   ├── mgp-logo.png
│   │   ├── mgp-logo-white.png
│   │   ├── about-image.jpg
│   │   ├── procurement-platform.jpg
│   │   ├── analytics-dashboard.jpg
│   │   └── supplier-portal.jpg
│   └── videos/
│       ├── hero-bg.mp4
│       └── company-video.mp4
└── README.md
```

## 🎨 Design Features

### Color Scheme
- Primary: Linear gradient from #667eea to #764ba2
- Secondary: White (#ffffff)
- Text: Dark gray (#333333)
- Light text: Medium gray (#666666)

### Typography
- Headings: Poppins (Google Fonts)
- Body text: Inter (Google Fonts)
- Font weights: 300, 400, 500, 600, 700

### Animations
- Smooth scroll navigation
- Fade-in animations on scroll
- Hover effects on interactive elements
- Counter animations for statistics
- Parallax effect on hero section

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 767px and below

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Add your images** to the `assets/images/` folder:
   - `mgp-logo.png` - Company logo (light version)
   - `mgp-logo-white.png` - Company logo (white version for dark backgrounds)
   - `about-image.jpg` - About section image
   - `procurement-platform.jpg` - Product showcase image
   - `analytics-dashboard.jpg` - Product showcase image
   - `supplier-portal.jpg` - Product showcase image

3. **Add your videos** to the `assets/videos/` folder:
   - `hero-bg.mp4` - Hero background video
   - `company-video.mp4` - Company introduction video

4. **Update content** in `index.html`:
   - Replace placeholder contact information
   - Update company-specific text
   - Add real social media links

5. **Customize styling** in `assets/css/style.css` if needed

6. **Open `index.html`** in your web browser

## 📧 Contact Form Integration

The contact forms are ready for backend integration. To make them functional:

1. **Replace the form submission handler** in `assets/js/script.js`
2. **Add your backend endpoint** or email service
3. **Update the form action attributes** in the HTML

Example integration with a backend service:

```javascript
// Replace the setTimeout in the form submission handler
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    showNotification('Message sent successfully!', 'success');
    form.reset();
})
.catch(error => {
    showNotification('Error sending message. Please try again.', 'error');
});
```

## 🔧 Customization

### Colors
Update the CSS custom properties in `style.css`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --text-dark: #333333;
    --text-light: #666666;
    --background-light: #f8f9fa;
}
```

### Fonts
Replace the Google Fonts import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Content
All text content can be easily updated in the HTML file. Look for:
- Company name and tagline
- Service descriptions
- Contact information
- Social media links

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with some limitations)

## 📈 Performance Optimization

The website includes several performance optimizations:
- Lazy loading for images
- Minified CSS and JavaScript (production ready)
- Optimized animations with `transform` properties
- Efficient event handling with throttling and debouncing
- Preload critical resources

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Color contrast compliance
- Reduced motion support

## 📄 License

This project is created for MGP Investment cc. All rights reserved.

## 🤝 Support

For technical support or customization requests, please contact the development team.

---

**MGP Investment cc** - Transforming Business Through Smart Procurement