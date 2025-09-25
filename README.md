# KD Shipping Agencies - NVOCC Website

A modern, responsive website for KD Shipping Agencies featuring a comprehensive tracking system for NVOCC (Non-Vessel Operating Common Carrier) services.

## Features

### 🚢 NVOCC Services
- **Ocean Freight**: FCL and LCL services to major ports worldwide
- **Air Freight**: Fast and reliable air cargo services
- **Warehousing**: Secure storage and distribution facilities
- **Customs Clearance**: Expert customs brokerage services
- **Door-to-Door**: Complete logistics solutions
- **Cargo Insurance**: Comprehensive insurance coverage

### 📦 Advanced Tracking System
- **Real-time Tracking**: Live updates on shipment status
- **Timeline View**: Detailed shipment journey with timestamps
- **Multiple Status Support**: In Transit, Delivered, Pending statuses
- **Responsive Design**: Works perfectly on desktop and mobile
- **Sample Tracking Numbers** for demonstration:
  - `KD123456789` - In Transit shipment
  - `KD987654321` - Delivered shipment
  - `KD555666777` - Pending shipment

### 🎨 Modern Web Design
- **Responsive Layout**: Mobile-first design approach
- **Smooth Animations**: Enhanced user experience
- **Professional UI**: Clean, modern interface
- **Fast Loading**: Optimized performance
- **Cross-browser Compatible**: Works on all modern browsers

### 📧 Contact & Quote System
- **Contact Forms**: Easy-to-use inquiry forms
- **Service Selection**: Dropdown for different services
- **Form Validation**: Built-in form validation
- **Responsive Contact Info**: Complete contact details

## File Structure

```
kd/
├── index.html          # Main homepage
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
└── README.md          # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox/Grid
- **JavaScript ES6+**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family
- **Responsive Design**: Mobile-first approach

## Getting Started

1. Clone the repository
2. Open `index.html` in your web browser
3. Try the tracking system with sample numbers:
   - KD123456789
   - KD987654321 
   - KD555666777

## Customization

### Adding New Tracking Numbers

Edit the `shipmentData` object in `js/script.js`:

```javascript
const shipmentData = {
    'YOUR_TRACKING_NUMBER': {
        number: 'YOUR_TRACKING_NUMBER',
        status: 'In Transit',
        // ... other properties
    }
};
```

### Styling

All styles are in `css/style.css`. The website uses CSS custom properties for easy theming:

- Primary Color: `#2c5aa0`
- Accent Color: `#f39c12`
- Background: `#f8f9fa`

### Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## Features in Detail

### Tracking System
- Advanced timeline visualization
- Multiple shipment statuses
- Detailed shipment information
- Error handling for invalid tracking numbers

### Services Section
- Six core NVOCC services
- Hover animations
- Service icons
- Detailed descriptions

### Contact Form
- Form validation
- Service selection dropdown
- Responsive design
- Submission handling

### Navigation
- Sticky header
- Smooth scrolling
- Mobile hamburger menu
- Active link highlighting

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## License

This project is created for KD Shipping Agencies.
