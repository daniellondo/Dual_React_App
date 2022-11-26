import './App.css'
import CounterApp from './components/CounterApp'
import WeatherApp from './components/WeatherApp'

function App() {
  return (
    <div className="App">
        <h1>Dual React App</h1>
        <div className='container'>
          <CounterApp></CounterApp>
          <WeatherApp></WeatherApp>
        </div>
    </div>
  )
}

export default App
