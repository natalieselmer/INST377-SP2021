const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

let places = [];
function mapInit() {
  const mymap = L.map('mapid').setView([38.9897, -76.9378], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibmF0YWxpZXNlbG1lciIsImEiOiJja20yYno4djUxNXdkMnZxbTkyZDNya25kIn0.pt1fo8spQ3yYmYDVYid41g'
}).addTo(mymap);
console.log('mymap', mymap);
  return mymap;
}

  // follow the Leaflet Getting Started tutorial here

async function dataFilter(mapObjectFromFunction) {
const form = document.querySelector('#search-form');
const searched= document.querySelector('searched');
const targetList= document.querySelector('.target-list');
const replyMessage= document.querySelector('.reply-message'); 
}

async function dataHandler(mapObjectFromFunction) {
  // use your assignment 1 data handling code here
  console.log('window loaded');
  const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
  places = await request.json([]);
  const mymap = mapInit();
  await dataHandler(mymap);
}

form.addEventListener('submit', async(event) => {
    suggestions.innerText = '';

    e.preventDefault();
  const filtered = places.filter(function(place) {
      record.geocoded_column_1 &&
      place.zip.includes(searchInput.value));
    console.log(filtered);
    
    const fiveresults = filtered.slice(0,5);
  });
console.table(fiveresults);

fiveresults.forEach((item) => {
  const longLat = item.geocoded_column_1.coordinates;
  console.log('markerlonglat', longLat[0], longLat[1]);
  const marker = L.marker([longLat[1],longLat[0]]).addTo(mapObjectFromFunction);

  const appendItem = document.createElement('li')
  appendItem.classList.add('block');
  appendItem.classList.add('list-item');
  appendItem.classList.add('block');
  appendItem.innerHTML = `<div class ='list-header is-size-5'>${item.name}</div><address class ='is-size-6'>${item.address_line_1}</address>`;
  suggestions.append(appendItem)
;
});

const {coordinates} = fiveresults[0]?.geocoded_column_1;
console.log('viewset coords', coordinates);
mapObjectFromFunction.panTo([coordinates[1], coordinates[0]], 0);
});

async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions();