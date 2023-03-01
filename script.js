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
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
}

function initMap() {
  // Koordinaten des Hotels
  const hotelLocation = { lat: 51.435328, lng: 6.761103 };

  // Karte erstellen
  const map = new google.maps.Map(document.getElementById("map"), {
    center: hotelLocation,
    zoom: 15,
  });

  // Marker hinzufügen
  const marker = new google.maps.Marker({
    position: hotelLocation,
    map: map,
    title: "Unser Hotel in Duisburg",
  });
}
