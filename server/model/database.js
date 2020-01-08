/** Handles MongoDB connection via Mongoose. 
  * Export layer for data models.
  */
var mongoose = require("mongoose");
var TestModels = require("./models/test");
var config = require("../config.json");

// Set Mongoose to use native JS promises
mongoose.Promise = Promise;

// Connect to mlab MongoDB
const server = "mongodb+srv://"+config.db_username+":"+config.db_password+"@cluster0-q5ov6.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(server, { useNewUrlParser: true, dbName: "testdb" });

// Check if connection is successful
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(callback){
	console.log("MongoDB connection succeeded.");
});

// Export data models
var TestModel = mongoose.model("TestModel", TestModels.testSchema);

module.exports.TestModel = TestModel;
