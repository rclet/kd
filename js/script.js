// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger?.classList.remove('active');
    navMenu?.classList.remove('active');
}));

// Sample shipment data for demonstration
const shipmentData = {
    'KD123456789': {
        number: 'KD123456789',
        status: 'In Transit',
        statusClass: 'status-in-transit',
        origin: 'Shanghai, China',
        destination: 'Los Angeles, USA',
        vessel: 'MV Ocean Pioneer',
        departure: '2024-01-15',
        eta: '2024-01-28',
        container: 'MSKU1234567',
        weight: '18,500 kg',
        timeline: [
            {
                title: 'Booking Confirmed',
                description: 'Shipment booking has been confirmed',
                date: '2024-01-10 09:00',
                status: 'completed'
            },
            {
                title: 'Cargo Loaded',
                description: 'Cargo loaded at Shanghai Port',
                date: '2024-01-14 14:30',
                status: 'completed'
            },
            {
                title: 'Vessel Departed',
                description: 'MV Ocean Pioneer departed from Shanghai',
                date: '2024-01-15 08:00',
                status: 'completed'
            },
            {
                title: 'In Transit',
                description: 'Vessel is currently at sea, estimated arrival in 3 days',
                date: '2024-01-25 12:00',
                status: 'current'
            },
            {
                title: 'Port Arrival',
                description: 'Expected arrival at Los Angeles Port',
                date: '2024-01-28 06:00',
                status: 'pending'
            },
            {
                title: 'Customs Clearance',
                description: 'Processing customs documentation',
                date: 'TBD',
                status: 'pending'
            },
            {
                title: 'Ready for Pickup',
                description: 'Cargo ready for final delivery',
                date: 'TBD',
                status: 'pending'
            }
        ]
    },
    'KD987654321': {
        number: 'KD987654321',
        status: 'Delivered',
        statusClass: 'status-delivered',
        origin: 'Hamburg, Germany',
        destination: 'New York, USA',
        vessel: 'MV Atlantic Star',
        departure: '2024-01-01',
        eta: '2024-01-18',
        container: 'HLCU9876543',
        weight: '22,100 kg',
        timeline: [
            {
                title: 'Booking Confirmed',
                description: 'Shipment booking has been confirmed',
                date: '2023-12-28 10:00',
                status: 'completed'
            },
            {
                title: 'Cargo Loaded',
                description: 'Cargo loaded at Hamburg Port',
                date: '2023-12-31 16:00',
                status: 'completed'
            },
            {
                title: 'Vessel Departed',
                description: 'MV Atlantic Star departed from Hamburg',
                date: '2024-01-01 09:00',
                status: 'completed'
            },
            {
                title: 'Port Arrival',
                description: 'Arrived at New York Port',
                date: '2024-01-18 14:30',
                status: 'completed'
            },
            {
                title: 'Customs Clearance',
                description: 'Customs clearance completed',
                date: '2024-01-19 11:00',
                status: 'completed'
            },
            {
                title: 'Delivered',
                description: 'Cargo successfully delivered to consignee',
                date: '2024-01-20 15:45',
                status: 'completed'
            }
        ]
    },
    'KD555666777': {
        number: 'KD555666777',
        status: 'Pending',
        statusClass: 'status-pending',
        origin: 'Singapore',
        destination: 'Rotterdam, Netherlands',
        vessel: 'MV Global Trader',
        departure: '2024-02-01',
        eta: '2024-02-20',
        container: 'SGPU5556667',
        weight: '19,800 kg',
        timeline: [
            {
                title: 'Booking Confirmed',
                description: 'Shipment booking has been confirmed',
                date: '2024-01-20 14:00',
                status: 'completed'
            },
            {
                title: 'Documentation Review',
                description: 'Reviewing shipping documentation',
                date: '2024-01-25 10:00',
                status: 'current'
            },
            {
                title: 'Cargo Loading',
                description: 'Scheduled for cargo loading',
                date: '2024-01-31 TBD',
                status: 'pending'
            },
            {
                title: 'Vessel Departure',
                description: 'MV Global Trader scheduled departure',
                date: '2024-02-01 TBD',
                status: 'pending'
            },
            {
                title: 'In Transit',
                description: 'Vessel will be at sea',
                date: 'TBD',
                status: 'pending'
            },
            {
                title: 'Port Arrival',
                description: 'Expected arrival at Rotterdam Port',
                date: '2024-02-20 TBD',
                status: 'pending'
            }
        ]
    }
};

