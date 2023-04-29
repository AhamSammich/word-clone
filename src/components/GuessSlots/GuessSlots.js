import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessSlots({ guess, answer }) {
  let result = guess ? checkGuess(guess, answer) : [];
  return (
    <>
      {range(0, 5).map((index) => {
        const letterData = result[index];  // { letter, status }
        const className = `cell ${letterData ? letterData.status : ""}`; 
        return (
          <span key={index} className={className}>
            {letterData?.letter}
          </span>
        );
      })}
    </>
  );
}

export default GuessSlots;
