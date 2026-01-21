// Script principal para Click to Forever
// Funcionalidad de animaciones y mejoras de interactividad

document.addEventListener('DOMContentLoaded', function() {
  // Agregar clase de animación al cargar
  const main = document.querySelector('main');
  if (main) {
    main.classList.add('animate-slide-in');
  }

  // Mejorar accesibilidad de links
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    // Asegurar que los links externos abran en nueva pestaña
    if (link.getAttribute('target') === '_blank') {
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // Logging de eventos para debugging
  console.log('Click to Forever - Página cargada exitosamente');
});

// Función para rastrear clicks en botones de redes sociales
window.trackSocialClick = function(platform) {
  console.log(`Redirigiendo a ${platform}`);
};
