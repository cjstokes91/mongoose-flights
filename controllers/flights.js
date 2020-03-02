const Flight = require('../models/flight'); 
const Ticket = require('../models/ticket');

module.exports = { 
    index,
    new: newFlight,
    create,
    show,
    delete: deleteFlight
};
function deleteFlight(req,res) { 
    Flight.findOneAndDelete((req.params.id), function(err,result){
        res.redirect('/flights');
    })
}

function show(req,res){ 
    Flight.findById(req.params.id).populate('tickets').exec(function(err,flight){
        Ticket.find({flight: flight._id}, function(err,tickets){
            res.render('flights/show', {flightHeader: `Flight Number ${flight.flightNo} Details:`, flight,
        tickets});
        });
    });
}

function index(req, res) { 
    Flight.find({}, function(err, flights){
        res.render('flights/index', {flights}); 
    });
    }
function newFlight(req, res) { 
    res.render('flights/new')
}

    function create(req, res) {
        for (let key in req.body) {
            req.body[key] = req.body[key];
        }
        const flight = new Flight(req.body);
        flight.save(function(err){
            if (err) return res.render('flights/index');
            res.redirect('/flights')
        })
}
