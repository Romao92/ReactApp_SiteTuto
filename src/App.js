// import logo from "./logo.svg"
// import { useState } from "react"
import "./App.css"
// import Gallery from "./Gallery"
// import { ButtonTest } from "./Gallery"
// import AvatarList from "./AvatarList"
// import ListComponent from "./ListComponent"
// import ListSientist from "./ListScientist"
// import PokemonAleatoireGenerator from "./PokemonAleatoireGenerator"
// import Copyright from "./Copyright"
import React from "react"
import { produce } from "immer"
import { useImmer } from "use-immer"
// import { sculptureList } from "./dataState.js"
// import GalleryState from "./GalleryState"

//#region default App
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }
//#endregion

export default function App() {
  // const [person, updatePerson] = useImmer({
  //   name: "Niki de Saint Phalle",
  //   artwork: {
  //     title: "Blue Nana",
  //     city: "Hamburg",
  //     image: "https://i.imgur.com/Sd1AgUOm.jpg",
  //   },
  // })

  return (
    <>
      <div>
        {/* <Page /> */}

        {/* <GalleryImgState /> */}

        {/* Region GAME <Game /> */}
        {/* <ThinkingInReact /> */}
        {/* <Form /> */}
        {/* <PokemonAleatoireGenerator>
          <p>Pokemon generator</p>
          <Copyright year={2004} />
        </PokemonAleatoireGenerator> */}
        {/* <ListSientist />
        <br></br>
        <ListComponent />
        <br></br>
        <Gallery />
        <br></br> */}
        {/* <ButtonTest></ButtonTest>
        <br></br>*/}
        {/* <AvatarList /> */}

        {/* <Toolbar
          onPlayMovie={() => alert("Playing!")}
          onUploadImage={() => alert("Uploading!")}
        />

        <Signup /> */}
      </div>
    </>
  )
}

//#region UpdateObjetInState
function Form() {
  function handleNameChange(e) {
    updatePerson((draft) => {
      draft.name = e.target.value
    })
  }

  function handleTitleChange(e) {
    updatePerson((draft) => {
      draft.artwork.title = e.target.value
    })
  }

  function handleCityChange(e) {
    updatePerson((draft) => {
      draft.artwork.city = e.target.value
    })
  }

  function handleImageChange(e) {
    updatePerson((draft) => {
      draft.artwork.image = e.target.value
    })
  }

  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  )
}
//#endregion

//#region State Component Memory
// function Page() {
//   return (
//     <div className="Page">
//       <GalleryImgState />
//       <GalleryImgState />
//     </div>
//   )
// }

// function FeedbackForm() {
//   const [isSent, setIsSent] = useState(false)
//   const [message, setMessage] = useState("")

//   if (isSent) {
//     return <h1>Thank you!</h1>
//   }

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault()
//         alert(`Sending: "${message}"`)
//         setIsSent(true)
//       }}
//     >
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <br />
//       <button type="submit">Send</button>
//     </form>
//   )
// }

// function GalleryImgState() {
//   const [index, setIndex] = useState(0)
//   const [showMore, setShowMore] = useState(false)

//   function handleNextClick() {
//     setIndex(index + 1)
//   }

//   function handlePreviousClick() {
//     setIndex(index - 1)
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore)
//   }

//   let sculpture = sculptureList[index]
//   let indexmax = sculptureList.length - 1
//   return (
//     <>
//       {index !== indexmax && <button onClick={handleNextClick}>Next</button>}
//       {index !== 0 && <button onClick={handlePreviousClick}>Previous</button>}
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? "Hide" : "Show"} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img src={sculpture.url} alt={sculpture.alt} />
//     </>
//   )
// }
//#endregion

//#region Adding interactivity
// function Toolbar({ onPlayMovie, onUploadImage }) {
//   return (
//     <div>
//       <Button onClick={onPlayMovie}>Play Movie</Button>
//       <Button onClick={onUploadImage}>Upload Image</Button>
//     </div>
//   )
// }

// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayButton({ movieName }) {
//   function handlePlayClick() {
//     alert(`Playing ${movieName}!`)
//   }

//   return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>
// }

// function UploadButton() {
//   return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
// }

// function Toolbar() {
//   return (
//     <div>
//       <PlayButton movieName="Kiki's Delivery Service" />
//       <UploadButton />
//     </div>
//   )
// }

// function Button({ onClick, children }) {
//   return <button onClick={onClick}>{children}</button>
// }

// function Signup() {
//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault()
//         //e.stopPropagation() stops the event handlers attached to the tags above from firing.
//         //e.preventDefault() prevents the default browser behavior for the few events that have it.
//         alert("Submitting!")
//       }}
//     >
//       <input />
//       <button>Send</button>
//     </form>
//   )
// }
//#endregion

//#region  Game TIC TAC TOE
// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   )
// }

// function Board({ xIsNext, squares, onPlay }) {
//   function handleClick(i) {
//     if (calculateWinner(squares) || squares[i]) {
//       return
//     }

//     const nextSquares = squares.slice()
//     if (xIsNext) {
//       nextSquares[i] = "X"
//     } else {
//       nextSquares[i] = "O"
//     }
//     onPlay(nextSquares, i)
//   }

