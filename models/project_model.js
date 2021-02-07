
const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  teams: {
    type: [],
  },
  tags: {
    type: []
  },
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
  }

});

// export model user with ProjectSchema
module.exports = mongoose.model("product", ProjectSchema);