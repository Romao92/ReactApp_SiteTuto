import Profile from "./Profile.js"

export function ButtonTest() {
  return (
    <>
      <button>test</button>{" "}
    </>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Pokemons</h1>
      <section
        className="ListePokemon"
        style={{ borderStyle: "dashed", paddingTop: 50 }}
      >
        <Profile />
        <Profile />
        <Profile />
      </section>
    </div>
  )
}
