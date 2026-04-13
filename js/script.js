document.addEventListener('DOMContentLoaded', function() {

    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');

        // 🔥 Si empieza activo, darle su altura real
        if (item.classList.contains('active')) {
            content.style.height = content.scrollHeight + "px";
        }

        header.addEventListener('click', function() {

            const isActive = item.classList.contains('active');

            // Cerrar todos
            accordionItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.accordion-content').style.height = 0;
            });

            // Si no estaba activo, abrirlo
            if (!isActive) {
                item.classList.add('active');
                content.style.height = content.scrollHeight + "px";
            }

        });
    });
      
});