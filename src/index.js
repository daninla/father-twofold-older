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
  return father >= 0 && sun >= 0 && father >= sun && father - sun >= 15;
};

/**
 * Обчислює через скільки років батько буде (або був)
 * вдвічі старший за сина
 * 
 * @param {number} father - поточний вік батька
 * @param {number} sun - поточний вік сина
 * @returns {number} кількість років:
 *  > 0 — через скільки років
 *  < 0 — скільки років тому
 *  = 0 — зараз
 *  NaN — якщо дані некоректні
 */
const funcCalculate = function (father, sun) {
  if (!isValidParams(father, sun)) return NaN;

  let result = 0;

  const calculate = function (f, s) {
    if (currentResult(f, s) > 2) {
      result++;
      return calculate(f + 1, s + 1);
    } else if (currentResult(f, s) < 2) {
      result--;
      return calculate(f - 1, s - 1);
    } else {
      return result; 
    }
  };

  return calculate(father, sun);
};

const formatResult = function (years) {
  if (isNaN(years)) return "Некоректні дані";

  if (years === 0) return "Батько зараз вдвічі старший за сина.";
  if (years > 0) return `Через ${years} років...`;

  return `${Math.abs(years)} років тому...`;
};


formatResult(funcCalculate(40, 15));