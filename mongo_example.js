"use strict";

const MongoClient = require("mongodb")
const MONGODB_URI = "mongodb://localhost:27017/necter";

MongoClient.connect(MONGODB_URI, (err,db) =>{
    if(err){
        console.error(`failed to connect: ${MONGODB_URI}`);
        throw err;
    }

    // ==> we have a connection to the "test-tweets" db,
    //starting here.
    console.log(`Connected to mongodb: ${MONGODB_URI}`);

    // ==> in typical node -callback style, any program
    //  logic that need to use the connection needs to be 
    //  invoked from within here 

    // GET ALL DOCUMENTS
    function getContributions(callback){
        db.collection("pollination").find().toArray(callback);
    }

    getContributions((err, result) =>{
        if (err) throw err;

        console.log("db: ", result);

    });
    //
    //
    // Another way to say: this is an entry point for a database
    // -connected applicaton.

    //==> At the end, we close the connection;
    db.close();
});
