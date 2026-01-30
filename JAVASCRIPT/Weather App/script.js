const apiKey = "fbd8230379edaa6c1c471717941e0b1b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity") + "%"
    innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[o].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[o].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[o].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[o].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }
    else if(data.weather[o].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[o].main == "Humidity"){
        weatherIcon.src = "images/humidity.png"
    };

    document.querySelector(".weather").style.display = "block";
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});



