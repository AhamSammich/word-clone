import React from "react";

function GuessInput({ addGuess }) {
  const [word, setWord] = React.useState("");
  
  function handleSubmit(ev) {
    ev.preventDefault();
    addGuess(word);
    setWord("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Z]{5}"
        placeholder="5-letter word..."
        autoFocus
        autoComplete="new-password"
        name="guess-input"
        value={word}
        onChange={(ev) => setWord(ev.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
