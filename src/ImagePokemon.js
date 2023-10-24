import Pokemon from "./Pokemon"

export default function ImagePokemon({ value, src }) {
  return (
    <div className="colorbox" style={{ backgroundColor: value }}>
      <Pokemon
        size={50}
        person={{
          name: { value },
          imageId: { src },
        }}
      />
    </div>
  )
}
