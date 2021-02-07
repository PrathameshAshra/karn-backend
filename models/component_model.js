
const mongoose = require("mongoose");

const ComponentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  inputParamName: {
    type: String
  },
  inputParamDescription: {
    type: String
  },
  inputParamValue: {
    type: String
  },
  outPutParamName: {
    type: String
  },
 
  outPutParamValue: {
    type: String
  },
  outPutParamDescription: {
    type: String
  },
  lifeCycle:[],
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
  isGlobal: {
    type: Boolean,
    default: false
  }

});

// export model user with ComponentSchema
module.exports = mongoose.model("component", ComponentSchema);