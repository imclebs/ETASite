let slideIndex = 1;
let startX;
let endX;









showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

// Auto-slide
let autoSlideIndex = 0;
autoShowSlides();

function autoShowSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    autoSlideIndex++;
    if (autoSlideIndex > slides.length) {autoSlideIndex = 1}    
    slides[autoSlideIndex-1].style.display = "block";  
    setTimeout(autoShowSlides, 8000); // Muda a imagem a cada 8 segundos
}

// Função para permitir arrastar slides
const container = document.getElementById("slideshow-container");

container.addEventListener("touchstart", function(e) {
    startX = e.touches[0].clientX;
});

container.addEventListener("touchmove", function(e) {
    endX = e.touches[0].clientX;
});

container.addEventListener("touchend", function(e) {
    if (startX > endX) {
        plusSlides(1);
    } else if (startX < endX) {
        plusSlides(-1);
    }
});


document.getElementById("menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-list").classList.toggle("active");
});