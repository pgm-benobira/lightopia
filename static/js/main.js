const $headerElement = document.querySelector('.main-header');
const $menuElement = document.querySelector('.menu-container');
const $galleryElement = document.querySelector('.gallery');
const $galleryFocusElement = document.querySelector('.gallery-focus');
const $faqElement = document.querySelector('.faq');

// ---------------- HEADER -------------------------------------------
// Change the header when scrolling
function changeHeader () {
    window.addEventListener('scroll', function () {
        // When the scrolling is past 50px add the class .change-color
        if (window.scrollY > 50) {
            $headerElement.classList.add('change-color');
        } else { // If it's not the case (so everything before 50px) remove the class .change-color
            $headerElement.classList.remove('change-color');
        }
    })
};

// ---------------- MENU ---------------------------------------------
function generateUIForMenu () {
    document.querySelector('.open-menu').addEventListener('click', () => {
        $menuElement.classList.add('menu-container-open')
    })
    document.querySelector('.close-menu').addEventListener('click', () => {
        $menuElement.classList.remove('menu-container-open')
    })
}

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

// ---------------- FAQ -------------------------------------------------
function generateHTMLForFaq (items, category) {
    return `
    <article class="${category}">
    <h2>${category}</h2>
    ${items.filter((item) => item.category === category).map((item) => `
    <section class="question__container">
        <p class="question">${item.question}</p>
        <p class="answer">${item.answer}</p>
    </section>
    `).join('')}
    </article>
    `;
}

function generateUIForFaq () {
    const categories = ["algemeen", "parcours"];
    // Eerst een loop maken die de categorieën haalt uit de array
    // Dan proberen om ze uit de data te halen in plaats van in const categories 

    const algemeenHTML = generateHTMLForFaq(questions, 'algemeen');
    const parcoursHTML = generateHTMLForFaq(questions, 'parcours');
    const etenHTML = generateHTMLForFaq(questions, 'eten en drinken');
    const toegankelijkHTML = generateHTMLForFaq(questions, 'toegankelijkheid');
    const routeHTML = generateHTMLForFaq(questions, 'route & parking');
    const ticketsHTML = generateHTMLForFaq(questions, 'tickets');
    const contactHTML = generateHTMLForFaq(questions, 'contact');
    $faqElement.innerHTML = algemeenHTML + parcoursHTML + etenHTML + toegankelijkHTML + routeHTML + ticketsHTML + contactHTML;

    const $elems = $faqElement.querySelectorAll('.question__container')
    $elems.forEach($elem => {
        $elem.addEventListener('click', () => {
            const $answerElement = $elem.querySelector('.answer')
            $answerElement.classList.toggle('answer--open')
            const $questionElement = $elem.querySelector('.question')
            $questionElement.classList.toggle('question--open')
        });
    });
};

// ---------------- GENERATE USER INTERFACE ------------------------------------------
// Show the user interface for 'Lightopia'
function generateUI () {
    // Add scrolling event
    changeHeader();
    // Show the menu
    generateUIForMenu();
    // Show the gallery
    generateUIForGallery();
    // Show the FAQ
    generateUIForFaq();
}

// ---------------- INITIALIZE APPLICATION ------------------------------------------
// Start the application 'Lightopia'
function initialize () {
    generateUI();
}

// Call the function for the application
initialize()