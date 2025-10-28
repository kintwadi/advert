# MGP Angola - Modern Classified Ads Platform

## 🚀 About

MGP Angola is a modern classified ads platform for Angola, featuring a contemporary design with professional UI/UX patterns.

## ✨ Recent Updates

### Modern Design (2025-10-06)
The website has been completely modernized with:
- 🎨 Contemporary UI with professional color scheme
- 📱 Mobile-first responsive design
- ⚡ Performance optimizations
- ♿ Accessibility improvements
- 🎭 Smooth animations and transitions

## 📁 Project Structure

```
advert43/
├── src/main/
│   ├── java/              # Backend Java code
│   ├── resources/
│   │   ├── templates/     # Thymeleaf templates
│   │   │   ├── home.html          # Modernized main page
│   │   │   ├── home_modern.html   # Alternative modern version
│   │   │   └── links.html         # Header/footer fragments
│   │   └── static/
│   │       ├── css/
│   │       │   ├── modern.css              # Modern design system
│   │       │   ├── modern-enhancements.css # Utilities & components
│   │       │   └── custom.css              # Original styles
│   │       └── js/
│   │           ├── modern.js               # Modern interactions
│   │           └── home.js                 # Business logic
```

## 🎨 Design Features

- **CSS Variables** for easy theming
- **Grid Layout** for responsive design
- **Modern Typography** with Inter & Poppins fonts
- **Card-based** listings
- **Gradient Hero** section
- **Sticky Navigation** with backdrop blur
- **Smooth Animations** throughout
- **Dark Mode** ready

## 🚀 Getting Started

### Prerequisites
- Java 11+
- Maven
- Modern web browser

### Running the Application

```bash
cd advert43
./mvnw spring-boot:run
```

Visit `http://localhost:8080` to see the modern design in action.

## 📚 Documentation

- **[MODERNIZATION_SUMMARY.md](MODERNIZATION_SUMMARY.md)** - Complete overview of changes
- **[MODERN_DESIGN_GUIDE.md](MODERN_DESIGN_GUIDE.md)** - Design system and usage guide

## 🎨 Customization

### Changing Colors

Edit `modern.css`:
```css
:root {
  --primary-color: #2563eb;  /* Change this */
  --secondary-color: #10b981; /* And this */
}
```

### Enabling Dark Mode

Add to `<body>` tag:
```html
<body class="dark-mode">
```

## 🌟 Key Technologies

- **Backend**: Spring Boot
- **Template Engine**: Thymeleaf
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Google Fonts (Inter, Poppins)
- **Icons**: Font Awesome
- **Layout**: CSS Grid & Flexbox

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🤝 Contributing

When contributing to the modern design:
1. Use CSS variables for colors and spacing
2. Follow the existing naming conventions
3. Ensure mobile responsiveness
4. Test across browsers
5. Maintain accessibility standards

## 📄 License

[Add your license here]

## 👥 Authors

- Original Development Team
- Modern Design: AI Assistant (2025)

## 📞 Support

For questions about the modern design, check the documentation files listed above.

---

**Last Updated**: 2025-10-06
**Version**: 1.0.0 (Modern Edition)
