// Get the elements needed
const textBox = document.getElementById("textBox");
const changeColorBtn = document.getElementById("changeColorBtn");

// Add a click event listener to the button
changeColorBtn.addEventListener("click", () => {
  // Generate a random color
  const randomColor = getRandomColor();
  // Apply the random color to the text-box background
  textBox.style.backgroundColor = randomColor;
});

// Function to generate a random color in hexadecimal format
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Image slideshow
const randomImages = document.querySelectorAll(".random-images img");
let currentIndex = 0;

function showNextImage() {
  randomImages[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % randomImages.length;
  randomImages[currentIndex].style.display = "block";
}

// Set interval to automatically change images every 3 seconds
setInterval(showNextImage, 3000);
