import db from "../db";

var TodoSchema   = {
  title: {type : String, default: ""},
  complete: { type: Boolean, default: false }
};

// Export the model
module.exports = new db('Todo', TodoSchema, {});