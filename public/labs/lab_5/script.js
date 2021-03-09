function mapInit() {
  // follow the Leaflet Getting Started tutorial here
  return map;
}

async function dataHandler(mapObjectFromFunction) {
  // use your assignment 1 data handling code here

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

/*let places = [];
fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json')
.then(function(blob) {
    return blob.json();
})
.then(function(data) {
 places = data;
})*/

let places = []
async function windowActions() {
   console.log('window loaded');
const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
places = await request.json([]);
};


function displayMatches(e){
    e.preventDefault();

    const matchArray = places.filter(function(place){
        
        return place.city.includes(searchInput.value) || place.zip.includes(searchInput.value);
    });


    console.log(matchArray);

const HTML = matchArray.reduce((string, place, index) => {
        string += `
            <li class="box">
                <div class='name'>${place.name.toUpperCase()}</div>
                <div class='category'>${place.category.toUpperCase()}</div>
                <div class='address'>${place.address_line_1.toUpperCase()}</div>
                <div class='city'>${place.city.toUpperCase()}</div>
                <div class='zip'>${place.zip}</div>

            </li>
        `
    return string}, '');
   
    suggestions.innerHTML = HTML;
console.log(HTML)
}
document.querySelector("form").addEventListener('submit', displayMatches);
window.onload=windowActions();
  // and target mapObjectFromFunction to attach markers
}

async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;