const Flight = require('../models/flight'); 

module.exports = { 
    new: newFlight,
    create,
    index,
    show
};

function index(req, res) { 
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights' , flights});
    });
    
}

function newFlight(req, res) { 
    res.render('flights/new', {title: 'Add New Flight' }); 
}
function create(req, res) { 
    const flight = new Flight(req.body);

    flight.save(function(err) { 
        if(err) {
            console.log(err)
            res.redirect('/flights/new')
        } else {
            res.redirect('/flights')
        }
    });


// function show(req, res) { 
//     res.render('/:id/show', flights)
//     Flight.findById(req.params.id) 
//     flight. Flight.getOne(req.params.id);
// }
// }


function show(req, res) {
    res.render('flights/show', {
        flight: Flight.getOne(req.params.id),
      });
    }
}