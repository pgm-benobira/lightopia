const $faqElement = document.querySelector('.faq');

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
        // console.log(`Category: ${category}`);
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
            // Close the previous open question to just show one at a time
            $elems.forEach($openElem => {
                // Search through the questions, if one is open when clicking on another one close it by removing the classes
                if ($openElem !== $elem) {
                    $openElem.querySelector('.answer').classList.remove('answer--open')
                    $openElem.querySelector('.question').classList.remove('question--open')
                };
            });

            const $answerElement = $elem.querySelector('.answer')
            $answerElement.classList.toggle('answer--open')
            const $questionElement = $elem.querySelector('.question')
            $questionElement.classList.toggle('question--open')
        });
    });
};

// ---------------- INITIALIZE APPLICATION ----------------------------------------------------------------------------------------------------------
// Start the application
function initialize () {
    generateUIForFaq();
}

// Call the function for the application
initialize();