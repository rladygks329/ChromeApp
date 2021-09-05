const API_KEY = "32261777f447906a6117ef1e0a2bab94";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data)=>{
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText= data.weather[0].main;
            city.innerText = data.name;
        })

}
function onGeoError(){
    alert("can't find you");
}
navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);