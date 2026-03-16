// Smooth Scroll
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease';
    observer.observe(section);
});

// Skills Progress Animation
const skillsSection = document.querySelector('.skills');
let animated = false;

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    
    if (sectionPos < screenPos && !animated) {
        document.querySelectorAll('.progress').forEach(progress => {
            const width = progress.style.width;
            progress.style.width = '0';
            setTimeout(() => {
                progress.style.width = width;
            }, 100);
        });
        animated = true;
    }
});

// Typewriter Effect
const text = "Professional Flutter Developer";
const typewriter = document.querySelector('.typewriter');
let index = 0;

function type() {
    if (index < text.length) {
        typewriter.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

window.addEventListener('load', () => {
    typewriter.textContent = '';
    type();
});

// Contact Form
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    e.target.reset();
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a nav link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // Project Card Click Handlers - Make entire card clickable for gallery
    document.querySelectorAll('.project-card[data-gallery]').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on links (GitHub)
            if (e.target.closest('.project-link')) return;

            const galleryType = this.dataset.gallery;
            let event = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });

            switch(galleryType) {
                case 'ecommerce':
                    openEcommerceModal(event);
                    break;
                case 'idchecker':
                    openIdCheckerModal(event);
                    break;
                case 'bookstore':
                    openBookStoreModal(event);
                    break;
                case 'gym':
                case 'weather':
                    // No gallery for these yet - could open GitHub or placeholder
                    window.open(this.querySelector('.project-link')?.href || '#', '_blank');
                    break;
            }
        });
    });
});



