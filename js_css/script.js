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
