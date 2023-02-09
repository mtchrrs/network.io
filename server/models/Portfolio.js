const mongoose = require('mongoose');

const { Schema } = mongoose;

const portSchema = new Schema({
    edOneTitle: {
        type: String,
        required: true,
    },
    edOneDescr: {
        type: String,
        required: true,
    },
    edTwoTitle: {
        type: String,
        required: true,
    },
    edTwoDescr: {
        type: String,
        required: true,
    },
    exOneTitle: {
        type: String,
        required: true,
    },
    exOneDescr: {
        type: String,
        required: true,
    }, 
    exTwoTitle: {
        type: String,
        required: true,
    },
    exTwoDescr: {
        type: String,
        required: true,
    },
    skillOne: {
        type: String,
        required: true,
    },
    skillTwo: {
        type: String,
        required: true,
    },
    skillThree: {
        type: String,
        required: true,
    },
});

const Portfolio = mongoose.model('Portfolio', portSchema);

module.exports = Portfolio;
