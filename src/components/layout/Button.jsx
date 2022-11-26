import React from 'react'

const Button = ({children,funcion}) => {
  return (
    <button onClick={funcion}>{children}</button>
  )
}

export default Button