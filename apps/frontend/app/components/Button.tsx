import React from 'react'

type ButtonProps = {
    text: string,
    handleClick: (textToSet: string) => void
}

const Button = (props:ButtonProps) => {
  return (
    <div><button onClick={() => props.handleClick(props.text)} className="btn btn-primary">{props.text}</button></div>
  )
}

export default Button