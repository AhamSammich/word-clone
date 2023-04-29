import React from "react";

function Banner({ gameResult }) {
  const isWinner = gameResult === "win";
  const className = `${isWinner ? "happy" : "sad"} banner`;
  const winMessage = (
    <>
      <strong>Congratulations!</strong> Got it in <strong>3 guesses</strong>.
    </>
  );
  const loseMessage = (
    <>
      <p>
        Sorry, the correct answer is <strong>LEARN</strong>.
      </p>
    </>
  );
  return (
    <div className={className}>
      <p>{isWinner ? winMessage : loseMessage}</p>
    </div>
  );
}

export default Banner;
