import { useState } from "react"
import { sculptureListData } from "./sculptureListData.js"

export default function GalleryState() {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)

  function handleNextClick() {
    setIndex(index + 1)
  }

  function handleMoreClick() {
    setShowMore(!showMore)
  }

  let sculpture = sculptureListData[index]
  return (
    <section>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureListData.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </section>
  )
}
