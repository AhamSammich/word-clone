import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessSlots from "../GuessSlots/GuessSlots";

function GuessResults({ guesses, answer }) {

  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => (
        <p key={index} className="guess">
          <GuessSlots guess={guesses[index]} answer={answer} />
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
