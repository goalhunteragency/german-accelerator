// Funktion zum Hinzufügen der Hover-Effekte
function addHoverEffects() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(faqItem => {
    const button = faqItem.querySelector('.faq-item__button');
    const contentWrap = faqItem.querySelector('.faq-item__content-wrap');
    const numberClip = faqItem.querySelector('.faq-item__number-clip');
    const description = faqItem.querySelector('.faq-item__description');

    // Set initial height to 2.5rem and prepare transition for contentWrap
    contentWrap.style.height = '2.5rem';
    contentWrap.style.overflow = 'hidden';  // To hide content that exceeds the height
    contentWrap.style.transition = 'height 0.5s ease';

    // Set initial style for description
    description.style.transform = 'translateY(2rem)';
    description.style.opacity = '0';
    description.style.transition = 'transform 0.5s ease, opacity 0.5s ease';

    // Mouse Hover In
    faqItem.addEventListener('mouseover', () => {
      // Button rotation
      button.style.transition = 'transform 0.5s ease';
      button.style.transform = 'rotate(180deg)';

      // Calculate the height for smooth transition
      const fullHeight = contentWrap.scrollHeight + 'px'; // Get the full content height
      contentWrap.style.height = fullHeight;

      // Number clip move up
      numberClip.style.transition = 'transform 0.5s ease';
      numberClip.style.transform = 'translateY(-50%)';

      // Description move up and opacity smoother
      description.style.transform = 'translateY(0)';
      description.style.opacity = '1';
    });

    // Mouse Hover Out
    faqItem.addEventListener('mouseout', () => {
      // Reset Button rotation
      button.style.transform = 'rotate(0deg)';

      // Reset contentWrap height to 2.5rem
      contentWrap.style.height = '2.5rem';

      // Reset Number clip move
      numberClip.style.transform = 'translateY(0%)';

      // Reset Description move and opacity smoother
      description.style.transform = 'translateY(-1rem)';
      description.style.opacity = '0';
    });
  });
}

// Aufrufen der Funktion nach dem Laden der Seite
document.addEventListener('DOMContentLoaded', addHoverEffects);
