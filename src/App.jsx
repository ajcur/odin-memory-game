import { useState } from "react";
import { CharacterCard } from "./CharacterCard.jsx";
import "./App.css";

function App() {
  const [alreadyClicked, setAlreadyClicked] = useState([]);
  const [highscore, setHighscore] = useState(0);

  let score = alreadyClicked.length;
  if (score > highscore) {
    setHighscore(score);
  }

  const characters = [
    "Ambessa",
    "Caitlyn",
    "Ekko",
    "Heimerdinger",
    "Jayce",
    "Jinx",
    "Mel",
    "Sevika",
    "Vander",
    "Vi",
    "Viktor",
  ];

  const characterCards = characters.map((name) => (
    <CharacterCard
      key={name}
      name={name}
      onClick={() => handleCardClick(name)}
    />
  ));

  let order = [...Array(characters.length).keys()]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  function handleCardClick(name) {
    alreadyClicked.indexOf(name) === -1
      ? setAlreadyClicked(alreadyClicked.concat([name]))
      : setAlreadyClicked([]);
  }

  return (
    <>
      <div className="header">
        <img
          className="title-logo"
          alt="Arcane"
          src="https://www.themoviedb.org/t/p/original/jXLNOzeEA8AoJy92dJTUUZXTMxK.png"
        />
        <h1>Memory Card Game</h1>
        <div className="scoreboard">
          <div className="score">
            <strong>Current Score:</strong> {score}
          </div>
          <div className="highscore">
            <strong>Highscore:</strong> {highscore}
          </div>
        </div>
      </div>
      <div className="card-container">
        {order.map((index) => characterCards[index])}
      </div>
    </>
  );
}

export default App;
