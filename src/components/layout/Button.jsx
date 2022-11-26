import React from 'react'

const Button = ({children,funcion}) => {
  return (
    <button onClick={funcion} className="rounded-full p-2 border">{children}</button>
  )
}

export default Button