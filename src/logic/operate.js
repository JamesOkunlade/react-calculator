import React from 'react';
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  numberOne = new Big(numberOne);
  numberTwo = new Big(numberTwo);

  switch (operation) {
    case "+":
      return numberOne.plus(numberTwo).toString();
      break;

    case "-":
      return numberOne.minus(numberTwo).toString();
      break;

    case "X":
      return numberOne.times(numberTwo).toString();
      break;

    case "/":
      return numberOne.div(numberTwo).toString();
      break;

    case "%":
      return numberOne.mod(numberTwo).toString();
      break;

    default:
      console.log("Unknown operation");

  }

}


export default operate;
