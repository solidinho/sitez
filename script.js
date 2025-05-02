particlesJS("particles", {
  particles: {
    number: {
      value: 62,
      density: {
        enable: true,
        value_area: 1500
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
      speed: 1.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: false,
        mode: ""
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 300,
        line_linked: {
          opacity: 0.3
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

function updateSlider(index) {
  slides.forEach(slide => {
    slide.classList.remove('active', 'previous', 'next');
  });

  const previousSlide = slides[current];
  const nextSlide = slides[index];

  if (index > current) {
    previousSlide.classList.add('previous');
    nextSlide.classList.add('active');
  } else if (index < current) {
    previousSlide.classList.add('next');
    nextSlide.classList.add('active');
  }

  current = index;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[current].classList.add('active');
}

function nextSlide() {
  const next = (current + 1) % slides.length;
  updateSlider(next);
}

function prevSlide() {
  const prev = (current - 1 + slides.length) % slides.length;
  updateSlider(prev);
}

let startX = 0;

slider.addEventListener("mousedown", (e) => startX = e.clientX);
slider.addEventListener("mouseup", (e) => {
  let diff = e.clientX - startX;
  if (diff < -50) nextSlide();  
  else if (diff > 50) prevSlide();  
});

slider.addEventListener("touchstart", (e) => startX = e.touches[0].clientX);
slider.addEventListener("touchend", (e) => {
  let diff = e.changedTouches[0].clientX - startX;
  if (diff < -50) nextSlide();
  else if (diff > 50) prevSlide();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => updateSlider(index));
});

document.addEventListener('DOMContentLoaded', () => {
  slides[0].classList.add('active'); 
  dots[current].classList.add('active'); 
});

document.querySelectorAll('.card-3d').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;  // antes era /10 ou /5, agora mais suave
    const rotateY = (x - centerX) / 20;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.10)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });
});






