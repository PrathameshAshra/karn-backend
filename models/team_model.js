
const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  users:[],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  createdBy: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: null
  },


});

// export model  TeamSchema
module.exports = mongoose.model("team", TeamSchema);