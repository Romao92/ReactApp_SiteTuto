import { people } from "./data.js"
import { getImageUrl } from "./utils.js"

const people2 = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
]

export default function ListComponent() {
  const chemists = people.filter((person) => person.profession === "chemist")
  const listItems2 = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ))

  const listItems = people2.map((person) => (
    <li key={person.id}>{person.name}</li>
  ))
  return (
    <div key={people.id}>
      <ul>{listItems}</ul>
      <ul>{listItems2}</ul>
    </div>
  )
}
