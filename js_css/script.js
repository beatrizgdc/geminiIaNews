document.addEventListener('DOMContentLoaded', function () {
  // Obter o caminho da URL atual
  const currentPath = window.location.pathname.split('/').pop();
  
  // Selecionar todos os links no menu de navegação
  const links = document.querySelectorAll('nav ul li a');

  // Iterar sobre os links e adicionar a classe 'active' ao <li> correspondente
  links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath) {
          link.parentElement.classList.add('active');
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const closeMenuButton = document.querySelector('.close-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

  function openMenu() {
      mobileMenu.classList.add('active');
      mobileMenuOverlay.style.display = 'block';
  }

  function closeMenu() {
      mobileMenu.classList.remove('active');
      mobileMenuOverlay.style.display = 'none';
  }

  menuToggle.addEventListener('click', openMenu);
  closeMenuButton.addEventListener('click', closeMenu);
  mobileMenuOverlay.addEventListener('click', closeMenu);
});
