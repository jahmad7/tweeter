"use strict";

// Defines helper functions for saving and getting values from the database, using the database `db`
module.exports = function makeDataHelpers(db, selectedCollection) {
  return {

    // Saves a value to `db`
    saveValue: function(newValue, callback) {
      db.collection(selectedCollection).insertOne(newValue, (err, result) => {
        callback(err, result);
      });
    },

    // Get all values in `db`, sorted by newest first
    getValues: function(callback) {
      db.collection(selectedCollection).find().toArray((err, result) => {
        callback(err, result);
      });
    }

  };
}
