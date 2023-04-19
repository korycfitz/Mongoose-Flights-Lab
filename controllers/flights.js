import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: 'All Flights'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

function show(req, res) {
  Flight.findById(req.params.flightId)
  .then(flight => {
    res.render('flights/show', { 
      title: 'Flight Details', 
      flight: flight
    })    
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}
function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.flightId)
  .then(flight => {
    res.redirect("/flights")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/flights")
  })
}

function edit(req, res) {
  Flight.findById(req.params.movieId)
  .then(flight => {
    res.render("flights/edit", {
      flight: flight,
      title: "Edit Flight"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}


export{
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  edit,
}