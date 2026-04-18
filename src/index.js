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
    return -1;
  }

  const years = father - 2 * son;
  return years;
}

/**
 *
 * @param {number} years
 * @returns {string}
 */

function formatResult(years) {
  if (years === -1) {
    return "Некоректні дані";
  }

  const abs = Math.abs(years);
  let word;

  switch (true) {
    case abs % 10 === 1 && abs % 100 !== 11:
      word = "рік";
      break;
    case abs % 10 >= 2 && abs % 10 <= 4 && (abs % 100 < 10 || abs % 100 >= 20):
      word = "роки";
      break;
    default:
      word = "років";
  }

  if (years > 0) {
    return `Через ${years} ${word} батько буде вдвічі старший за сина.`;
  } else if (years < 0) {
    return `Вже ${Math.abs(years)} ${word} тому батько був вдвічі старший за сина.`;
  } else {
    return "Батько зараз вдвічі старший за сина.";
  }
}

console.log(formatResult(yearsToDoubleAge(47, 18)));
console.log(formatResult(yearsToDoubleAge(40, 20)));
console.log(formatResult(yearsToDoubleAge(30, 15)));
console.log(formatResult(yearsToDoubleAge(45, null)));
console.log(formatResult(yearsToDoubleAge(45, "")));
