const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    name: {
        type: String,
        required: true,

    },

    airport: {
        type: String,
        default: 'DEN',
        enum: ['DEN', 'DFW', 'AUS', 'LAX', 'SAN']

    },

    arrival: {
        type: Date,
        required: true,
        minYear: '2020'
    },
})



const flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        required: true,
        minYear: '2020'

    },
    arrival: {
        type: Date,
        required: true

    },
    destinations: [destinationSchema]
})



module.exports = mongoose.model('Flight', flightSchema);


