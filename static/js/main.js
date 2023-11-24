const $galleryElement = document.querySelector('.gallery');
const $galleryFocusElement = document.querySelector('.gallery-focus');

// ---------------- GALLERY ------------------------------------------
// Generate the HTML for the gallery
function generateHTMLForGallery (photos) {
    return photos.map((photo) => `
        <img class="gallery__photo" src="${photo.imageLink}" alt="${photo.name}" data-id="${photo.id}">
    `).join('');
}

// Show the gallery
function generateUIForGallery () {
    $galleryElement.innerHTML = generateHTMLForGallery(gallery);
    // If the user clicks on a photo show the gallery-focus (photo in big)
    const $elems = $galleryElement.querySelectorAll('.gallery__photo');
    $elems.forEach($elem => {
        $elem.addEventListener('click', (ev) => {
            const id = ev.currentTarget.dataset.id; 
            generateUIForGalleryFocus(id);
            // If the user clicks on the remove button -> class .concert-details--open is removed and closes the concert-details
            document.querySelector('.remove').addEventListener('click', () => {
                $galleryFocusElement.classList.remove('gallery-focus--open')
            })
        })
    });
}

// Generate the HTML for gallery-focus
function generateHTMLForGalleryFocus (photo) {
    return `
    <div class="gallery-focus__inner">
        <div class="button-container">
            <button class="remove"><svg id="Layer_1" data-name="Layer 1" viewBox="0 0 26.12 26.12"><defs><style>.cls-1{fill:none;stroke:#989898;stroke-miterlimit:10;stroke-width:3px}</style></defs><path d="m1.06 1.06 24 24M25.06 1.06l-24 24" class="cls-1"/></svg></button>
        </div>
        <div class="photo-container">
            <img src="${photo.imageLink}" alt="${photo.name}">
        </div>
    </div>
    `;
}

// Show the gallery-focus
function generateUIForGalleryFocus (id) {
    const photo = gallery.find((photo) => photo.id === id);
    $galleryFocusElement.classList.add('gallery-focus--open')
    $galleryFocusElement.innerHTML = generateHTMLForGalleryFocus(photo);
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