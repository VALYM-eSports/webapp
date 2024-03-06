"use client"
import React from "react"
import Button from "./components/Button"

export default function Home() {
  const [text, setText] = React.useState("Click sur un button")

  const handleClick = (textToSet: string) => {
    setText(textToSet)
  }

  return (
    <main>
      <p>{text}</p>
      <Button text="Mec" handleClick={handleClick} />
      <Button text="Theo je t'aime" handleClick={handleClick} />
    </main>
  )
}
