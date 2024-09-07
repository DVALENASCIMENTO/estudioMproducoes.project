document.addEventListener('DOMContentLoaded', () => {
    // Menu hamburguer toggle
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');
    
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  
    // Scroll animation for "Saiba Mais" button
    const moreInfoBtn = document.getElementById('more-info-btn');
    moreInfoBtn.addEventListener('click', () => {
      document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    });
  
    // Popup logic for services
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const closePopup = document.querySelector('.close');
    
    document.querySelectorAll('.popup-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const service = btn.getAttribute('data-service');
        popupText.textContent = `Detalhes sobre o serviço de ${service}`;
        popup.style.display = 'block';
      });
    });
  
    closePopup.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  
    // Form validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();
      
      if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
      alert('Mensagem enviada com sucesso!');
      contactForm.reset();
    });
  });
  