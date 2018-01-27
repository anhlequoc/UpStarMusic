const Artist = require('../models/artist');

/**
 * Deletes a single artist from the Artists collection
 * @param {string} _id - The ID of the artist to delete.
 * @return {promise} A promise that resolves when the record is deleted
 */
module.exports = (_id) => {
  /**dont use this way
   return Artist.findById(_id)
          .then((artist) => artist.remove());
   *  vì nó phải dùng 2 câu query vào db
  */
  return Artist.remove({ _id });
};
