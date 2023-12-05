const $headerElement = document.querySelector('.main-header');
const $menuElement = document.querySelector('.menu-container');
const $buttonElement = document.querySelector('.open-menu')
const $galleryElement = document.querySelectorAll('.photo')
const $galleryFocusElement = document.querySelector('.gallery-focus');
const $photoContainer = document.querySelector('.photo-container');
const $mapElement = document.querySelector('.interactive-map');

// ---------------- HEADER ------------------------------------------------------------------------------------------------------------------------------
// Change the header when scrolling
function changeHeader () {
    window.addEventListener('scroll', function () {
        // When the scrolling is past 50px add the class .change-color
        if (window.scrollY > 50) {
            $headerElement.classList.add('change-color');
        } else { // If it's not the case (so everything before 50px) remove the class .change-color
            $headerElement.classList.remove('change-color');
        };
    });
};

// ---------------- MENU --------------------------------------------------------------------------------------------------------------------------------
function generateUIForMenu () {
    document.querySelector('.open-menu').addEventListener('click', () => {
        $menuElement.classList.toggle('menu-container-open')
        $buttonElement.classList.toggle('open-menu-active')
    });
};

// ---------------- GALLERY-FOCUS -----------------------------------------------------------------------------------------------------------------------------
function generateUIForPhoto() {
    $galleryElement.forEach(photo => {
        photo.addEventListener('click', () => {
            // If the user clicks on a photo show the gallery-focus (photo in big)
            const imageUrl = photo.getAttribute('src');
            $photoContainer.querySelector('img').setAttribute('src', imageUrl);

            photo.classList.toggle('photo--open')
            $galleryFocusElement.classList.toggle('gallery-focus--open')
            // If the user clicks on the remove button -> class .gallery-focus--open is removed and closes the gallery-focus
            document.querySelector('.remove').addEventListener('click', () => {
                $galleryFocusElement.classList.remove('gallery-focus--open')
            });
        })
    })
}

// ---------------- INTERACTIVE MAP ------------------------------------------------------------------------------------------------------------------
function generateHTMLForMap () {
    return `
    <p>Hello</p>
    `
};

function generateUIForMap () {
    $mapElement.innerHTML = generateHTMLForMap();
};

// ---------------- GENERATE USER INTERFACE ----------------------------------------------------------------------------------------------------------
// Show the user interface for 'Lightopia'
function generateUI () {
    // Add scrolling event
    changeHeader();
    // Show the menu
    generateUIForMenu();
    // Show gallery photo
    generateUIForPhoto()
    // Show the map
    generateUIForMap();
};

// ---------------- INITIALIZE APPLICATION ----------------------------------------------------------------------------------------------------------
// Start the application 'Lightopia'
function initialize () {
    generateUI();
}

// Call the function for the application
initialize();