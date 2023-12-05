const $mapElement = document.querySelector('.interactive-map');

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