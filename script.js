function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateTechBars() {
  const techItems = document.querySelectorAll('.tecnologias-list-item');

  techItems.forEach((item) => {
      if (isElementInViewport(item)) {
          const barra = item.querySelector('.barra');
          const level = item.querySelector('.level');

          barra.style.width = level.style.width;

          barra.classList.add('animate-barra');
      }
  });
}

window.addEventListener('scroll', animateTechBars);

animateTechBars();


function addRequiredAsterisks() {
  const requiredFields = document.querySelectorAll('[required]');
  requiredFields.forEach(field => {
      const label = document.querySelector(`label[for="${field.id}"]`);
      if (label) {
          const asterisk = document.createElement('span');
          asterisk.className = 'required';
          asterisk.textContent = ' *';
          label.appendChild(asterisk);
      }
  });
}

addRequiredAsterisks();

function aplicarCor() {
  const selectedColor = document.getElementById("colorPicker").value;
  const barra = document.querySelector('.profile');
  
  barra.style.backgroundColor = selectedColor;
}

document.getElementById('applyColor').addEventListener('click', aplicarCor);

function corPadrao() {
  const barra = document.querySelector('.profile');
  
  barra.style.backgroundColor = "#39383a";
}

document.getElementById('padrao').addEventListener('click', corPadrao);

// Função para aumentar ou diminuir o tamanho das fontes
function changeFontSize(value) {
  const elementsWithFontSize = document.querySelectorAll('body, p, h1, h2, h3, h4, h5, h6, a');

  elementsWithFontSize.forEach(element => {
    const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
    const newSize = (parseFloat(currentSize) + parseFloat(value)) + 'px';
    element.style.fontSize = newSize;
  });
}

// Seletor para o dropdown
const fontSizeSelector = document.getElementById('font-size');

// Event listener para detectar a mudança na seleção
fontSizeSelector.addEventListener('change', function () {
  const selectedValue = fontSizeSelector.value;
  changeFontSize(selectedValue);
});