import { getImageUrlPokemon } from "./utils.js"

export default function Pokemon({ name, imageId, size = 50 }) {
  return (
    <img
      className="avatar"
      src={getImageUrlPokemon(imageId)}
      alt={name}
      width={size}
      height={size}
    />
  )
}
