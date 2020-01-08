var mongoose = require("mongoose");
var TestModels = require("./models/test");
var config = require("../config.json");

const server = "mongodb+srv://"+config.db_username+":"+config.db_password+"@cluster0-q5ov6.mongodb.net/test?retryWrites=true&w=majority";
mongoose.Promise = Promise;

mongoose.connect(server, { useNewUrlParser: true, dbName: "testdb" });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(callback){
	console.log("MongoDB connection succeeded.");
});

var TestModel = mongoose.model("TestModel", TestModels.testSchema);

module.exports.TestModel = TestModel;
