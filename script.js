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

// function addRequiredAsterisks() {
//   const requiredFields = document.querySelectorAll('[required]');
//   requiredFields.forEach(field => {
//       const label = document.querySelector(`label[for="${field.id}"]`);
//       if (label) {
//           const asterisk = document.createElement('span');
//           asterisk.className = 'required';
//           asterisk.textContent = ' *';
//           label.appendChild(asterisk);
//       }
//   });
// }

// addRequiredAsterisks();

function changeFontSize(value) {
  const elementsWithFontSize = document.querySelectorAll('body, p, h1, h2, h3, h4, h5, h6, a');

  elementsWithFontSize.forEach(element => {
    const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
    const newSize = (parseFloat(currentSize) + parseFloat(value)) + 'px';
    element.style.fontSize = newSize;
  });
}


const fontSizeSelector = document.getElementById('font-size');


fontSizeSelector.addEventListener('change', function () {
  const selectedValue = fontSizeSelector.value;
  changeFontSize(selectedValue);
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))