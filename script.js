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


//knyta knappen till ett event och sen funtkion
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('getCoordinates').addEventListener('click', getCoordinates);



//funktionen att hämta data och sedan presentera den.
function getPosts(){
  fetch('https://polisen.se/api/events')
  .then((res) => res.json())
  .then((data) => {
    let output = '<h2 class="mb-4">Händelser</h2>';
    data.forEach(function(data){
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
