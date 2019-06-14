"use strict";

// mongoDb Set up
const MongoClient = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017";


// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


//connecting to mongoDB driver to get the client
MongoClient.connect(MONGODB_URI, (err,client) =>{
  if(err){
      console.error(`failed to connect: ${MONGODB_URI}`);
      throw err;
  }

  // ==> we have a connection to the  db,
  console.log(`Connected to mongodb client: ${MONGODB_URI}`);

  //get the database from the client 
  const dataBase = client.db("necter");


  //call datahelpers functions to get the helpers object for the database 
  const DataHelpers = require("./lib/data-helpers.js")(dataBase);

 // **** ROUTES for working on the database using different helper functions

 //tweets router 
  const contributionRouter = require("./routes/tweets")(DataHelpers);

  //users router

  // **** Mount

  //app.use("/users", user)
  app.use("/tweets", contributionRouter);

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });
});

  
