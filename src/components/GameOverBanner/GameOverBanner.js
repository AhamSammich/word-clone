import React from "react";

function Banner({ children, numOfGuesses, gameResult }) {
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
      Sorry, the correct answer is <strong>LEARN</strong>.
    </>
  );
  return (
    <div className={className}>
      <p>{isWinner ? winMessage : loseMessage}</p>
      {children}
    </div>
  );
}

export default Banner;
