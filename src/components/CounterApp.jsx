import { useState } from 'react'
import Button from './layout/Button'
import DisplayNumber from './layout/DisplayNumber'

const CounterApp = () => {
  // const [state,useState] = useState(estadoInicial)
  const [displayCounter, setDisplayCounter] = useState(0)

  function decrement() {
     setDisplayCounter(displayCounter - 1);
  }

  function reset() {
    setDisplayCounter(0);
  }

  function increment() {
  setDisplayCounter(displayCounter + 1);
  }
  
  return (
    <div>
      <h2 className='text-3xl'>CounterApp</h2>
      <DisplayNumber>{displayCounter}</DisplayNumber>
      <div>
        <Button funcion={decrement}>👇</Button>
        <Button funcion={reset}>🔁</Button>
        <Button funcion={increment}>👆</Button>
      </div>
    </div>
  )
}

export default CounterApp