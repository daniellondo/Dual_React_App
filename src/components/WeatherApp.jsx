import React, { useState } from "react";
import "./WeatherApp.css";
import styled from "styled-components";
import "flowbite";
import { FcSearch } from "react-icons/fc";
import { TiLocationArrow } from "react-icons/ti";

// const Boton = styled.button`
//   width: 100%;
//   background-color: blue;
//   color: white;
//   margin-top: 1rem;
//   border: none;
//   border-radius: 4px;
// `

// const Input = styled.input`
//   height: 28px;
//   padding-left: 40px;
//   padding-right: 20px;
//   box-shadow: none;
//   border-radius: 30px;
//   display: block;
//   width: 100%;
//   padding: 0.47rem 0.75rem;
//   font-size: .8125rem;
//   font-weight: 400;
//   line-height: 1.5;
//   background-clip: padding-box;
// `

const WeatherApp = () => {
  const [data, setData] = useState(null);
  const [Style, setStyle] = useState({ transform: "", transition: "" });

  function queryTemp(e) {
    e.preventDefault();
    const City = e.target.city.value;
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=8684198c2eb23343d85874dac76f1006&units=metric`;
    fetch(Url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
         setStyle(st => ({
            ...st,
            transform: `rotate(${data.wind.deg}deg)`, 
            transition: 'transform 150ms ease' // smooth transition
          }));
      });
  }

  function unCamelCase (str){
    return str
        // insert a space between lower & upper
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        // space before last upper in a sequence followed by lower
        .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
        // uppercase the first character
        .replace(/^./, function(str){ return str.toUpperCase(); })
}

  return (
    <div className="flex justify-between text-center flex-col rounded-lg weatherCard shadow-lg p-10 ">
      <h2 className="text-4xl name pb-4">Weather App</h2>
      <form onSubmit={queryTemp}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none pr-1">
            <FcSearch size={30} />
          </div>
          <input
            type="search"
            id="city"
            className="block w-full p-4 pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search City..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-2"
          ></button>
        </div>
      </form>
      <br />
      {data !== null && (
        <div className="flex flex-col items-center bg-gray-300 border rounded-lg shadow-md md:flex-row md:max-w-xl">
          <div>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}></img>
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <div>
              <h2 className="text-6xl">{Math.round(data.main.temp)}°C</h2>
            </div>
            <div>
              <h2 className="text-2xl">{unCamelCase(data.weather[0].description)}</h2>
            </div>
            <br />
            <div>
              <h2 className="text-1xl text-center">Humidity: {data.main.humidity}%</h2>
              <div>
              <h2 className="text-1xl text-center flex flex-row items-center justify-center"><TiLocationArrow size={40} className="pl-1 pr-1" style={Style}/>{data.wind.speed}m/s </h2>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
