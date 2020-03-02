const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


const ticketSchema = new Schema({ 
    seat: {
        type: String, 
        match: /[A-f][1-9]\d?/
    },
    price: Number, 
}, 
{timeStamps: true}
);

module.exports = mongoose.model('Ticket', ticketSchema); 
