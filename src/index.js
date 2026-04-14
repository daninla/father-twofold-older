"use strict";

/**
 * @param {number} father
 * @param {number} son 
 * @returns {number} 
 */

function yearsToDoubleAge(father, son) {
  if (arguments < 0 || father < son || father - son < 15) {
    return NaN;
  }

  return father - 2 * son;
}

function formatResult(years) {

  const abs = Math.abs(years);

  const word =
    abs === 1 ? "рік" :
    abs >= 2 && abs <= 4 ? "роки" :
    "років";

  if (years === 0) {
    return "Батько зараз вдвічі старший за сина";
  }

  if (years > 0) {
    return `Батько буде вдвічі старший за сина через ${abs} ${word}`;
  }

  return `Батько був вдвічі старший за сина ${abs} ${word} тому`;
}

console.log(formatResult(yearsToDoubleAge(40, 10)));