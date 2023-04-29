import React from "react";

function GameOverBanner({ children, numOfGuesses, gameResult, answer }) {
  const isWinner = gameResult === "win";
  const className = `${isWinner ? "happy" : "sad"} banner`;
  const winMessage = (
    <>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>{numOfGuesses} guesses</strong>.
    </>
  );
  const loseMessage = (
    <>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </>
  );
  return (
    <div className={className}>
      <p>{isWinner ? winMessage : loseMessage}</p>
      {children}
    </div>
  );
}

export default GameOverBanner;
