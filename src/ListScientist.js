import { people } from "./data.js"
import { getImageUrl } from "./utils.js"
import { Fragment } from "react"

export default function ListScientist() {
  const listItems = people.map((person) => (
    <Fragment key={person.id}>
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    </Fragment>
  ))
  return <ul>{listItems}</ul>
}
