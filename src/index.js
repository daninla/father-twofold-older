"use strict";

/**
 * Обчислює співвідношення віків
 * @param {number} father
 * @param {number} sun
 * @returns {number}
 */
const currentResult = function (father, sun) {
  return father / sun;
};

/**
 * Перевіряє коректність параметрів
 * @param {number} father
 * @param {number} sun
 * @returns {boolean}
 */
const isValidParams = function (father, sun) {
  return father > 0 && sun > 0 && father >= sun && father - sun >= 15;
};

/**
 * Обчислює через скільки років батько буде вдвічі старший за сина
 * @param {number} father - поточний вік батька
 * @param {number} sun - поточний вік сина
 * @returns {number} кількість років або NaN якщо параметри некоректні
 */
const funcCalculate = function (father, sun) {
  if (!isValidParams(father, sun)) return NaN;

  let result = 0;

  const calculate = function (f, s, older) {
    result++;
    if (currentResult(f, s) > 2) {
      older = true;
      return calculate(f + 1, s + 1);
    } else if (currentResult(f, s) < 2) {
      older = false;
      return calculate(f - 1, s - 1);
    } else {
      if (result - 1 === 0) {
        return `Батько зараз вдвічі старший за сина.`;
      }
      return older
        ? `Через ${result - 1} років батько буде вдвічі старший за сина.`
        : `${result - 1} років тому батько був вдвічі старший за сина.`;
    }
  };

  return calculate(father, sun, null);
};

console.log(funcCalculate(10, 15));
