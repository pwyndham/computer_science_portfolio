function openLightbox(element) {
        const img = element.querySelector('img');
        const caption = element.querySelector('.screenshot-caption');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = caption.textContent;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox(event) {
        // Only close if clicking the background or close button, not the image
        if (event.target.id === 'lightbox' || 
            event.target.classList.contains('lightbox-close') ||
            event.target.closest('.lightbox-close')) {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
            event.stopPropagation();
        }
    }

    function toggleCode() {
    const codeBody = document.getElementById('code-body');
    const toggleBtn = document.querySelector('.code-toggle');
    
    if (codeBody.classList.contains('expanded')) {
        codeBody.classList.remove('expanded');
        toggleBtn.textContent = 'Show Code';
    } else {
        codeBody.classList.add('expanded');
        toggleBtn.textContent = 'Hide Code';
    }
}

    // Close lightbox with ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const lightbox = document.getElementById('lightbox');
            if (lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

    // Prevent closing when clicking on the image
    document.getElementById('lightbox-img').addEventListener('click', function(event) {
        event.stopPropagation();
    });