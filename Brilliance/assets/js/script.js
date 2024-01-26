
const carousels = [
    document.getElementById("carousel"),
    document.getElementById("carousel1"),
    document.getElementById("carousel2"),
    document.getElementById("carousel3"),
  ];
  
  for (const carousel of carousels) {
    // Obtener la primera diapositiva del carrusel
    const slide = carousel.querySelector(".carousel-item");
  
    // Establecer la diapositiva como activa
    slide.classList.add("active");
  }
  

