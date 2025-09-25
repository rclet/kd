# KD Container Tracking - Shipping & Logistics

A real-time container tracking website for shipping and logistics operations. Track containers throughout their journey from origin to destination with detailed timeline visualization.

## Features

- **Real-time Container Tracking**: Search and track containers by ID
- **Interactive Timeline**: Visual tracking timeline showing container journey
- **Status Updates**: Current status with detailed information (In Transit, Delivered, Delayed)
- **Container Details**: Comprehensive information including type, weight, origin, destination
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: User-friendly error messages for invalid container IDs

## Demo

The website includes three demo containers to showcase different tracking scenarios:

- **MSKU-123456**: Container in transit from Shanghai to Los Angeles
- **TCLU-789012**: Delivered refrigerated container with temperature monitoring
- **HJMU-345678**: Delayed container showing revised arrival times

## Usage

1. Open `index.html` in your web browser
2. Enter a container ID in the search field or click on demo buttons
3. View detailed tracking information including:
   - Container specifications
   - Timeline of journey milestones
   - Current status and location
   - Estimated arrival times

## Running the Website

### Option 1: Direct File Access
Simply open `index.html` in your web browser.

### Option 2: Local HTTP Server
For full functionality, serve the files through a web server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## File Structure

```
kd/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality and data
└── README.md           # This documentation
```

## Browser Compatibility

- Chrome/Chromium 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technical Details

- **Frontend**: Pure HTML5, CSS3, and JavaScript (ES6+)
- **No Dependencies**: No external libraries required
- **Responsive**: Mobile-first responsive design with CSS Grid and Flexbox
- **Accessibility**: Semantic HTML with proper ARIA labels

## Future Enhancements

- Real-time WebSocket updates
- Map visualization of container routes
- Export tracking data to PDF
- Push notifications for status changes
- Integration with shipping APIs
- Multi-language support
