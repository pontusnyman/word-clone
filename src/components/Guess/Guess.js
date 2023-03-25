import React from "react";

import { range } from '../../utils';


function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((num, index) => (
        <span key={num} className="cell">
          {value ? value[index] : undefined}
        </span>
      ))}
  </p>
  )
}

export default Guess;
