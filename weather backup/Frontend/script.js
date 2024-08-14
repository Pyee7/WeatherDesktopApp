// Name = Krishal Maharjan
// Id = 2408955

const search_button = document.querySelector('.display button')
const Icons = document.querySelector(".weather");
//fetching data using async function
async function getWeather(city) {
    try{

        // const API_key = "";
        const API = `http://localhost/Backend/main.php?city_name=${city}`

        const response = await fetch(API);
        const data =await response.json();
        console.log(data)
        //Display box 1

        document.querySelector('.celsius').innerHTML = (`${parseInt((data.temperature-273),10)}°C`)
        document.querySelector('.cityname').innerHTML = `${data.city_name}`;
        document.querySelector('.forcast').innerHTML = `${data.description}`;
        
        //Humidity,Wind speed and pressure
        document.querySelector('.humidity_per').innerHTML = (`${data.humidity} %`)
        document.querySelector('.speed').innerHTML = (`${data.wind_speed} km/hr`)
        document.querySelector('.pressure_per').innerHTML = (`${parseInt(data.pressure)}Pa`)
        document.querySelector('.headline').innerHTML = (`Seven days weather of ${data.city_name}`);

        

            //Date
            var today = new Date();
            var date = today.getDate();
            var month = today.toLocaleDateString([], {month:"short"});
            var year = today.getFullYear();
            var day = today.toLocaleDateString([],{weekday:"long"});
            var current_date = `${day} | ${month} ${date} ${year}`;

            document.querySelector('.date').innerHTML = current_date
        
        //icon change
        if (data.icon== "Clouds") {
            Icons.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-512.png";
        } else if (data.icon == "Clear") {
            Icons.src = "https://cdn2.iconfinder.com/data/icons/weather-icon-set/256/sun.png";
        } else if (data.icon == "Rain") {
            Icons.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_17-512.png";
        } else if (data.icon == "Drizzle") {
            Icons.src = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather05-512.png";
        } else if (data.icon == "Mist") {
            Icons.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_39-512.png";
        } else if (data.icon == "Haze") {
            Icons.src = "https://cdn2.iconfinder.com/data/icons/colorful-weather-forecast/256/haze-512.png";
        }
        localStorage.setItem("City Name",`${data.city_name}`)
        localStorage.setItem("Temperature",`${parseInt((data.temperature-273),10)}°C`)
        localStorage.setItem("Description",data.description)
        localStorage.setItem("Humidity",`${data.humidity} %`)
        localStorage.setItem("Wind Speed",`${data.wind_speed} km/hr`)
        localStorage.setItem("Pressure",`${parseInt(data.pressure)}Pa`)
    }
    catch (error){
        console.log(`ERROR::${error}`)
        alert (`Error: City not found..`)
    }

}

search_button.addEventListener("click", () => {
    const search_city = document.querySelector('.city');
    getWeather(search_city.value);
});

const search_city = document.querySelector('.city');
search_city.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getWeather(search_city.value);
    }
})


 getWeather("Kurnool")


    let sevenDaysIcons = []
    sevenDaysIcons[0] = document.querySelector(".icon1");
    sevenDaysIcons[1] = document.querySelector(".icon2");
    sevenDaysIcons[2] = document.querySelector(".icon3");
    sevenDaysIcons[3] = document.querySelector(".icon4");
    sevenDaysIcons[4] = document.querySelector(".icon5");
    sevenDaysIcons[5] = document.querySelector(".icon6");
    sevenDaysIcons[6] = document.querySelector(".icon7");

async function get_seven_info(city){
    try{
        const API = `http://localhost/Backend/seven_days_data.php?city_name=${city}`
        const response = await fetch(API);
        const data =await response.json();
        console.log(data)

            //seven days data
            let time = []
            for (i = 0; i<7;i++){
                var dates = []
                var day = []
                var month = []
                var year = []
                var date = []
                var current_date = []
                dates[i]= new Date(data[0][i].time*1000);
                year[i] = dates[i].getFullYear();
                month[i] = dates[i].toLocaleDateString([], {month:"short"});
                day[i] = dates[i].toLocaleDateString([],{weekday:"long"});
                date[i] = dates[i].getDate();
                current_date[i] = `${day[i]}<br>${month[i]} ${date[i]}`;
                time.push(current_date[i]);
            
                document.getElementById('data-of-day1').innerHTML = (`${time[0]} ${parseInt((data[0][0].temperature-273),10)}°C`)
                document.getElementById('data-of-day2').innerHTML = (`${time[1]} ${parseInt((data[0][1].temperature-273),10)}°C`)
                document.getElementById('data-of-day3').innerHTML = (`${time[2]} ${parseInt((data[0][2].temperature-273),10)}°C`)
                document.getElementById('data-of-day4').innerHTML = (`${time[3]} ${parseInt((data[0][3].temperature-273),10)}°C `)
                document.getElementById('data-of-day5').innerHTML = (`${time[4]} ${parseInt((data[0][4].temperature-273),10)}°C`)
                document.getElementById('data-of-day6').innerHTML = (`${time[5]} ${parseInt((data[0][5].temperature-273),10)}°C`)
                document.getElementById('data-of-day7').innerHTML = (`${time[6]} ${parseInt((data[0][6].temperature-273),10)}°C`)
                
                localStorage.setItem("City Name",`${city}`)
                if (data[0][i].icon== "Clouds") {
                    sevenDaysIcons[i].src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-512.png";
                } else if (data[0][i].icon == "Clear") {
                    sevenDaysIcons[i].src = "https://cdn2.iconfinder.com/data/icons/weather-icon-set/256/sun.png";
                } else if (data[0][i].icon == "Rain") {
                    sevenDaysIcons[i].src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_17-512.png";
                } else if (data[0][i].icon == "Drizzle") {
                    sevenDaysIcons[i].src = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather05-512.png";
                } else if (data[0][i].icon == "Mist") {
                    sevenDaysIcons[i].src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_39-512.png";
                } else if (data[0][i].icon == "Haze") {
                    sevenDaysIcons[i].src = "https://cdn2.iconfinder.com/data/icons/colorful-weather-forecast/256/haze-512.png";
                }
            }


    }
    catch(error){

    }
}
get_seven_info("Kurnool")

search_button.addEventListener("click", () => {
    const search_city = document.querySelector('.city');
    get_seven_info(search_city.value);
});

const city_search = document.querySelector('.city');
city_search.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        get_seven_info(city_search.value);
    }
})

