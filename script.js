particlesJS("particles", {
  particles: {
    number: {
      value: 52,
      density: {
        enable: true,
        value_area: 2000
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.2,
      random: true
    },
    size: {
      value: 4,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 250,
      color: "#ffffff",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      onClick: {
        enable: false
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 300,
        line_linked: {
          opacity: 0.4
        }
      }
    }
  },
  retina_detect: true
});

let current = 0;
const slider = document.getElementById('content-slider');
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slider-content');

// Função para atualizar o slide
function updateSlider(index) {
  const previousSlide = slides[current];
  const nextSlide = slides[index];

  // Adiciona a classe de transição para o slide anterior
  previousSlide.classList.remove('active');
  previousSlide.classList.add(index > current ? 'previous' : 'next');
  
  // Remove a classe de transição do próximo slide
  nextSlide.classList.add('active');
  nextSlide.classList.remove('next', 'previous');
  
  // Atualiza o índice atual
  current = index;

  // Atualiza os dots
  dots.forEach(dot => dot.classList.remove('active'));
  dots[current].classList.add('active');
}

// Função para mover para o próximo slide
function nextSlide() {
  const next = (current + 1) % slides.length;
  updateSlider(next);
}

// Função para mover para o slide anterior
function prevSlide() {
  const prev = (current - 1 + slides.length) % slides.length;
  updateSlider(prev);
}

// Detecção de swipe
let startX = 0;

slider.addEventListener("mousedown", (e) => startX = e.clientX);
slider.addEventListener("mouseup", (e) => {
  let diff = e.clientX - startX;
  if (diff < -50 && current < slides.length - 1) nextSlide();
  else if (diff > 50 && current > 0) prevSlide();
});

slider.addEventListener("touchstart", (e) => startX = e.touches[0].clientX);
slider.addEventListener("touchend", (e) => {
  let diff = e.changedTouches[0].clientX - startX;
  if (diff < -50 && current < slides.length - 1) nextSlide();
  else if (diff > 50 && current > 0) prevSlide();
});

// Clique nos dots para mudar de slide
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => updateSlider(index));
});

// Atualiza o slide inicial
updateSlider(current);