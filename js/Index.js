// debugger;
// const imagesCount = 749;
// const scrollContent = document.querySelector(".slideshow");
// scrollContent.style.transition = "width 0.5s ease, height 0.5s ease";
// for (let i = 0; i < imagesCount; i++) {
//   const img = document.createElement("img");
//   const paddedNumber = String(i).padStart(5, "0");
//   img.src = `./images/Intro_${paddedNumber}.png`;
//   img.alt = `Image_Intro_${paddedNumber}`;
//   img.classList.add("slide");
//   img.loading = "lazy";
//   scrollContent.appendChild(img);
// }
// const slides = document.querySelectorAll(".slide");
// let currentIndex = 0;
// function showNextSlide() {
//   slides[currentIndex].classList.remove("active");
//   currentIndex = (currentIndex + 1) % slides.length;
//   slides[currentIndex].classList.add("active");
//   if (currentIndex >= imagesCount - 350) {
//     // Extract the numeric value of the current width
//     const currentWidth = parseInt(getComputedStyle(scrollContent).width, 10);
//     const currentHeight = parseInt(getComputedStyle(scrollContent).height, 10);

//     // Subtract 5px from the current width
//     const newWidth = Math.max(currentWidth - 2, 0); // Ensure it doesn't go below 0px
//     scrollContent.style.width = `${newWidth}px`;

//     const newHeight = Math.max(currentHeight - 2, 0); // Ensure it doesn't go below 0px
//     scrollContent.style.width = `${newHeight}px`;

//     if (currentIndex >= 748) {
//       clearInterval(showNextSlide);
//     }
//   }
// }
// slides[currentIndex].classList.add("active");
// setInterval(showNextSlide, 50);

// Second code
// debugger;
// const imagesCount = 749;
// const scrollContent = document.querySelector(".slideshow");

// // Apply CSS transition for smooth resizing
// scrollContent.style.transition = "width 0.5s ease, height 0.5s ease";
// scrollContent.style.display = "flex"; // Ensure images are displayed in a row
// scrollContent.style.overflow = "hidden"; // Prevent overflow outside the container

// for (let i = 0; i < imagesCount; i++) {
//   const img = document.createElement("img");
//   const paddedNumber = String(i).padStart(5, "0");
//   img.src = `./images/Intro_${paddedNumber}.png`;
//   img.alt = `Image_Intro_${paddedNumber}`;
//   img.classList.add("slide");
//   img.loading = "lazy";
//   img.style.flexShrink = "1"; // Allow images to shrink when the container shrinks
//   scrollContent.appendChild(img);
// }

// const slides = document.querySelectorAll(".slide");
// let currentIndex = 0;

// function showNextSlide() {
//   slides[currentIndex].classList.remove("active");
//   currentIndex = (currentIndex + 1) % slides.length;
//   slides[currentIndex].classList.add("active");

//   if (currentIndex >= imagesCount - 350) {
//     // Extract the numeric value of the current width
//     const currentWidth = parseInt(getComputedStyle(scrollContent).width, 10);
//     const currentHeight = parseInt(getComputedStyle(scrollContent).height, 10);

//     // Subtract 2px from the current width and height
//     const newWidth = Math.max(currentWidth - 2, 0); // Ensure it doesn't go below 0px
//     scrollContent.style.width = `${newWidth}px`;

//     const newHeight = Math.max(currentHeight - 2, 0); // Ensure it doesn't go below 0px
//     scrollContent.style.height = `${newHeight}px`;

//     if (newWidth === 0 || newHeight === 0) {
//       clearInterval(intervalId); // Stop resizing when the width or height is 0
//     }
//   }
// }

// slides[currentIndex].classList.add("active");
// const intervalId = setInterval(showNextSlide, 50);

// Third code to show

debugger;
const imagesCount = 749;
const scrollContent = document.querySelector(".slideshow");

// Apply CSS transition for smooth resizing
scrollContent.style.transition = "width 0.5s ease, height 0.5s ease";
scrollContent.style.display = "flex"; // Ensure images are displayed in a row
scrollContent.style.overflow = "hidden"; // Prevent overflow outside the container

const defaultWidth = "100%"; // Default width of the container
const defaultHeight = "97%"; // Default height of the container
scrollContent.style.width = defaultWidth;
scrollContent.style.height = defaultHeight;

for (let i = 0; i < imagesCount; i++) {
  const img = document.createElement("img");
  const paddedNumber = String(i).padStart(5, "0");
  img.src = `./images/Intro_${paddedNumber}.png`;
  img.alt = `Image_Intro_${paddedNumber}`;
  img.classList.add("slide");
  img.loading = "lazy";
  img.style.flexShrink = "1"; // Allow images to shrink when the container shrinks
  scrollContent.appendChild(img);
}

const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showNextSlide() {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");

  if (currentIndex >= imagesCount - 350) {
    // Extract the numeric value of the current width
    const currentWidth = parseInt(getComputedStyle(scrollContent).width, 10);
    const currentHeight = parseInt(getComputedStyle(scrollContent).height, 10);

    // Subtract 2px from the current width and height
    const newWidth = Math.max(currentWidth - 2, 0); // Ensure it doesn't go below 0px
    scrollContent.style.width = `${newWidth}px`;

    const newHeight = Math.max(currentHeight - 2, 0); // Ensure it doesn't go below 0px
    scrollContent.style.height = `${newHeight}px`;

    if (newWidth === 0 || newHeight === 0) {
      clearInterval(intervalId); // Stop resizing when the width or height is 0
    }
  }

  // Reset to default dimensions when all images are shown
  if (currentIndex === imagesCount - 1) {
    setTimeout(() => {
      scrollContent.style.width = defaultWidth;
      scrollContent.style.height = defaultHeight;
    }, 500); // Add a small delay to make the reset smooth
  }
}

slides[currentIndex].classList.add("active");
const intervalId = setInterval(showNextSlide, 50);
