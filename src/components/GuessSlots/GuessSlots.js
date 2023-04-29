import React from "react";
import { range } from "../../utils";

function GuessSlots({ letterArr = [] }) {
  return (
    <>
      {range(0, 5).map((index) => {
        const letterData = letterArr?.[index];  // { letter, status }
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
