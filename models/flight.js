const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: Date
}, { timestamps: true });


const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },
        flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },
    airport: { 
        type: String,
        enenum: ['American', 'Southwest', 'United']
    },
    depart: {
        type: Date,
        default: new Date(), 
        required: true,
        minYear: '2020'

    },
    arrival: {
        type: Date,
        required: true

    },
    destinations: [destinationSchema]
}, {

})



module.exports = mongoose.model('Flight', flightSchema);


