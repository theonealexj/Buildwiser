import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    const checkReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const elementVisible = 100;
      
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', checkReveal);
    
    // Slight delay to ensure DOM is fully painted
    const timeoutId = setTimeout(checkReveal, 100);
    
    const observer = new MutationObserver(checkReveal);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', checkReveal);
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);
};

export default useScrollReveal;
