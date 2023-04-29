import React from "react";

const KEYS = [[..."QWERTYUIOP"], [..."ASDFGHJKL"], [..."ZXCVBNM"]];

function VisualKeyboard({ letterStatus }) {

  return (
    <div className="keyboard">
      {KEYS.map((keyRow, index) => (
        <div key={index} className="key-row">
          {keyRow.map((keyLetter) => (
            <div
              key={keyLetter}
              className={`key-letter ${letterStatus[keyLetter]}`}
            >
              {keyLetter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default VisualKeyboard;
