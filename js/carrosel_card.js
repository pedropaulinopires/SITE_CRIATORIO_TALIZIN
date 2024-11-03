const carousel = document.querySelector('.cards_carrosel');
carousel.addEventListener('wheel', (event) => {
    event.preventDefault();
    carousel.scrollLeft += event.deltaY * 2;
  });

