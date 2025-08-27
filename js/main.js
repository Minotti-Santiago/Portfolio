document.addEventListener('DOMContentLoaded', function() {
    // Función para verificar si un elemento es visible en la ventana
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Función para manejar la animación de las barras
    function handleScroll() {
        const bars = document.querySelectorAll('.knowledge-bar');
        
        bars.forEach(bar => {
            if (isElementInViewport(bar) && !bar.classList.contains('animate')) {
                bar.classList.add('animate');
            }
        });
    }

    // Ejecutar al cargar la página
    handleScroll();
    
    // Ejecutar al hacer scroll
    window.addEventListener('scroll', handleScroll);
});