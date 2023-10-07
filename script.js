function showSection(section) {
    // Oculta todas las imágenes
    document.querySelectorAll('.gallery-image').forEach(function(image) {
      image.style.display = 'none';
    });
  
    // Muestra las imágenes de la sección seleccionada
    document.querySelectorAll('.gallery-image.' + section).forEach(function(image) {
      image.style.display = 'block';
    });
  
    // Resalta la categoría activa
    document.querySelectorAll('.category-item-bottom').forEach(function(category) {
      category.classList.remove('active');
    });
    document.querySelector('.category-item-bottom.' + section).classList.add('active');
  }
  