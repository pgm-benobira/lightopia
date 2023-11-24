const $galleryElement = document.querySelector('.gallery');

// ---------------- GALLERY ------------------------------------------
// Generate the HTML for the gallery
function generateHTMLForGallery (photos) {
    return photos.map((photo) => `
        <img class="gallery__photo" src="${photo.imageLink}" alt="${photo.name}">
    `).join('');
}

// Show the gallery
function generateUIForGallery () {
    $galleryElement.innerHTML = generateHTMLForGallery(gallery);
}

// ---------------- GENERATE USER INTERFACE ------------------------------------------
// Show the user interface for 'Lightopia'
function generateUI () {
    // Show the gallery
    generateUIForGallery();
}

// ---------------- INITIALIZE APPLICATION ------------------------------------------
// Start the application 'Lightopia'
function initialize () {
    generateUI();
}

// Call the function for the application
initialize()