// Simple language switcher script
document.addEventListener('DOMContentLoaded', function() {
  const langToggle = document.getElementById('langToggle');
  
  if (langToggle) {
    langToggle.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get current language from URL or default to English
      const urlParams = new URLSearchParams(window.location.search);
      const currentLang = urlParams.get('lang') || 'en';
      
      // Toggle language
      const newLang = currentLang === 'en' ? 'es' : 'en';
      
      // Update URL and reload page
      window.location.href = `${window.location.pathname}?lang=${newLang}`;
    });
  }
});
