'use strict';


const inc = (obj) => {
    if (typeof obj === 'object') {
      obj.n++;
    }
  };
const object = { n:5,}
inc(object);
module.exports = { inc };
