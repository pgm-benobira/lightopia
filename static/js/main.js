(() => {
const $headerElement = document.querySelector('.main-header');
const $menuElement = document.querySelector('.menu-container');
const $buttonElement = document.querySelector('.open-menu')
const $galleryElement = document.querySelectorAll('.photo')
const $galleryFocusElement = document.querySelector('.gallery-focus');
const $photoContainer = document.querySelector('.photo-container');

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

// ---------------- GALLERY-FOCUS -----------------------------------------------------------------------------------------------------------------------
function generateUIForPhoto() {
    // previous/next methods found on:
    // - https://www.tutorjoes.in/JS_tutorial/image_gallery_in_javascript 
    // - https://www.w3resource.com/javascript-exercises/event/javascript-event-handling-exercise-5.php
    
    let currentIndex = 0;

    function showPhoto(index) {
        // Takes the image src from the image
        const imageUrl = $galleryElement[index].getAttribute('src');
        // Sets it to the img element inside the .photo-container
        $photoContainer.querySelector('img').setAttribute('src', imageUrl);
    };

    $galleryElement.forEach((photo, index) => {
        photo.addEventListener('click', () => { // if the user clicks on a photo:
            currentIndex = index;
            showPhoto(currentIndex); // add the correct source with the index in mind
            $galleryFocusElement.classList.add('gallery-focus--open') // shows the photo in big

            // If the user clicks on the remove button -> class .gallery-focus--open is removed and closes the gallery-focus
            document.querySelector('.remove').addEventListener('click', () => {
                $galleryFocusElement.classList.remove('gallery-focus--open')
            });

            // Click on previous button goes to the index before the currentIndex
            document.querySelector('.previous').addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + $galleryElement.length) % $galleryElement.length;
                showPhoto(currentIndex)
            })

            // Click on next button goes to the next index
            document.querySelector('.next').addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % $galleryElement.length;
                showPhoto(currentIndex)
            })
        })
    })
};

// ---------------- GENERATE USER INTERFACE --------------------------------------------------------------------------------------------------------------
// Show the user interface for 'Lightopia'
function generateUI () {
    // Add scrolling event
    changeHeader();
    // Show the menu
    generateUIForMenu();
    // Show gallery photo
    generateUIForPhoto()
};

// ---------------- INITIALIZE APPLICATION ----------------------------------------------------------------------------------------------------------------
// Start the application 'Lightopia'
function initialize () {
    generateUI();
};

// Call the function for the application
initialize();
})();