//   const winner = calculateWinner(squares)
//   let statusG = ""
//   if (winner) {
//     statusG = "Winner: " + winner
//   } else {
//     statusG = "Next player: " + (xIsNext ? "X" : "O")
//   }

//   const boardSize = 3
//   let board = Array(boardSize)
//     .fill(null)
//     .map((_, i) => {
//       return (
//         <div className="board-row" key={i}>
//           {Array(boardSize)
//             .fill(null)
//             .map((_, j) => {
//               const index = i * boardSize + j
//               return (
//                 <Square
//                   value={squares[index]}
//                   onSquareClick={() => handleClick(index)}
//                   key={index}
//                 />
//               )
//             })}
//         </div>
//       )
//     })

//   return (
//     <>
//       <div className="status">{statusG}</div>
//       {board}
//     </>
//   )
// }

// function Game() {
//   const [history, setHistory] = useState([
//     { squares: Array(9).fill(null), lastMove: null },
//   ])
//   const [currentMove, setCurrentMove] = useState(0)
//   const [isAscending, setIsAscending] = useState(true)
//   const currentSquares = history[currentMove].squares
//   const xIsNext = currentMove % 2 === 0

//   function handlePlay(nextSquares, lastMove) {
//     const nextHistory = [
//       ...history.slice(0, currentMove + 1),
//       { squares: nextSquares, lastMove },
//     ]
//     setHistory(nextHistory)
//     setCurrentMove(nextHistory.length - 1)
//   }

//   function handleSortToggle() {
//     setIsAscending(!isAscending)
//   }

//   function jumpTo(nextMove) {
//     setHistory(history.slice(0, nextMove + 1))
//     setCurrentMove(nextMove)
//   }

//   let moves = history.map((step, move) => {
//     let description
//     if (move > 0) {
//       const row = Math.floor(step.lastMove / 3) + 1
//       const col = (step.lastMove % 3) + 1

//       description =
//         "Go to move #" + move + " (ligne: " + row + ",colonne:" + col + ")"
//     } else {
//       description = "Go to game start"
//     }

//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{description}</button>
//       </li>
//     )
//   })

//   if (!isAscending) {
//     moves.reverse()
//   }

//   return (
//     <>
//       <div className="game">
//         <div className="game-board">
//           <Board
//             xIsNext={xIsNext}
//             squares={currentSquares}
//             onPlay={handlePlay}
//           />
//         </div>
//         <div className="game-info">
//           <button onClick={handleSortToggle}>
//             {isAscending ? "Sort Descending" : "Sort Ascending"}
//           </button>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//       <img src={logo} className="App-logo" alt="logo" />
//     </>
//   )
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ]
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i]
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a]
//     }
//   }
//   return null
// }
//#endregion

//#region Thinking in REACT
// function ProductCategoryRow({ category }) {
//   return (
//     <tr>
//       <th colSpan="2">{category}</th>
//     </tr>
//   )
// }

// function ProductRow({ product }) {
//   const name = product.stocked ? (
//     product.name
//   ) : (
//     <span style={{ color: "red" }}>{product.name}</span>
//   )

//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{product.price}</td>
//     </tr>
//   )
// }

// function ProductTable({ products, filterText, inStockOnly }) {
//   const rows = []
//   let lastCategory = null

//   products.forEach((product) => {
//     if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
//       return
//     }

//     if (inStockOnly && !product.stocked) {
//       return
//     }

//     if (product.category !== lastCategory) {
//       rows.push(
//         <ProductCategoryRow
//           category={product.category}
//           key={product.category}
//         />
//       )
//     }
//     rows.push(<ProductRow product={product} key={product.name} />)
//     lastCategory = product.category
//   })

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>{rows}</tbody>
//     </table>
//   )
// }

// function SearchBar({
//   filterText,
//   inStockOnly,
//   onFilterTextChange,
//   onInStockOnlyChange,
// }) {
//   return (
//     <form>
//       <input
//         type="text"
//         value={filterText}
//         placeholder="Search..."
//         onChange={(e) => onFilterTextChange(e.target.value)}
//       />
//       <label>
//         <input
//           type="checkbox"
//           checked={inStockOnly}
//           onChange={(e) => onInStockOnlyChange(e.target.checked)}
//         />{" "}
//         Only show products in stock
//       </label>
//     </form>
//   )
// }

// function FilterableProductTable({ products }) {
//   const [filterText, setFilterText] = useState("")
//   const [inStockOnly, setInStockOnly] = useState(false)

//   return (
//     <div>
//       <SearchBar
//         filterText={filterText}
//         inStockOnly={inStockOnly}
//         onFilterTextChange={setFilterText}
//         onInStockOnlyChange={setInStockOnly}
//       />
//       <ProductTable
//         products={products}
//         filterText={filterText}
//         inStockOnly={inStockOnly}
//       />
//     </div>
//   )
// }

// const PRODUCTS = [
//   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
//   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
//   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
// ]

// function ThinkingInReact() {
//   return <FilterableProductTable products={PRODUCTS} />
// }

//#endregion
