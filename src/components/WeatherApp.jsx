import React,{useState} from 'react'

const WeatherApp = () => {
  const[temp,setTemp] = useState(null)
  function queryTemp(e) {
    e.preventDefault();
    const City = e.target.city.value;
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=8684198c2eb23343d85874dac76f1006&units=metric`;
    const Weather = fetch(Url)
                        .then(res => res.json())
                        .then(data => setTemp(data));

  }
  return (
    <div>
      <h2>Weather App</h2>
        <form onSubmit={queryTemp}>
          <input type="text" id='city' placeholder='City'/>
          <button className='submit'>Send</button>
        </form>
        {/* operador corto circuito */}
        {temp!==null && <div><h2>{temp}</h2></div> }
    </div>
  )
}

export default WeatherApp