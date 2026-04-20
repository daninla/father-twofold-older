"use strict";

/**
 * @param {number} father
 * @param {number} son
 * @returns {number}
 */

function yearsToDoubleAge(father, son) {
  if (
    typeof father !== "number" ||
    typeof son !== "number" ||
    son < 0 ||
    father < 0 ||
    father - son < 15
  ) {
    return NaN;
  }

  return father - 2 * son;
}

/**
 *
 * @param {number} years
 * @returns {string}
 */

function formatResult(years) {
  if (isNaN(years)) {
    return "Некоректні дані";
  }

  const abs = Math.abs(years);
  let word;

  if (abs < 11 || abs > 14) {
    switch (String(years).slice(-1)) {
      case "1":
        word = "рік";
        break;
      case "2":
      case "3":
      case "4":
        word = "роки";
        break;
      default:
        word = "років";
    }
  }

  if (years > 0) {
    return `Через ${years} ${word} батько буде вдвічі старший за сина.`;
  } else if (years < 0) {
    return `${Math.abs(years)} ${word} тому батько був вдвічі старший за сина.`;
  } else {
    return "Батько зараз вдвічі старший за сина.";
  }
}

console.log(formatResult(yearsToDoubleAge(41, 21)));
console.log(formatResult(yearsToDoubleAge(40, 20)));
console.log(formatResult(yearsToDoubleAge(30, 15)));
console.log(formatResult(yearsToDoubleAge(45, null)));
console.log(formatResult(yearsToDoubleAge(45, "")));
