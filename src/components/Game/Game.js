import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameResult, setGameResult] = React.useState("");

  function checkAnswer() {
    if (gameResult) return;
    const lastGuess = guesses.at(-1);
    if (lastGuess === answer) {
      setGameResult("win");
    } else if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameResult("lose");
    }
  }

  function addGuess(guess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) return;
    console.log({ guess });
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
  }

  checkAnswer();

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} gameResult={gameResult} />
    </>
  );
}

export default Game;
