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
  const PollinationDataHelpers = require("./lib/data-helpers.js")(dataBase, "pollination");
  const UserDataHelpers = require("./lib/data-helpers.js")(dataBase, "userData");

 // **** ROUTES for working on the database using different helper functions

 //contributions router 
  const contributionRouter = require("./routes/contributions")(PollinationDataHelpers);
  const userRouter = require("./routes/users")(UserDataHelpers);

  // **** Mount
  app.use("/users", userRouter)
  app.use("/", contributionRouter);

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });
});

  
