let slideIndex = 1;
showSlides(slideIndex);

// Next/Previous Controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail Navigation
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    slides.forEach(slide => {
        slide.style.display = "none";

        // Pause all videos when switching slides
        let video = slide.querySelector("video");
        if (video) {
            video.pause();
            video.currentTime = 0; // Reset to beginning
        }
    });

    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    let currentSlide = slides[slideIndex - 1];
    let img = currentSlide.querySelector("img");
    let caption = currentSlide.querySelector(".caption-text");

    if (img && caption) {
        caption.textContent = img.alt;
    }
}

let slideIndex360 = 1;
showSlides360(slideIndex360);

// Next/Previous Controls
function plusSlides360(n) {
    showSlides360(slideIndex360 += n);
}

// Thumbnail Navigation
function currentSlide360(n) {
    showSlides360(slideIndex360 = n);
}

function showSlides360(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides-360");
    let dots = document.querySelectorAll(".dot-360");

    if (n > slides.length) { slideIndex360 = 1; }
    if (n < 1) { slideIndex360 = slides.length; }

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex360 - 1].style.display = "block";
    dots[slideIndex360 - 1].classList.add("active");
}


let slideIndexSecurity = 1;
showSlidesSecurity(slideIndexSecurity);

// Next/Previous Controls
function plusSlidesSecurity(n) {
    showSlidesSecurity(slideIndexSecurity += n);
}

// Thumbnail Navigation
function currentSlideSecurity(n) {
    showSlidesSecurity(slideIndexSecurity = n);
}

function showSlidesSecurity(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides-security");
    let dots = document.querySelectorAll(".dot-security");

    if (n > slides.length) { slideIndexSecurity = 1; }
    if (n < 1) { slideIndexSecurity = slides.length; }

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndexSecurity - 1].style.display = "block";
    dots[slideIndexSecurity - 1].classList.add("active");
}


let slideIndexLifeguard = 1;
showSlidesLifeguard(slideIndexLifeguard);

// Next/Previous Controls
function plusSlidesLifeguard(n) {
    showSlidesLifeguard(slideIndexLifeguard += n);
}

// Thumbnail Navigation
function currentSlideLifeguard(n) {
    showSlidesLifeguard(slideIndexLifeguard = n);
}

function showSlidesLifeguard(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides-lifeguard");
    let dots = document.querySelectorAll(".dot-lifeguard");

    if (n > slides.length) { slideIndexLifeguard = 1; }
    if (n < 1) { slideIndexLifeguard = slides.length; }

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndexLifeguard - 1].style.display = "block";
    dots[slideIndexLifeguard - 1].classList.add("active");
}

let slideIndexTheme = 1;
showSlidesTheme(slideIndexTheme);

// Next/Previous Controls
function plusSlidesTheme(n) {
    showSlidesTheme(slideIndexTheme += n);
}

// Thumbnail Navigation
function currentSlideTheme(n) {
    showSlidesTheme(slideIndexTheme = n);
}

function showSlidesTheme(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides-theme");
    let dots = document.querySelectorAll(".dot-theme");

    if (n > slides.length) { slideIndexTheme = 1; }
    if (n < 1) { slideIndexTheme = slides.length; }

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndexTheme - 1].style.display = "block";
    dots[slideIndexTheme - 1].classList.add("active");
}


let slideIndexVr = 1;
showSlidesVr(slideIndexVr);

// Next/Previous Controls
function plusSlidesVr(n) {
    showSlidesVr(slideIndexVr += n);
}

// Thumbnail Navigation
function currentSlideVr(n) {
    showSlidesVr(slideIndexVr = n);
}

function showSlidesVr(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides-vr");
    let dots = document.querySelectorAll(".dot-vr");

    if (n > slides.length) { slideIndexVr = 1; }
    if (n < 1) { slideIndexVr = slides.length; }

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active-vr"));

    slides[slideIndexVr - 1].style.display = "block";
    dots[slideIndexVr - 1].classList.add("active-vr");
}



let slideIndexAbout = 1;
showSlidesAbout(slideIndexAbout);

// Next/Previous Controls
function plusSlidesAbout(n) {
    showSlidesAbout(slideIndexAbout += n);
}

// Thumbnail Controls
function currentSlideAbout(n) {
    showSlidesAbout(slideIndexAbout = n);
}

function showSlidesAbout(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides-about");
    let dots = document.querySelectorAll(".dot-about");

    if (n > slides.length) { slideIndexAbout = 1; }
    if (n < 1) { slideIndexAbout = slides.length; }

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndexAbout - 1].style.display = "block";
    dots[slideIndexAbout - 1].classList.add("active");
}


