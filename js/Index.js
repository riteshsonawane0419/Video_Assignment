// Second Code Video Loading

const imagesCount = 749; // Total number of images
const scrollContent = document.querySelector(".slideshow"); // Target container

for (let i = 0; i < imagesCount; i++) {
  const img = document.createElement("img");

  // Format the image number dynamically (e.g., Intro_00001.png)
  const paddedNumber = String(i).padStart(5, "0");
  img.src = `./images/Intro_${paddedNumber}.png`;
  img.alt = `Image Intro_${paddedNumber}`;
  img.classList.add("slide");

  // Append the image to the container
  scrollContent.appendChild(img);
}

const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showNextSlide() {
  slides[currentIndex].classList.remove("active"); // Hide the current image
  currentIndex = (currentIndex + 1) % slides.length; // Move to the next image
  slides[currentIndex].classList.add("active"); // Instantly show the next image
}

// Initialize the slideshow
slides[currentIndex].classList.add("active"); // Show the first slide
setInterval(showNextSlide, 100); // Change image every 3 seconds
