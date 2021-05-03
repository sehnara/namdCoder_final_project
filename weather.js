const API_KEY = '6338e402a8624d753acce848f71624c8';
const divMission = document.querySelector('.mission');
const COORDS =  'coords';

function typeWeather(){
    // const weather = 
}

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const curTemp = json.main.temp;
        const feelsLike = json.main.feels_like;

        const para = document.createElement('p');
        para.classList.add('temp');
        para.innerHTML = `current temperature is ${curTemp}, feels like ${feelsLike}`;
        divMission.appendChild(para);
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);    
    getWeather(latitude,longitude);
}
function handleError(){
    console.log('Error access GeoLocation')
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords ===null){
        askForCoords();
    }
    else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}