
  const slides = document.querySelector('.slides');
  const slide = document.querySelector('.slide');
  const slideWidth = slide.offsetWidth;
  const totalSlides = document.querySelectorAll('.slide').length;
  const visibleSlides = 4;

  let index = 0;

  document.querySelector('.next').addEventListener('click', () => {
    if (index < totalSlides - visibleSlides) {
      index++;
      slides.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  });

  document.querySelector('.prev').addEventListener('click', () => {
    if (index > 0) {
      index--;
      slides.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  });

  window.addEventListener('resize', () => {
    slides.style.transform = `translateX(-${index * slide.offsetWidth}px)`;
  });

