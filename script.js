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
   
   */
  const showWeatherData = (weatherData) => {
    //CODE GOES HERE
    document.getElementById('temp').innerText = weatherData.main.temp
    document.getElementById('city-name').innerText = weatherData.name
    document.getElementById('weather-type').innerText = weatherData.weather[0].main
    document.getElementById('min-temp').innerText = weatherData.main.temp_min
    document.getElementById('max-temp').innerText = weatherData.main.temp_max

    
  }
  
