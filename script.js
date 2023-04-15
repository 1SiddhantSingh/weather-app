/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API fom rapid Api of openweather



    getWeatherData = (city) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fa0f15d933mshd627b5684c0b502p15016ejsnd5f509c82208',
                'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
            }
        };
        
        return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
            .then(response => response.json())
            .then(data => data)
            .catch(err => console.error(err));

    }




/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
    const city = document.getElementById('city-input').value;
    // CODE GOES HERE
    //console.log(city)
    const data = await getWeatherData(city)
    showWeatherData(data)
      

  
  }
  
  /**
   * Show the weather data in HTML
   * HINT: make sure to console log the weatherData to see how the data looks like
   */
  const showWeatherData = (weatherData) => {
    //CODE GOES HERE
    document.getElementById('temp').innerText = weatherData.main.temp
    document.getElementById('city-name').innerText = weatherData.name
    document.getElementById('weather-type').innerText = weatherData.weather[0].main
    document.getElementById('min-temp').innerText = weatherData.main.temp_min
    document.getElementById('max-temp').innerText = weatherData.main.temp_max

    
  }
  