import React from "react";

const NumbersTable = (props) => {
  const numbers = [];
  for (let i = 1; i <= props.limit; i++) {
    numbers.push(i);
  }

  const numeros = numbers.map((num) => {
    if (num % 2 === 0) {
      return <p className="number"> {num} </p>;
    } else {
      return <p className="evennumber"> {num} </p>;
    }
  });

  return <div className="numbergrid">{numeros}</div>;
};
export default NumbersTable;
