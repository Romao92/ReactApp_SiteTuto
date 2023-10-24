import { getImageUrl } from "./utils.js"

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

export default function AvatarList() {
  return (
    <div>
      <Avatar
        size={100}
        person={{
          name: "Salamèche",
          imageId: "NnyPn4X",
        }}
      />
      <Avatar
        size={80}
        person={{
          name: "Miaouss",
          imageId: "4e5m136",
        }}
      />
      <Avatar
        size={50}
        person={{
          name: "évoli",
          imageId: "9RdExuP",
        }}
      />
      <Avatar
        person={{
          name: "évoli2",
          imageId: "9RdExuP",
        }}
      />
      <Avatar
        size={30}
        person={{
          name: "tatoo pokemon",
          imageId: "pQoJbeP",
        }}
      />
    </div>
  )
}