// Tracking function
function trackShipment() {
    const trackingNumber = document.getElementById('trackingNumber').value.trim().toUpperCase();
    const resultsDiv = document.getElementById('trackingResults');
    
    if (!trackingNumber) {
        alert('Please enter a tracking number');
        return;
    }
    
    // Show loading
    resultsDiv.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p style="margin-left: 1rem;">Searching for shipment...</p>
        </div>
    `;
    resultsDiv.style.display = 'block';
    
    // Simulate API call delay
    setTimeout(() => {
        const shipment = shipmentData[trackingNumber];
        
        if (shipment) {
            displayShipmentInfo(shipment);
        } else {
            displayNotFound(trackingNumber);
        }
    }, 1500);
}

function displayShipmentInfo(shipment) {
    const resultsDiv = document.getElementById('trackingResults');
    
    const timelineHTML = shipment.timeline.map(item => `
        <div class="timeline-item ${item.status}">
            <div class="timeline-content">
                <div class="timeline-title">${item.title}</div>
                <div class="timeline-description">${item.description}</div>
                <div class="timeline-date">${item.date}</div>
            </div>
        </div>
    `).join('');
    
    resultsDiv.innerHTML = `
        <div class="shipment-info">
            <div class="shipment-header">
                <div class="shipment-number">Tracking #: ${shipment.number}</div>
                <div class="shipment-status ${shipment.statusClass}">${shipment.status}</div>
            </div>
            
            <div class="shipment-details">
                <div class="detail-item">
                    <div class="detail-label">Origin</div>
                    <div class="detail-value">${shipment.origin}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Destination</div>
                    <div class="detail-value">${shipment.destination}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Vessel</div>
                    <div class="detail-value">${shipment.vessel}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Departure</div>
                    <div class="detail-value">${shipment.departure}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">ETA</div>
                    <div class="detail-value">${shipment.eta}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Container</div>
                    <div class="detail-value">${shipment.container}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Weight</div>
                    <div class="detail-value">${shipment.weight}</div>
                </div>
            </div>
        </div>
        
        <div class="tracking-timeline">
            <h3 style="margin-bottom: 1.5rem; color: #2c5aa0;">Shipment Timeline</h3>
            ${timelineHTML}
        </div>
    `;
}

function displayNotFound(trackingNumber) {
    const resultsDiv = document.getElementById('trackingResults');
    
    resultsDiv.innerHTML = `
        <div style="padding: 2rem; text-align: center;">
            <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #f39c12; margin-bottom: 1rem;"></i>
            <h3 style="color: #2c5aa0; margin-bottom: 1rem;">Shipment Not Found</h3>
            <p style="color: #666; margin-bottom: 1.5rem;">
                We couldn't find a shipment with tracking number: <strong>${trackingNumber}</strong>
            </p>
            <p style="color: #666; font-size: 0.9rem;">
                Please check your tracking number and try again, or contact our customer service team for assistance.
            </p>
            <div style="margin-top: 2rem;">
                <button onclick="clearTracking()" class="btn btn-secondary">
                    <i class="fas fa-redo"></i> Try Again
                </button>
            </div>
        </div>
    `;
}

function clearTracking() {
    document.getElementById('trackingNumber').value = '';
    document.getElementById('trackingResults').style.display = 'none';
}

// Contact form handling
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enter key support for tracking input
document.getElementById('trackingNumber')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        trackShipment();
    }
});

// Add some sample tracking numbers for demo
window.addEventListener('load', function() {
    const trackingInput = document.getElementById('trackingNumber');
    if (trackingInput) {
        trackingInput.setAttribute('placeholder', 'Enter tracking number (try: KD123456789, KD987654321, KD555666777)');
    }
});

// Header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
});

// Add animation on scroll for service cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards for animation
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add click handlers for demo tracking numbers
function insertSampleTracking(trackingNumber) {
    document.getElementById('trackingNumber').value = trackingNumber;
    trackShipment();
}

// Console welcome message
console.log(`
🚢 Welcome to KD Shipping Agencies Website!

Demo tracking numbers to try:
• KD123456789 (In Transit)
• KD987654321 (Delivered) 
• KD555666777 (Pending)

Features included:
✅ Responsive design
✅ Real-time tracking simulation
✅ Contact form handling
✅ Smooth animations
✅ Mobile navigation
✅ Modern UI/UX

Built with modern web technologies for optimal performance.
`);