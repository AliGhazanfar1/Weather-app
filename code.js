const apiKey = "4cd6a924d209c7160877dd3d0deb63d7"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if(response.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        let data = await response.json();
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerText = data.main.humidity+ "%";
        document.querySelector(".wind").innerText = data.wind.speed+" km/h";
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }else if(data.weather[0].main == "Humidity"){
            weatherIcon.src = "images/humidity.png"
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png"
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png"
        }else if(data.weather[0].main == "Wind"){
            weatherIcon.src = "images/wind.png"
        }
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})