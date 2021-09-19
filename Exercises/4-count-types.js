'use strict';

const countTypesInArray = (arr) => {
    const counters = {};
    for (const element of arr) {
      const type = typeof element;
      const count = counters[type] || 0;
      counters[type] = count + 1;
    }
    return counters;
  };

const mass =[true, 'hello', 5, 12, -200, false, false, 'word'];

console.dir(countTypesInArray(mass));

module.exports = { countTypesInArray };
