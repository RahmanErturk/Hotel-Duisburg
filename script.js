const headerText = document.querySelector(".header-text");

window.addEventListener("load", () => {
  headerText.classList.add("show");
});

function scrollToSection(id) {
  const section = document.querySelector(id);
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

function onClickForScroll(selected, id) {
  const button = document.querySelector(selected);
  button.onclick = () => {
    scrollToSection(id);
  };
}

onClickForScroll(".to-contact", "#contact");
onClickForScroll(".to-services", "#services");

/* Slideshow Section */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
