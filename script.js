// Container tracking data - This would typically come from a database/API
const containerDatabase = {
    'MSKU-123456': {
        id: 'MSKU-123456',
        type: '40ft Standard Container',
        origin: 'Shanghai, China',
        destination: 'Los Angeles, USA',
        customer: 'Global Trade Corp',
        weight: '28,500 kg',
        status: 'In Transit',
        estimatedArrival: '2024-10-15',
        tracking: [
            {
                date: '2024-09-20 14:30',
                location: 'Shanghai Port, China',
                status: 'Container loaded onto vessel',
                description: 'Container successfully loaded onto MV Ocean Explorer',
                completed: true
            },
            {
                date: '2024-09-21 08:00',
                location: 'Shanghai Port, China',
                status: 'Vessel departed',
                description: 'Vessel departed Shanghai Port on schedule',
                completed: true
            },
            {
                date: '2024-09-28 16:45',
                location: 'Busan Port, South Korea',
                status: 'Port call completed',
                description: 'Brief port call for fuel and supplies',
                completed: true
            },
            {
                date: '2024-10-12 09:15',
                location: 'Pacific Ocean',
                status: 'In transit',
                description: 'Vessel currently crossing Pacific Ocean',
                completed: false,
                current: true
            },
            {
                date: '2024-10-15 14:00',
                location: 'Los Angeles Port, USA',
                status: 'Expected arrival',
                description: 'Estimated container discharge',
                completed: false
            }
        ]
    },
    'TCLU-789012': {
        id: 'TCLU-789012',
        type: '20ft Refrigerated Container',
        origin: 'Rotterdam, Netherlands',
        destination: 'New York, USA',
        customer: 'Fresh Foods Inc',
        weight: '18,200 kg',
        temperature: '-18°C',
        status: 'Delivered',
        estimatedArrival: '2024-09-28',
        tracking: [
            {
                date: '2024-09-15 10:20',
                location: 'Rotterdam Port, Netherlands',
                status: 'Container loaded',
                description: 'Refrigerated container loaded with temperature monitoring active',
                completed: true
            },
            {
                date: '2024-09-16 06:30',
                location: 'Rotterdam Port, Netherlands',
                status: 'Vessel departed',
                description: 'MV Atlantic Crossing departed on schedule',
                completed: true
            },
            {
                date: '2024-09-27 11:45',
                location: 'New York Port, USA',
                status: 'Arrived at destination',
                description: 'Vessel arrived at New York Port',
                completed: true
            },
            {
                date: '2024-09-28 14:20',
                location: 'New York Port, USA',
                status: 'Container discharged',
                description: 'Container successfully discharged and ready for pickup',
                completed: true,
                current: true
            }
        ]
    },
    'HJMU-345678': {
        id: 'HJMU-345678',
        type: '45ft High Cube Container',
        origin: 'Hamburg, Germany',
        destination: 'Dubai, UAE',
        customer: 'Middle East Trading',
        weight: '32,100 kg',
        status: 'Delayed',
        estimatedArrival: '2024-10-18',
        originalArrival: '2024-10-14',
        tracking: [
            {
                date: '2024-09-25 13:15',
                location: 'Hamburg Port, Germany',
                status: 'Container loaded',
                description: 'Container loaded onto vessel',
                completed: true
            },
            {
                date: '2024-09-26 07:45',
                location: 'Hamburg Port, Germany',
                status: 'Vessel departed',
                description: 'MV Mediterranean Star departed Hamburg',
                completed: true
            },
            {
                date: '2024-10-02 15:30',
                location: 'Suez Canal, Egypt',
                status: 'Transit delayed',
                description: 'Vessel delayed due to heavy traffic in Suez Canal',
                completed: true
            },
            {
                date: '2024-10-14 08:00',
                location: 'Red Sea',
                status: 'In transit - delayed',
                description: 'Vessel currently in Red Sea, 4 days behind schedule',
                completed: false,
                current: true
            },
            {
                date: '2024-10-18 16:00',
                location: 'Dubai Port, UAE',
                status: 'Expected arrival',
                description: 'Revised estimated arrival (4 days delay)',
                completed: false
            }
        ]
    }
};

