/** Schema for test data
  */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var testSchema = new Schema({
	name: String
})

module.exports.testSchema = testSchema;