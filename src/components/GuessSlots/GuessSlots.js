import React from "react";
import { range } from "../../utils";

function GuessSlots({ word = "" }) {
  let letters = word ? [...word] : [];
  return (
    <>
      {range(0, 5).map((index) => (
        <span key={index} className="cell">
          {letters[index]}
        </span>
      ))}
    </>
  );
}

export default GuessSlots;
