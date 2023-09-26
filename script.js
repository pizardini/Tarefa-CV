var barsAnimated = false;

function isScrolledIntoView(element) {
  var rect = element.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;
  return (elemTop <= window.innerHeight) && (elemBottom >= 0);
}

function animateProgressBar(progressBar) {
  if (!progressBar.classList.contains("done")) {
      var progressBarWidth = 0;
      var targetWidth = progressBar.getAttribute("aria-valuenow");

      function frame() {
          if (progressBarWidth < targetWidth) {
              progressBarWidth++;
              progressBar.querySelector(".progress-bar").style.width = progressBarWidth + "%";
              requestAnimationFrame(frame);
          }
      }

      frame();

      setTimeout(function () {
          progressBar.classList.add("done");
      }, targetWidth * 10);
  }
}

$(document).ready(function () {
  var progressBars = document.querySelectorAll(".progress");

  progressBars.forEach(function (progressBar) {
      $(window).on("scroll", function () {
          if (isScrolledIntoView(progressBar)) {
              animateProgressBar(progressBar);
          }
      });
  });
});

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