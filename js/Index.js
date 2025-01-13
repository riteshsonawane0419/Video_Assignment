const imagesCount = 749;
const scrollContent = document.querySelector(".slideshow");

scrollContent.style.transition =
  "width 0.5s ease, height 0.5s ease, transform 0.5s ease";
scrollContent.style.display = "flex";
scrollContent.style.overflow = "hidden";

const defaultWidth = "100vw";
const defaultHeight = "100vh";
scrollContent.style.width = defaultWidth;
scrollContent.style.height = defaultHeight;

for (let i = 0; i < imagesCount; i++) {
  const img = document.createElement("img");
  const paddedNumber = String(i).padStart(5, "0");
  img.src = `./images/Intro_${paddedNumber}.png`;
  img.alt = `Image_Intro_${paddedNumber}`;
  img.classList.add("slide");
  img.loading = "lazy";
  img.style.flexShrink = "1";
  img.style.objectFit = "cover";
  scrollContent.appendChild(img);
}

const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showNextSlide() {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");

  if (currentIndex >= imagesCount - 350) {
    const currentWidth = parseInt(getComputedStyle(scrollContent).width, 10);
    const currentHeight = parseInt(getComputedStyle(scrollContent).height, 10);

    const newWidth = Math.max(currentWidth - 2, 0);
    scrollContent.style.width = `${newWidth}px`;

    const newHeight = Math.max(currentHeight - 2, 0);
    scrollContent.style.height = `${newHeight}px`;

    const offsetX = (window.innerWidth - newWidth) / 2;
    const offsetY = (window.innerHeight - newHeight) / 2;

    scrollContent.style.position = "absolute";
    scrollContent.style.left = `${offsetX}px`;
    scrollContent.style.top = `${offsetY}px`;

    if (currentIndex === imagesCount) {
      clearInterval(intervalId);
    }
  }

  if (currentIndex === imagesCount - 1) {
    setTimeout(() => {
      scrollContent.style.width = defaultWidth;
      scrollContent.style.height = defaultHeight;
      scrollContent.style.position = "static";
    }, 500);
  }
}

slides[currentIndex].classList.add("active");
const intervalId = setInterval(showNextSlide, 50);
