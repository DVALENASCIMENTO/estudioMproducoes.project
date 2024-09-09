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
  
  const serviceDescriptions = {
    "Gravação de Áudio": "Serviço dedicado ao registro de sons e performances musicais. Utilizamos equipamentos de alta qualidade e técnicas avançadas para capturar a melhor qualidade sonora. Ideal para artistas que precisam de gravações profissionais para suas músicas ou álbuns.",
    "Produção Musical": "Oferecemos serviços completos de produção musical, que incluem a criação de arranjos, composição de novas músicas e supervisão do processo criativo. Trabalhamos para transformar suas ideias em produções sonoras acabadas e refinadas.",
    "Mixagem e Masterização": "Após a gravação, a mixagem e a masterização são essenciais para garantir que cada faixa soará equilibrada e profissional. A mixagem envolve ajustar níveis e adicionar efeitos, enquanto a masterização é o processo final de polimento e preparação do áudio para distribuição.",
    "Composição Musical": "Criamos composições originais adaptadas às suas necessidades, seja para músicas, jingles ou trilhas sonoras. Trabalhamos em parceria com você para desenvolver melodias e letras que atendam às suas expectativas e objetivos.",
    "Design de Som": "O design de som envolve a criação e manipulação de efeitos sonoros personalizados para filmes, jogos ou produções audiovisuais. Este serviço é ideal para quem busca um som único e envolvente que complementa a narrativa e o ambiente do projeto.",
    "Edição de Podcast": "Auxiliamos na edição e polimento de podcasts, removendo erros, ajustando a qualidade do áudio e adicionando elementos como trilhas sonoras e efeitos. Garantimos que o seu podcast tenha uma apresentação profissional e fluída.",
    "Consultoria em Áudio": "Oferecemos orientação e aconselhamento especializados para projetos de áudio. Seja para melhorar a qualidade do som, configurar estúdios ou escolher equipamentos, nossa consultoria ajuda você a tomar decisões informadas e eficientes para o seu projeto."
  };
  
  document.querySelectorAll('.popup-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const service = btn.getAttribute('data-service');
      popupText.textContent = serviceDescriptions[service] || `Detalhes sobre o serviço de ${service}`;
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
