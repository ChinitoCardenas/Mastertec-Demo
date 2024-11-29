document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('header');
    const fixedClass = "header-fixed"; // Clase que se aplicará cuando el header esté fijo

    // Evento para rastrear el desplazamiento
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            // Si el usuario se desplaza hacia abajo, fija el header
            header.classList.add(fixedClass);
        } else {
            // Si el usuario vuelve al principio, elimina la clase fija
            header.classList.remove(fixedClass);
        }
    });




    // --- Lógica para categoría ---
    const categoryGrid = document.querySelector('.category-grid');
    const items = document.querySelectorAll(".category-item");

    // Agregar o remover la clase de highlight
    const toggleHighlight = (item, highlight) => {
        if (highlight) {
            item.classList.add("highlight");
        } else {
            item.classList.remove("highlight");
        }
    };

    // Manejo de eventos hover (mouseover y mouseout)
    categoryGrid.addEventListener('mouseover', event => {
        const item = event.target.closest('.category-item');
        if (item) toggleHighlight(item, true);
    });

    categoryGrid.addEventListener('mouseout', event => {
        const item = event.target.closest('.category-item');
        if (item) toggleHighlight(item, false);
    });

    // Manejo de clic en un ítem
    categoryGrid.addEventListener('click', event => {
        const item = event.target.closest('.category-item');
        if (item) {
            const category = item.getAttribute('data-category');
            alert(`Explora más sobre: ${category}`);
        }
    });

    // --- Lógica para Swiper ---
    const swiper = new swiper('.fpGswiper', {
        loop: true, // Carrusel infinito
        slidesPerView: 1, // Mostrar un slide por vista
        spaceBetween: 20, // Espaciado entre slides
        navigation: {
            nextEl: '.fpGswiper-button-next', // Botón siguiente
            prevEl: '.fpGswiper-button-prev', // Botón anterior
        },
        pagination: {
            el: '.fpGswiper-pagination', // Paginación
            clickable: true, // Paginación interactiva
        },
        breakpoints: {
            768: {
                slidesPerView: 2, // 2 slides en tabletas
            },
            1024: {
                slidesPerView: 3, // 3 slides en pantallas grandes
            },
        },
    });

    // Manejo de clic en botones "Comprar ahora"
    const buyButtons = document.querySelectorAll('.fpGbtn-buy');
    buyButtons.forEach(button => {
        button.addEventListener('click', event => {
            const productCard = event.target.closest('.fpGproduct-card');
            const productName = productCard.querySelector('.fpGproduct-title').textContent;
            alert(`¡Has seleccionado: "${productName}"!`);
        });
    });
















    const branchCards = document.querySelectorAll('.clssCntc-card');

    // Manejo de eventos de clic en cada tarjeta
    branchCards.forEach(card => {
        card.addEventListener('click', () => {
            const branchName = card.querySelector('.clssCntc-branch-name').textContent;
            const address = card.querySelector('.clssCntc-address')?.textContent || "Dirección no disponible";
            const phone = card.querySelector('.clssCntc-phone')?.textContent || "Teléfono no disponible";
            const email = card.querySelector('.clssCntc-email')?.textContent || "Correo no disponible";

            alert(`
                Sucursal: ${branchName}
                Dirección: ${address}
                Teléfono: ${phone}
                Correo: ${email}
            `);
        });
    });

    // Animación dinámica en scroll (opcional)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.5, // Cuando el 50% de la tarjeta sea visible
    });

    branchCards.forEach(card => observer.observe(card));

});
