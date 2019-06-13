"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newContribution, callback) {
      db.collection("pollination").insertOne(newContribution, (err, result) => {
        callback(err, result);
      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      db.collection("pollination").find().toArray((err, result) => {
        callback(err, result);
      });
    }

  };
}
