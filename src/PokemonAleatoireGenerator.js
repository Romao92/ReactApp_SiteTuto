import * as React from "react"
import database from "./database"
import FancyText from "./FancyText"
import Pokemon from "./Pokemon"

export default function InspirationGenerator({ children }) {
  const [index, setIndex] = React.useState(0)
  const inspiration = database[index]
  const next = () => setIndex((index + 1) % database.length)

  return (
    <>
      <p>Your inspirational {inspiration.type} is:</p>
      {inspiration.type === "pokemonName" ? (
        <FancyText text={inspiration.value} />
      ) : (
        <Pokemon
          value={inspiration.value}
          name={inspiration.name}
          imageId={inspiration.imgId}
        />
      )}

      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  )
}
