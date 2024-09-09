document.addEventListener('DOMContentLoaded', () => {
  // Menu hamburguer toggle
  const hamburger = document.getElementById('hamburger');
  const menu = document.querySelector('.menu');
  
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    playBackgroundMusic(); // Iniciar música ao clicar no menu
  });

  // Scroll animation for "Saiba Mais" button
  const moreInfoBtn = document.getElementById('more-info-btn');
  moreInfoBtn.addEventListener('click', () => {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    playBackgroundMusic(); // Iniciar música ao clicar no botão "Saiba Mais"
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
      playBackgroundMusic(); // Iniciar música ao abrir o popup
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

  // Função para tocar música de fundo
  function playBackgroundMusic() {
    const backgroundMusic = document.getElementById('background-music');
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    }
  }
});
