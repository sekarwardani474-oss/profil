// Navigation scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinksArray = Array.from(navLinks);

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Certificate modal
const modal = document.getElementById('certificateModal');
const modalBody = document.getElementById('modalBody');

const certificateData = {
    dicoding: {
        title: 'Dicoding Certificate',
        issuer: 'Dicoding Indonesia',
        description: 'Platform pembelajaran coding terkemuka di Indonesia yang telah melatih lebih dari 500.000 developer.',
        details: [
            'Materi pembelajaran terstruktur dan berkualitas',
            'Project-based learning dengan studi kasus nyata',
            'Sertifikat yang diakui industri',
            'Akses ke komunitas developer Indonesia'
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Responsive Design'],
        color: '#00d9ff'
    },
    redhat: {
        title: 'Red Hat Certificate',
        issuer: 'Red Hat Inc.',
        description: 'Perusahaan software open source terbesar di dunia yang menyediakan solusi enterprise-grade.',
        details: [
            'Sertifikasi dari leader industri open source',
            'Validasi keahlian teknis tingkat enterprise',
            'Diakui secara global oleh perusahaan Fortune 500',
            'Standar industri untuk profesional IT'
        ],
        skills: ['Linux', 'Open Source', 'Enterprise Technology', 'System Administration'],
        color: '#ef4444'
    }
};

function showCertificateModal(type) {
    const cert = certificateData[type];
    modalBody.innerHTML = `
        <div class="certificate-modal-content">
            <div class="modal-header-icon" style="background: rgba(${type === 'dicoding' ? '0, 217, 255' : '239, 68, 68'}, 0.1);">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${cert.color}" stroke-width="2" style="width: 40px; height: 40px;">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            </div>
            <h2 style="font-size: 28px; font-weight: 700; margin: 16px 0 8px;">${cert.title}</h2>
            <p style="color: ${cert.color}; font-weight: 600; margin-bottom: 16px;">${cert.issuer}</p>
            <p style="color: #a0a0a0; line-height: 1.8; margin-bottom: 24px;">${cert.description}</p>
            
            <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 12px;">Highlights:</h3>
            <ul style="list-style: none; padding: 0; margin-bottom: 24px;">
                ${cert.details.map(detail => `
                    <li style="padding: 8px 0; color: #a0a0a0; display: flex; align-items: start; gap: 12px;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${cert.color}" stroke-width="2" style="width: 20px; height: 20px; flex-shrink: 0; margin-top: 2px;">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>${detail}</span>
                    </li>
                `).join('')}
            </ul>
            
            <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 12px;">Skills Covered:</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                ${cert.skills.map(skill => `
                    <span style="padding: 8px 16px; background: rgba(${type === 'dicoding' ? '0, 217, 255' : '239, 68, 68'}, 0.1); border: 1px solid ${cert.color}40; border-radius: 9999px; font-size: 14px; color: ${cert.color};">${skill}</span>
                `).join('')}
            </div>
        </div>
    `;
    modal.classList.add('show');
}

function closeCertificateModal() {
    modal.classList.remove('show');
}

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeCertificateModal();
    }
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Log form data (in real implementation, this would be sent to a server)
    console.log('Form submitted:', formData);
    
    // Show success toast
    showToast('Berhasil!', 'Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.');
    
    // Reset form
    contactForm.reset();
});

function showToast(title, message) {
    const toastTitle = document.querySelector('.toast-title');
    const toastMessage = document.querySelector('.toast-message');
    
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill cards and certificate cards
const animatedElements = document.querySelectorAll('.skill-card, .certificate-card');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});