//#region Describing UI

//import styled from "styled-components"

// const Title = styled.h1`
//   font-size: 16px;
//   color: green;
//   display: flex;`

export default function Profile() {
  const src = "https://t.ly/Mloif"
  return (
    <div style={{ display: "flex" }}>
      {/* <Title>title test</Title> */}
      <img src={src} alt="Pikachu" className="imgPika" />
    </div>
  )
}
