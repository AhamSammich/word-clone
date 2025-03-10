import React from "react";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import GuessSlots from "../GuessSlots/GuessSlots";
import VisualKeyboard from "../VisualKeyboard/VisualKeyboard";
import GameOverBanner from "../GameOverBanner/GameOverBanner";

function Game() {
  const [answer, setAnswer] = React.useState(generateAnswer);
  const [guesses, setGuesses] = React.useState([]);
  const [gameResult, setGameResult] = React.useState("");
  const [letterStatus, setLetterStatus] = React.useState({});
  const gameOver = !!gameResult;

  function generateAnswer() {
    const answer = sample(WORDS);
    console.info({ answer });
    return answer;
  }

  function resetGame() {
    setAnswer(generateAnswer);
    setGuesses([]);
    setGameResult("");
    setLetterStatus({});
  }

  function checkAnswer() {
    if (gameResult) return;
    const lastGuess = guesses.at(-1);
    if (lastGuess === answer) {
      setGameResult("win");
    } else if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameResult("lose");
    }
  }

  function getLetterArr(guess) {
    if (!guess) return [];
    const letterArr = checkGuess(guess, answer);
    return letterArr;
  }

  function updateLetterStatus(guess) {
    const letterArr = getLetterArr(guess);
    if (letterArr.length === 0) return;

    const newLetterStatus = structuredClone(letterStatus);
    for (let elem of letterArr) {
      newLetterStatus[elem.letter] = elem.status;
    }
    setLetterStatus(newLetterStatus);
  }

  function addGuess(guess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) return;
    console.info({ guess });
    const newGuesses = [...guesses, guess];
    updateLetterStatus(guess);
    setGuesses(newGuesses);
  }

  checkAnswer();

  return (
    <>
      <GuessResults>
        {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => (
          <p key={index} className="guess">
            <GuessSlots letterArr={getLetterArr(guesses[index])} />
          </p>
        ))}
      </GuessResults>
      <GuessInput addGuess={addGuess} gameOver={gameOver} />
      <VisualKeyboard letterStatus={letterStatus} />
      {gameOver && (
        <GameOverBanner
          numOfGuesses={guesses.length}
          gameResult={gameResult}
          answer={answer}
        >
          <button className="reset-button" onClick={resetGame}>
            Play Again
          </button>
        </GameOverBanner>
      )}
    </>
  );
}

export default Game;
