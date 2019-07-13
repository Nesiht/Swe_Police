//
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// fetch('https://polisen.se/api/events')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     //console.log(JSON.stringify(myJson)); //Show all data fetched from URL
//     for (let i = 0; myJson[i].location < 10; i++){
//       console.log(myJson[i].location.gps); //Show all the types of crime.
//     }
//   });
var map;
function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: -28.024, lng: 140.887}
  });

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location) {
    return new google.maps.Marker({
      position: location,
      map: map
    });
  });
  // Add a marker clusterer to manage the markers.
}
var locations = [
  {lat: -31.563910, lng: 147.154312},
  {lat: -33.718234, lng: 150.363181},
  {lat: -33.727111, lng: 150.371124},
  {lat: -33.848588, lng: 151.209834},
  {lat: -33.851702, lng: 151.216968},
  {lat: -34.671264, lng: 150.863657},
  {lat: -35.304724, lng: 148.662905},
  {lat: -36.817685, lng: 175.699196},
  {lat: -36.828611, lng: 175.790222},
  {lat: -37.750000, lng: 145.116667},
  {lat: -37.759859, lng: 145.128708},
  {lat: -37.765015, lng: 145.133858},
  {lat: -37.770104, lng: 145.143299},
  {lat: -37.773700, lng: 145.145187},
  {lat: -37.774785, lng: 145.137978},
  {lat: -37.819616, lng: 144.968119},
  {lat: -38.330766, lng: 144.695692},
  {lat: -39.927193, lng: 175.053218},
  {lat: -41.330162, lng: 174.865694},
  {lat: -42.734358, lng: 147.439506},
  {lat: -42.734358, lng: 147.501315},
  {lat: -42.735258, lng: 147.438000},
  {lat: -43.999792, lng: 170.463352}
]







//Javascript Eventlisteners
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('getCoordinates').addEventListener('click', getCoordinates);

//Show 9 latest posts
async function getCoordinates(){
  fetch('https://polisen.se/api/events')
  .then((res) => res.json())
  .then((data) => {
    let output = '';
    for (let i = 0; i < 9; i++){
      let obj = data[i];
      // Present response using html/bootstrap
      output += `
      <div class="card col-xs-12 col-sm-6 col-md-4" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${obj.name}</h5>
          <p class="card-text">${obj.summary}<br><a href=${obj.url} target="_blank">Link!</a></p>

          <p class="card-text">${obj.location.gps}</p>
        </div>
      </div>
      `;
      console.log(obj.name);
    };
    document.getElementById('output').innerHTML = output;
  });
}


//Show  all respones
async function getPosts(){
  fetch('https://polisen.se/api/events')
  .then((res) => res.json())
  .then((data) => {
    let output = '';
    data.forEach(function(data){
      // Present response using html/bootstrap
      output += `
      <div class="card mb-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">${data.summary}<br><a href=${data.url} target="_blank">Link!</a></p>

          <p class="card-text">${data.location.gps}</p>
        </div>
      </div>
      `;
    });
    document.getElementById('output').innerHTML = output;
  })
}

// plot all locations on Google maps
// function plotMat(){
//     //CODE HERE
//     var locations = [
//         {lat: -31.563910, lng: 147.154312},
//         {lat: -33.718234, lng: 150.363181},
//         {lat: -33.727111, lng: 150.371124},
//         {lat: -33.848588, lng: 151.209834},
//         {lat: -33.851702, lng: 151.216968},
//         {lat: -34.671264, lng: 150.863657},
//         {lat: -35.304724, lng: 148.662905},
//         {lat: -36.817685, lng: 175.699196},
//         {lat: -36.828611, lng: 175.790222},
//         {lat: -37.750000, lng: 145.116667},
//         {lat: -37.759859, lng: 145.128708},
//         {lat: -37.765015, lng: 145.133858},
//         {lat: -37.770104, lng: 145.143299},
//         {lat: -37.773700, lng: 145.145187},
//         {lat: -37.774785, lng: 145.137978},
//         {lat: -37.819616, lng: 144.968119},
//         {lat: -38.330766, lng: 144.695692},
//         {lat: -39.927193, lng: 175.053218},
//         {lat: -41.330162, lng: 174.865694},
//         {lat: -42.734358, lng: 147.439506},
//         {lat: -42.734358, lng: 147.501315},
//         {lat: -42.735258, lng: 147.438000},
//         {lat: -43.999792, lng: 170.463352}
//       ]
//
//     let markers = locations.map(function(locations){
//       return new google.maps.Marker({
//         position: location
//       })
//     });
// }


//  DONT FUCKING TUCH THIS FUNCTION!
// function getCoordinates(){
//   fetch('https://polisen.se/api/events')
//   .then((res) => res.json())
//   .then((data) => {
//     let output = '<h2 class="mb-4">Händelser</h2>';
//     let i;
//     for (i = 0; i < 3; i++){
//       console.log(data[i]);
//     }
//     document.getElementById('secondOutput').innerHTML = output;
//   })
// }
