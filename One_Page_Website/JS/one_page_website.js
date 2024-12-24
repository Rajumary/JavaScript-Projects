// Get the modal, images, and close button elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

// Function to open the lightbox with the clicked image
function openLightbox(event) {
  lightbox.style.display = 'flex';
  lightboxImg.src = event.target.src;  // Set the lightbox image to the clicked one
}

// Function to close the lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
}

// Add event listeners to each image to open the lightbox
galleryItems.forEach(item => {
  item.addEventListener('click', openLightbox);
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', closeLightbox);

// Close the lightbox if the background (lightbox) is clicked
lightbox.addEventListener('click', function(event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});