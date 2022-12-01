import React from 'react'
import CounterApp from './CounterApp'
import WeatherApp from './WeatherApp'
import './Main.css'

const Main = () => {
  return (
    <main>
      <div className='divMain'>
        <CounterApp></CounterApp>
        <WeatherApp></WeatherApp>
      </div>
    </main>
  )
}

export default Main