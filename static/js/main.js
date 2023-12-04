const $headerElement = document.querySelector('.main-header');
const $menuElement = document.querySelector('.menu-container');
const $buttonElement = document.querySelector('.open-menu')
const $faqElement = document.querySelector('.faq');
const $mapElement = document.querySelector('.interactive-map')

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


// ---------------- FAQ -------------------------------------------------------------------------------------------------------------------------------
function generateHTMLForFaq (items, category) {
    return `
    <article class="${category}">
    <h2>${category}</h2>
    ${items.filter((item) => item.category === category).map((item) => `
    <section class="question__container">
        <p class="question">${item.question}</p>
        <div class="answer">${item.answer}</div>
    </section>
    `).join('')}
    </article>
    `;
};

function generateUIForFaq () {
    let categories = ["algemeen", "parcours", "eten en drinken", "toegankelijkheid", "route & parking", "tickets", "contact"];
    // Tip: Eerst een loop maken die de categorieën haalt uit de array
    for (const category of categories) {
        console.log(`Category: ${category}`);
    };
    // Tip: Dan proberen om ze uit de data te halen in plaats van in const categories
    // Extract unique categories from the question array
    categories = [...new Set(questions.map(question => question.category))];
    // Used to accumulate all HTML for all categories
    let faqHTML = '';
    for (const category of categories) {
        faqHTML += generateHTMLForFaq(questions, category);
    };
    $faqElement.innerHTML = faqHTML;

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
    // Show the FAQ
    generateUIForFaq();
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