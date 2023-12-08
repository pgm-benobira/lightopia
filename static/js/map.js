const $mapElement = document.querySelector('.interactive-map');
const $mapFocusElement = document.querySelector('.interactive-map-focus');
const $mapWrapperElement = document.querySelector('.map-wrapper')

// ---------------- INTERACTIVE MAP ------------------------------------------------------------------------------------------------------------------
function generateHTMLForMap (items) {
    return `
    <div class="markers">
        ${items.map((item) => `
        <button class="marker" data-src="${item.imageLink}" style="top:${item.y}; left:${item.x};" href=""><svg class="marker__svg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 800 800" viewBox="0 0 800 800"><path d="m454.9 545.8-51.7-47.1c-25.4-23.1-38-34.6-52.4-39a65.8 65.8 0 0 0-38.8 0c-14.4 4.4-27 15.9-52.4 39L164 585.2m290.9-39.4 10.5-9.6c25.4-23.1 38-34.6 52.4-39a65.8 65.8 0 0 1 38.8 0c14.4 4.4 27 15.9 52.4 39l38.4 33.4m-192.5-23.8 113.3 102.6M566.7 300c0 36.8-29.8 66.7-66.7 66.7-36.8 0-66.7-29.8-66.7-66.7 0-36.8 29.8-66.7 66.7-66.7 36.8 0 66.7 29.9 66.7 66.7zM700 400c0 165.7-134.3 300-300 300S100 565.7 100 400s134.3-300 300-300 300 134.3 300 300z" style="fill:none;stroke:#fff;stroke-width:66.6667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:133.3333"/></svg></button>
        `).join('')}
    </div>
    <img class="trail-map" src="./static/img/images/trail-map.jpg" alt="Map of Lightopia Brussels">
    `
};

function generateUIForMap () {
    $mapElement.innerHTML = generateHTMLForMap(markers);
    const $elems = $mapWrapperElement.querySelectorAll('.marker')
    $elems.forEach($elem => {
        $elem.addEventListener('click', (ev) => {
            const src = ev.currentTarget.dataset.src; 
            generateUIForMapFocus(src);
            // If the user clicks on the remove button -> class .interactive-map-focus--open is removed and closes the image
            document.querySelector('.remove').addEventListener('click', () => {
                $mapFocusElement.classList.remove('interactive-map-focus--open')
            })
        });
    });
};

function generateHTMLForMapFocus (photo) {
    return `
    <div class="button-container">
        <button class="remove remove--map"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 26.1 26.1" viewBox="0 0 26.1 26.1"><path d="m1.1 1.1 24 24m0-24-24 24" style="fill:none;stroke:#fff;stroke-width:3;stroke-miterlimit:10"/></svg></button>
    </div>
    <div class="map-image-container">
        <img class="map-image" src="${photo.imageLink}" alt="${photo.name}">
    </div>
    `
}

function generateUIForMapFocus (src) {
    const photo = markers.find((marker) => marker.imageLink === src);
    $mapFocusElement.classList.add('interactive-map-focus--open')
    $mapFocusElement.innerHTML = generateHTMLForMapFocus(photo);
}

// ---------------- INITIALIZE APPLICATION ----------------------------------------------------------------------------------------------------------
// Start the application 'Lightopia'
function initialize () {
    generateUIForMap();
}

// Call the function for the application
initialize();