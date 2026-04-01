const body = document.body;
const nav = document.querySelector('.site-nav');
const navLinks = [...document.querySelectorAll('.nav-link')];
const revealItems = [...document.querySelectorAll('[data-reveal]')];
const currentYear = document.getElementById('current-year');
const mobileMenu = document.querySelector('.navbar-collapse');
const bsCollapse = mobileMenu ? bootstrap.Collapse.getOrCreateInstance(mobileMenu, { toggle: false }) : null;
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const formTime = document.getElementById('form-time');
const submitButton = contactForm?.querySelector('button[type="submit"]');
const emailConfig = window.EMAILJS_CONFIG || {};

body.classList.add('reveal-ready');

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

const setNavState = () => {
    if (!nav) {
        return;
    }

    nav.classList.toggle('is-scrolled', window.scrollY > 18);
};

setNavState();
window.addEventListener('scroll', setNavState, { passive: true });

const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

const setActiveLink = () => {
    const offset = window.scrollY + 160;
    let currentId = sections[0]?.id;

    sections.forEach((section) => {
        if (offset >= section.offsetTop) {
            currentId = section.id;
        }
    });

    navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${currentId}`;
        link.classList.toggle('is-active', isActive);
    });
};

setActiveLink();
window.addEventListener('scroll', setActiveLink, { passive: true });

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 992 && bsCollapse) {
            bsCollapse.hide();
        }
    });
});

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.18 });

    revealItems.forEach((item) => revealObserver.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
}

const hasEmailConfig = ['publicKey', 'serviceId', 'templateId'].every((key) => {
    const value = emailConfig[key];
    return typeof value === 'string' && value.trim() !== '' && !value.startsWith('YOUR_');
});

const setFormStatus = (message, isError = false) => {
    if (!formStatus) {
        return;
    }

    formStatus.textContent = message;
    formStatus.classList.toggle('is-error', isError);
    formStatus.classList.toggle('is-success', !isError && Boolean(message));
};

if (formTime) {
    formTime.value = new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
    });
}

if (contactForm) {
    if (hasEmailConfig && typeof emailjs !== 'undefined') {
        emailjs.init({
            publicKey: emailConfig.publicKey,
        });
    }

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (!contactForm.reportValidity()) {
            return;
        }

        if (!hasEmailConfig || typeof emailjs === 'undefined') {
            setFormStatus('Add your EmailJS public key, service ID, and template ID in js/emailjs-config.js first.', true);
            return;
        }

        if (formTime) {
            formTime.value = new Date().toLocaleString('en-US', {
                dateStyle: 'medium',
                timeStyle: 'short',
            });
        }

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
        }

        setFormStatus('');

        try {
            await emailjs.sendForm(emailConfig.serviceId, emailConfig.templateId, contactForm);
            contactForm.reset();

            if (formTime) {
                formTime.value = new Date().toLocaleString('en-US', {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                });
            }

            setFormStatus('Message sent successfully. I will get back to you soon.');
        } catch (error) {
            console.error('EmailJS error:', error);
            const errorParts = [
                error?.text,
                error?.message,
                error?.status ? `Status ${error.status}` : '',
            ].filter(Boolean);
            const errorDetail = errorParts.join(' - ');
            setFormStatus(
                errorDetail
                    ? `Message failed to send. ${errorDetail}`
                    : 'Message failed to send. Check your EmailJS template or service settings.',
                true
            );
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            }
        }
    });
}
