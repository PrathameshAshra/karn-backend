
//FILENAME : User.js

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  githubLink: {
    type: String,
  },
  jobRole: {
    type: String,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  isActive: {
    type: Boolean,
    default: null
  }

});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);