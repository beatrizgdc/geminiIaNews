const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', function() {
  const selectedLanguage = languageSelect.value;

  // Lógica para alterar o idioma da página
  // Por exemplo, usando AJAX para carregar conteúdo traduzido

  // Exemplo básico de alteração de texto:
  document.querySelector('h1').textContent = selectedLanguage === 'en' ? 'Welcome' : 'Bem-vindo';
});



