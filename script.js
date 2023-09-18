// validação de formulário

// const emailInput = document.querySelector('input[name="email"]');
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// function validarEmail() {
//   if (!emailRegex.test(emailInput.value)) {
//     alert('Por favor, insira um endereço de e-mail válido.');
//     emailInput.focus();
//     return false;
//   }
//   return true;
// }

// const formulario = document.querySelector('form');
// formulario.addEventListener('submit', (e) => {
//   if (!validarEmail()) {
//     e.preventDefault();
//   }
// });

//barrinha enchendo

// Função para verificar se um elemento está no campo de visão
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Função para adicionar a classe 'ativo' à barra de progresso quando estiver visível
  function animarBarraDeProgresso() {
    const barrasDeProgresso = document.querySelectorAll('.tecnologias-list-item');
  
    barrasDeProgresso.forEach((barra) => {
      if (isElementInViewport(barra)) {
        barra.classList.add('ativo');
      }
    });
  }
  
  // Adicione um ouvinte de evento de rolagem para chamar a função quando a página rolar
  window.addEventListener('scroll', animarBarraDeProgresso);

  animarBarraDeProgresso();