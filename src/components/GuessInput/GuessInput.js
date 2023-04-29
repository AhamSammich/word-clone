import React from "react";
import Banner from "../GameOverBanner/GameOverBanner";

function GuessInput({ addGuess, gameResult }) {
  const [word, setWord] = React.useState("");
  const gameOver = !!gameResult;

  function handleSubmit(ev) {
    ev.preventDefault();
    addGuess(word);
    setWord("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      {gameOver ? (
        <Banner gameResult={gameResult} />
      ) : (
        <input
          id="guess-input"
          type="text"
          pattern="[A-Z]{5}"
          placeholder="5-letter word..."
          autoFocus
          autoComplete="new-password"
          disabled={gameOver}
          name="guess-input"
          value={word}
          onChange={(ev) => setWord(ev.target.value.toUpperCase())}
        />
      )}
    </form>
  );
}

export default GuessInput;
