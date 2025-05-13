// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});

// Typing animation
const typedText = document.getElementById('typed-text');
const professions = ['Fullstack Web Developer', 'Tech Enthusiast'];
let currentProfession = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const currentText = professions[currentProfession];

  if (isDeleting) {
    typedText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typedText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typingSpeed = 1000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentProfession = (currentProfession + 1) % professions.length;
    typingSpeed = 500;
  }

  setTimeout(type, typingSpeed);
}

// Start typing animation
setTimeout(type, 1000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth',
    });

    // Close mobile menu if open
    mobileMenu.classList.add('hidden');
  });
});

// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();
