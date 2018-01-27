const Artist = require('../models/artist');

/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 * like this: {all: [artists], count: count, offset: offset, limit: limit}
 */
module.exports = (criteria, sortProperty, offset = 0, limit = 20) => {  
  /* es 5 syntax
  const sortProperty = "name";  
  const sortOrder = {};
  sortOrder[sortProperty] = 1;
  console.log(sortOrder); //{name: 1}
  */

  //console.log(criteria);

  //validate filters data
  const ageMin = typeof criteria.age !== 'undefined' ? criteria.age.min : 0;
  const ageMax = typeof criteria.age !== 'undefined' ? criteria.age.max : 100000;
  const yearsActiveMin = typeof criteria.yearsActive !== 'undefined' ? criteria.yearsActive.min : 0;
  const yearsActiveMax = typeof criteria.yearsActive !== 'undefined' ? criteria.yearsActive.max : 100000;
  const searchObj = criteria.name === '' ? {} : { $text: { $search: criteria.name } };

  const query = Artist.find(searchObj)
    .where('age').gte(ageMin).lte(ageMax)
    .where('yearsActive').gte(yearsActiveMin).lte(yearsActiveMax)
    .sort({ [sortProperty]: 1 }) //es6 syntax: interpolated keyword
    //note that sort is camel case, uppercase is sorted first, then lowercase
    .skip(offset)
    .limit(limit);

  return Promise.all([query, Artist.find(searchObj)
    .where('age').gte(ageMin).lte(ageMax)
    .where('yearsActive').gte(yearsActiveMin).lte(yearsActiveMax).count()])
    .then((results) => {
      console.log(results[0]);
      return {
        all: results[0],
        count: results[1],
        offset,
        limit
      };
    });
};

/*solution
const buildQuery = (criteria) => {
  const query = {};

  if (criteria.name) {
    query.$text = { $search: criteria.name };
  }

  if (criteria.age) {
    query.age = {
      $gte: criteria.age.min,
      $lte: criteria.age.max
    };
  }

  if (criteria.yearsActive) {
    query.yearsActive = {
      $gte: criteria.yearsActive.min,
      $lte: criteria.yearsActive.max
    };
  }
};

const query = Artist.find(buildQuery(criteria))
  .sort...
*/