function trackContainer() {
    const input = document.getElementById('containerInput');
    const containerId = input.value.trim().toUpperCase();
    
    if (!containerId) {
        showError('Please enter a container ID');
        return;
    }
    
    // Show loading state
    showLoading();
    
    // Simulate API call delay
    setTimeout(() => {
        const containerData = containerDatabase[containerId];
        
        if (containerData) {
            displayTrackingResults(containerData);
        } else {
            showError(`Container ID "${containerId}" not found. Please check the ID and try again.`);
        }
        
        hideLoading();
    }, 1000);
}

function trackDemoContainer(containerId) {
    document.getElementById('containerInput').value = containerId;
    trackContainer();
}

function displayTrackingResults(data) {
    const resultsSection = document.getElementById('trackingResults');
    const containerInfo = document.getElementById('containerInfo');
    const timeline = document.getElementById('trackingTimeline');
    const statusCard = document.getElementById('currentStatus');
    
    // Show results section
    resultsSection.style.display = 'block';
    
    // Display container information
    containerInfo.innerHTML = `
        <div class="info-card">
            <h4>Container ID</h4>
            <p>${data.id}</p>
        </div>
        <div class="info-card">
            <h4>Type</h4>
            <p>${data.type}</p>
        </div>
        <div class="info-card">
            <h4>Origin</h4>
            <p>${data.origin}</p>
        </div>
        <div class="info-card">
            <h4>Destination</h4>
            <p>${data.destination}</p>
        </div>
        <div class="info-card">
            <h4>Customer</h4>
            <p>${data.customer}</p>
        </div>
        <div class="info-card">
            <h4>Weight</h4>
            <p>${data.weight}</p>
        </div>
        ${data.temperature ? `
        <div class="info-card">
            <h4>Temperature</h4>
            <p>${data.temperature}</p>
        </div>` : ''}
        <div class="info-card">
            <h4>Estimated Arrival</h4>
            <p>${formatDate(data.estimatedArrival)}</p>
            ${data.originalArrival && data.originalArrival !== data.estimatedArrival ? 
                `<small style="color: #e74c3c;">Originally: ${formatDate(data.originalArrival)}</small>` : ''}
        </div>
    `;
    
    // Display timeline
    timeline.innerHTML = data.tracking.map((item, index) => `
        <div class="timeline-item">
            <div class="timeline-marker ${item.completed ? 'completed' : ''} ${item.current ? 'current' : ''}">
                ${index + 1}
            </div>
            <div class="timeline-content">
                <div class="timeline-date">${formatDateTime(item.date)}</div>
                <div class="timeline-location">${item.location}</div>
                <div class="timeline-status">${item.status}</div>
                <div class="timeline-description">${item.description}</div>
            </div>
        </div>
    `).join('');
    
    // Display current status
    const statusClass = data.status.toLowerCase().replace(' ', '-');
    statusCard.className = `status-card ${statusClass}`;
    statusCard.innerHTML = `
        <div class="status-text">${data.status}</div>
        <div class="status-details">
            ${data.status === 'Delivered' ? 'Container has been successfully delivered' :
              data.status === 'Delayed' ? `Delayed by ${calculateDelay(data.originalArrival, data.estimatedArrival)} days` :
              'Container is currently in transit'}
        </div>
    `;
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function showError(message) {
    const resultsSection = document.getElementById('trackingResults');
    resultsSection.style.display = 'block';
    resultsSection.innerHTML = `
        <div class="error">
            <h3>Error</h3>
            <p>${message}</p>
        </div>
    `;
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function showLoading() {
    const button = document.querySelector('button');
    button.innerHTML = '<span class="loading"></span> Tracking...';
    button.disabled = true;
}

function hideLoading() {
    const button = document.querySelector('button');
    button.innerHTML = 'Track Container';
    button.disabled = false;
}

function formatDate(dateString) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function formatDateTime(dateString) {
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function calculateDelay(originalDate, newDate) {
    const original = new Date(originalDate);
    const revised = new Date(newDate);
    const diffTime = Math.abs(revised - original);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Allow Enter key to trigger search
document.getElementById('containerInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        trackContainer();
    }
});

// Auto-focus on input when page loads
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('containerInput').focus();
});

// Add some interactivity - simulate real-time updates
function simulateRealTimeUpdates() {
    // This would normally connect to a WebSocket or polling mechanism
    console.log('Real-time updates would be implemented here');
}

// Initialize real-time updates (placeholder)
simulateRealTimeUpdates();