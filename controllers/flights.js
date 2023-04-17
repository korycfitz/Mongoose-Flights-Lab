import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function create(req, res) {
  console.log(req.body)
  // req.body.nowShowing = !!req.body.nowShowing
  // if (req.body.cast) {
  //   req.body.cast = req.body.cast.split(', ')
  // }
  // for (let key in req.body) {
  //   if (req.body[key] === '') delete req.body[key]
  // }
  // Flight.create(req.body)
  // .then(movie => {
  //   res.redirect('/movies')
  // })
  // .catch(err => {
  //   console.log(err)
  //   res.redirect('/movies/new')
  // })
}

export{
  newFlight as new,
  create,
}