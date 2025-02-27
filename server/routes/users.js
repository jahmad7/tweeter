"use strict";

const express       = require('express');
const userRoute  = express.Router();

module.exports = function(DataHelpers) {

  userRoute.get("/", function(req, res) {
    DataHelpers.getTweets((err, contribution) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(contribution);
      }
    });
  });

  userRoute.post("/", function(req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
  

    const userInformation = {
      user: req.body.userName,
      title: req.body.title,
      password: req.body.password,
      account_create: today
    };

    DataHelpers.saveValue(userInformation, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send();
      }
    });
  });

  return userRoute;

}