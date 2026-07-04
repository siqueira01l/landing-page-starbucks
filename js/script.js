
const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links');
const icon = document.querySelector('.btn-mobile i');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    icon.classList.toggle('fa-times');
    icon.classList.toggle('fa-bars');
});


document.querySelectorAll('#nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.length > 1) {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});


const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px'
    }
);

revealElements.forEach((el) => revealObserver.observe(el));
