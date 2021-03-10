// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
  selectAll(cb) {
    orm.selectAll('burgers', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  createOne(cols, vals, cb) {
    orm.createOne('burgers', cols, vals, (res) => cb(res));
  },

  updateOne(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
  },
};

// Export the database functions
module.exports = burger;
