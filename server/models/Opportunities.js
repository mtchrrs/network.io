const mongoose = require('mongoose');

const { Schema } = mongoose;

const oppSchema = new Schema({
  oppOneTitle: {
    type: String,
    required: true,
  },
  oppOneDescr: {
    type: String,
    required: true,
  },
  oppTwoTitle: {
    type: String,
    required: true,
  },
  oppTwoDescr: {
    type: String,
    required: true,
  },
  oppThreeTitle: {
    type: String,
    required: true,
  },
  oppThreeDescr: {
    type: String,
    required: true,
  },  
});

const Opportunities = mongoose.model('Opportunities', oppSchema);

module.exports = Opportunities;
