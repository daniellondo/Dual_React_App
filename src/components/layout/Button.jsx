import React from 'react'

const Button = ({children,funcion}) => {
  return (
    <button onClick={funcion} className="rounded-full p-2 m-5 border bg-white">{children}</button>
  )
}

export default Button