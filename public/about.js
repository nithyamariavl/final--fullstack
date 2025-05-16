document.addEventListener('DOMContentLoaded', () => {
  // Fade-in Effect on Scroll
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > aboutSection.offsetTop - window.innerHeight + 100) {
      aboutSection.classList.add('fade-in');
    }
  });

  // Add fade-in animation to About Me section
  const aboutsection = document.querySelector('.about-me');
  aboutSection.style.opacity = 0;
  aboutSection.style.transition = 'opacity 1.5s ease';

  // Scroll effect for "Get in Touch" button
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('click', () => {
    window.location.href = '#contact';
  });
});