// E-commerce Vertical Gallery Modal Functions
function openEcommerceModal(e) {
    e.preventDefault();
    e.stopPropagation();
    
    let modal = document.getElementById('ecommerceModal');
    if (!modal) {
        // Create modal dynamically if not exists
        modal = document.createElement('div');
        modal.id = 'ecommerceModal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title">E-commerce Product Gallery</h2>
                    <button class="modal-close" onclick="closeEcommerceModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="vertical-gallery">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM.jpeg" alt="Product 1" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (1).jpeg" alt="Product 2" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (2).jpeg" alt="Product 3" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (3).jpeg" alt="Product 4" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (4).jpeg" alt="Product 5" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (5).jpeg" alt="Product 6" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (6).jpeg" alt="Product 7" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (7).jpeg" alt="Product 8" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (8).jpeg" alt="Product 9" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (9).jpeg" alt="Product 10" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (10).jpeg" alt="Product 11" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (11).jpeg" alt="Product 12" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (12).jpeg" alt="Product 13" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (13).jpeg" alt="Product 14" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (14).jpeg" alt="Product 15" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (15).jpeg" alt="Product 16" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (16).jpeg" alt="Product 17" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (17).jpeg" alt="Product 18" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (18).jpeg" alt="Product 19" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (19).jpeg" alt="Product 20" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (20).jpeg" alt="Product 21" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (21).jpeg" alt="Product 22" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (22).jpeg" alt="Product 23" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (23).jpeg" alt="Product 24" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (24).jpeg" alt="Product 25" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (25).jpeg" alt="Product 26" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (26).jpeg" alt="Product 27" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (27).jpeg" alt="Product 28" class="gallery-image">
                    <img src="E-commerce/WhatsApp Image 2026-03-13 at 6.32.27 PM (28).jpeg" alt="Product 29" class="gallery-image">
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeEcommerceModal() {
    const modal = document.getElementById('ecommerceModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Close on outside click and ESC
document.addEventListener('click', function(e) {
    const modal = document.getElementById('ecommerceModal');
    if (e.target === modal) {
        closeEcommerceModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeEcommerceModal();
        closeIdCheckerModal();
    }
});


// ID Checker Vertical Gallery Modal Functions (same as E-commerce)
function openIdCheckerModal(e) {
    e.preventDefault();
    e.stopPropagation();
    
    let modal = document.getElementById('idCheckerModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'idCheckerModal';
        modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(10,14,39,0.95);backdrop-filter:blur(10px);z-index:1001;display:flex;align-items:center;justify-content:center;padding:20px;box-sizing:border-box;overflow:auto;';
        modal.innerHTML = `
            <div style="background:rgba(20,25,60,0.95);border-radius:20px;padding:30px;max-width:900px;max-height:90vh;margin:auto;border:2px solid rgba(0,212,255,0.3);box-shadow:0 30px 80px rgba(0,212,255,0.2);width:100%;max-width:500px;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:25px;">
                    <h2 style="font-size:28px;color:#00d4ff;margin:0;">ID Checker Gallery</h2>
                    <button onclick="closeIdCheckerModal()" style="background:none;border:none;font-size:28px;color:white;cursor:pointer;padding:10px;border-radius:50%;transition:all 0.3s;width:50px;height:50px;display:flex;align-items:center;justify-content:center;"><i class="fas fa-times"></i></button>
                </div>
                <div class="vertical-gallery">
                    <img src="Id-checker/WhatsApp Image 2026-03-13 at 8.28.31 PM.jpeg" alt="ID 1" class="gallery-image">
                    <img src="Id-checker/WhatsApp Image 2026-03-13 at 8.28.31 PM (1).jpeg" alt="ID 1" class="gallery-image">
                    
                    <img src="Id-checker/WhatsApp Image 2026-03-13 at 8.28.32 PM (1).jpeg" alt="ID 3" class="gallery-image">
                    <img src="Id-checker/WhatsApp Image 2026-03-13 at 8.28.32 PM (2).jpeg" alt="ID 4" class="gallery-image">
                    <img src="Id-checker/WhatsApp Image 2026-03-13 at 8.28.32 PM (3).jpeg" alt="ID 5" class="gallery-image">
                    <img src="Id-checker/WhatsApp Image 2026-03-13 at 8.28.32 PM (4).jpeg" alt="ID 6" class="gallery-image">
                    <img src="Id-checker/WhatsApp Image 2026-03-13 at 8.28.32 PM (5).jpeg" alt="ID 7" class="gallery-image">
                    <img src="Id-checker/WhatsApp Image 2026-03-13 at 8.28.32 PM.jpeg" alt="ID 8" class="gallery-image">
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function closeIdCheckerModal() {
    const modal = document.getElementById('idCheckerModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Books Store Vertical Gallery Modal Functions (exact E-commerce clone)
function openBookStoreModal(e) {
    e.preventDefault();
    e.stopPropagation();
    
    let modal = document.getElementById('bookStoreModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'bookStoreModal';
        modal.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(10,14,39,0.95);backdrop-filter:blur(10px);z-index:1001;display:flex;align-items:center;justify-content:center;padding:20px;box-sizing:border-box;overflow:auto;';
        modal.innerHTML = `
            <div style="background:rgba(20,25,60,0.95);border-radius:20px;padding:30px;max-width:90%;max-height:90vh;margin:auto;border:2px solid rgba(0,212,255,0.3);box-shadow:0 30px 80px rgba(0,212,255,0.2);width:100%;max-width:500px;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:25px;">
                    <h2 style="font-size:28px;color:#00d4ff;margin:0;">Books Store Gallery</h2>
                    <button onclick="closeBookStoreModal()" style="background:none;border:none;font-size:28px;color:white;cursor:pointer;padding:10px;border-radius:50%;transition:all 0.3s;width:50px;height:50px;display:flex;align-items:center;justify-content:center;"><i class="fas fa-times"></i></button>
                </div>
                <div class="vertical-gallery">
                    <video src="Books Store/WhatsApp Video 2026-03-15 at 11.44.30 PM.mp4" muted loop controls class="gallery-image" playsinline webkit-playsinline></video>
                    <img src="Books Store/WhatsApp Image 2026-03-15 at 11.44.30 PM (1).jpeg" alt="Screen 1" class="gallery-image">
                    <img src="Books Store/WhatsApp Image 2026-03-15 at 11.44.30 PM.jpeg" alt="Screen 2" class="gallery-image">
                    <video src="Books Store/WhatsApp Video 2026-03-15 at 11.44.31 PM.mp4" muted loop controls class="gallery-image" playsinline webkit-playsinline></video>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeBookStoreModal() {
    const modal = document.getElementById('bookStoreModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Close on outside click and ESC (add bookStoreModal)
document.addEventListener('click', function(e) {
    const ecommerceModal = document.getElementById('ecommerceModal');
    const idModal = document.getElementById('idCheckerModal');
    const bookStoreModal = document.getElementById('bookStoreModal');
    if (e.target === ecommerceModal) closeEcommerceModal();
    if (e.target === idModal) closeIdCheckerModal();
    if (e.target === bookStoreModal) closeBookStoreModal();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeEcommerceModal();
        closeIdCheckerModal();
        closeBookStoreModal();
    }
});

// Close ID Checker on outside click
document.addEventListener('click', function(e) {
    const idModal = document.getElementById('idCheckerModal');
    if (e.target === idModal) closeIdCheckerModal();
});

// Toggle Books Store Gallery Inline
function toggleBookStoreGallery(e) {
    e.preventDefault();
    const gallery = document.getElementById('bookStoreGallery');
    if (gallery.style.display === 'none' || gallery.style.display === '') {
        gallery.style.display = 'block';
        gallery.scrollIntoView({ behavior: 'smooth' });
    } else {
        gallery.style.display = 'none';
    }
}

