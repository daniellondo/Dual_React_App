import React,{useState} from 'react'
import './WeatherApp.css'
import styled from 'styled-components'

const Boton = styled.button`
  width: 100%;
  background-color: blue;
  color: white;
  margin-top: 1rem;
  border: none;
  border-radius: 4px;
`

const Input = styled.input`
  border:solid gray 1px;
  background-color: lightgray;
  color:black;
  border-radius: 4px;
`

const WeatherApp = () => {
  const[temp,setTemp] = useState(null)
  
  function queryTemp(e) {
    e.preventDefault();
    const City = e.target.city.value;
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=8684198c2eb23343d85874dac76f1006&units=metric`;
    fetch(Url).then(res => res.json()).then(data => setTemp(data.main.temp));

  }
  return (
    <div>
      <h2>Weather App</h2>
        <form onSubmit={queryTemp}>
          <Input type="text" id='city' placeholder='City'/>
          <Boton className='submit'>Send</Boton>
        </form>
        {/* operador corto circuito */}
        {temp!==null && <div><h2 className='temp'>{temp}</h2></div> }
    </div>
  )
}

export default WeatherApp