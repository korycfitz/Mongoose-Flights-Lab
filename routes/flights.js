import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET localhost:3000/movies
router.get('/', flightsCtrl.index)
// GET /movies/new
router.get('/new', flightsCtrl.new)
// POST /movies
router.post('/', flightsCtrl.create)
router.get('/:flightId', flightsCtrl.show)
// localhost:3000/movies/:movieId
router.delete("/:flightId", flightsCtrl.delete)
// localhost:3000/movies/:movieId/edit
router.get("/:flightId/edit", flightsCtrl.edit)

export { 
  router 
}
