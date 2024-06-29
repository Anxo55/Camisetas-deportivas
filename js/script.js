function nextImage(element) {
    const carousel = element.closest('.carousel');
    const images = carousel.querySelectorAll('img');
    let activeIndex = 0;

    images.forEach((img, index) => {
        if (img.classList.contains('active')) {
            img.classList.remove('active');
            activeIndex = index;
        }
    });

    const nextIndex = (activeIndex + 1) % images.length;
    images[nextIndex].classList.add('active');
}

function prevImage(element) {
    const carousel = element.closest('.carousel');
    const images = carousel.querySelectorAll('img');
    let activeIndex = 0;

    images.forEach((img, index) => {
        if (img.classList.contains('active')) {
            img.classList.remove('active');
            activeIndex = index;
        }
    });

    const prevIndex = (activeIndex - 1 + images.length) % images.length;
    images[prevIndex].classList.add('active');
}