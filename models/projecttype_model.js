
const mongoose = require("mongoose");

const ProjectTypeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
 

});

// export model  ProjectTypeSchema
module.exports = mongoose.model("projectType", ProjectTypeSchema);