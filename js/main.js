const root = document.documentElement;
const body = document.body;
const pageLoader = document.getElementById('page-loader');
const nav = document.querySelector('.site-nav');
const navLinks = [...document.querySelectorAll('.nav-link')];
const revealItems = [...document.querySelectorAll('[data-reveal]')];
const currentYear = document.getElementById('current-year');
const mobileMenu = document.querySelector('.navbar-collapse');
const bootstrapCollapse = window.bootstrap?.Collapse;
const bsCollapse = mobileMenu && bootstrapCollapse
    ? bootstrapCollapse.getOrCreateInstance(mobileMenu, { toggle: false })
    : null;
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const formTime = document.getElementById('form-time');
const submitButton = contactForm?.querySelector('button[type="submit"]');
const emailConfig = window.EMAILJS_CONFIG || {};
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.querySelector('[data-theme-label]');
const themeStorageKey = 'jasongamba-theme';
let loaderHidden = false;

const persistTheme = (theme) => {
    try {
        localStorage.setItem(themeStorageKey, theme);
    } catch (error) {
        console.warn('Unable to save theme preference.', error);
    }
};

const updateThemeToggle = (theme) => {
    if (!themeToggle) {
        return;
    }

    const nextTheme = theme === 'light' ? 'dark' : 'light';
    themeToggle.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
    themeToggle.setAttribute('aria-pressed', String(theme === 'light'));

    if (themeLabel) {
        themeLabel.textContent = theme === 'light' ? 'Light mode' : 'Dark mode';
    }
};

const applyTheme = (theme, shouldPersist = true) => {
    const normalizedTheme = theme === 'light' ? 'light' : 'dark';
    root.setAttribute('data-theme', normalizedTheme);
    root.style.colorScheme = normalizedTheme;
    updateThemeToggle(normalizedTheme);

    if (shouldPersist) {
        persistTheme(normalizedTheme);
    }
};

const hideLoader = () => {
    if (loaderHidden) {
        return;
    }

    loaderHidden = true;

    if (!pageLoader) {
        body.classList.remove('is-loading');
        return;
    }

    pageLoader.classList.add('is-hidden');
    body.classList.remove('is-loading');

    window.setTimeout(() => {
        pageLoader.setAttribute('hidden', '');
    }, 500);
};

body.classList.add('reveal-ready');
applyTheme(root.getAttribute('data-theme') || 'dark', false);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        applyTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
}

if (document.readyState === 'complete') {
    window.setTimeout(hideLoader, 220);
} else {
    window.addEventListener('DOMContentLoaded', () => {
        window.setTimeout(hideLoader, 320);
    }, { once: true });

    window.addEventListener('load', () => {
        window.setTimeout(hideLoader, 220);
    }, { once: true });
}

window.setTimeout(hideLoader, 2200);

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
            setFormStatus('Form is not ready yet. Please email me directly at jsngmb@gmail.com.', true);
            return;
        }

        if (navigator.onLine === false) {
            setFormStatus('You appear to be offline. Please reconnect or email me directly at jsngmb@gmail.com.', true);
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
                    ? `Message failed to send. ${errorDetail}. You can email me directly at jsngmb@gmail.com.`
                    : 'Message failed to send. Please try again or email me directly at jsngmb@gmail.com.',
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
