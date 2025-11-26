// Future JavaScript interactions
console.log('Portfolio loaded!');

// Example: Add intersection observer for animations
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.bento-card');
    
    // Add any interactive features here
});

// typing effect
const text = "Welcome to my Portfolio";
const titleElement = document.querySelector('.hero-title');
let index = 0;

function typeWriter() {
    if (index < text.length) {
        titleElement.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(typeWriter, 100);  // Adjust speed here
    }
}

// Start animation on page load
document.addEventListener('DOMContentLoaded', typeWriter);

// Randomized Floating Dots
function createFloatingDots() {
    const container = document.createElement('div');
    container.className = 'floating-dots-container';
    document.body.insertBefore(container, document.body.firstChild);
    
    const numberOfDots = 600;  // Adjust for more/fewer dots
    const dots = [];
    
    // Dot class
    class FloatingDot {
        constructor() {
            this.element = document.createElement('div');
            this.element.className = 'floating-dot';
            this.reset();
            container.appendChild(this.element);
        }
        
        reset() {
            // Random size (1-3px)
            this.size = Math.random() * 2 + 1;
            
            // Random position
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
            
            // Random velocity
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            
            // Random opacity
            this.opacity = Math.random() * 0.5 + 0.2;
            
            this.updateStyle();
        }
        
        updateStyle() {
            this.element.style.width = this.size + 'px';
            this.element.style.height = this.size + 'px';
            this.element.style.left = this.x + 'px';
            this.element.style.top = this.y + 'px';
            this.element.style.opacity = this.opacity;
        }
        
        update() {
            // Move the dot
            this.x += this.vx;
            this.y += this.vy;
            
            // Wrap around screen edges
            if (this.x < -10) this.x = window.innerWidth + 10;
            if (this.x > window.innerWidth + 10) this.x = -10;
            if (this.y < -10) this.y = window.innerHeight + 10;
            if (this.y > window.innerHeight + 10) this.y = -10;
            
            // Slight random drift
            this.vx += (Math.random() - 0.5) * 0.01;
            this.vy += (Math.random() - 0.5) * 0.01;
            
            // Limit velocity
            this.vx = Math.max(-1, Math.min(1, this.vx));
            this.vy = Math.max(-1, Math.min(1, this.vy));
            
            this.updateStyle();
        }
    }
    
    // Create dots
    for (let i = 0; i < numberOfDots; i++) {
        dots.push(new FloatingDot());
    }
    
    // Animation loop
    function animate() {
        dots.forEach(dot => dot.update());
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        dots.forEach(dot => {
            if (dot.x > window.innerWidth) dot.x = window.innerWidth;
            if (dot.y > window.innerHeight) dot.y = window.innerHeight;
        });
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', createFloatingDots);