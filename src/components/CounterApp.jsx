import { useState } from 'react'
import Button from './layout/Button'
import DisplayNumber from './layout/DisplayNumber'
import './CounterApp.css'
import { HiOutlineArrowPath } from "react-icons/hi2";
import { BiUpArrowAlt,BiDownArrowAlt } from "react-icons/bi";

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
    <div className='flex justify-center text-center flex-col rounded-lg card shadow-lg p-10 m-5'>
      <h2 className='text-4xl name'>Counter App</h2>
      <DisplayNumber>{displayCounter}</DisplayNumber>
      <div>
        <Button funcion={decrement}><BiDownArrowAlt className="icons" size={50}/></Button>
        <Button funcion={reset}><HiOutlineArrowPath className="icons" size={50}/></Button>
        <Button funcion={increment}><BiUpArrowAlt className="icons" size={50}/></Button>
      </div>
    </div>
  )
}

export default CounterApp