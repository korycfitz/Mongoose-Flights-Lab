import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET localhost:3000/flights
router.get('/', flightsCtrl.index)
// GET /flights/new
router.get('/new', flightsCtrl.new)
// POST /flights
router.post('/', flightsCtrl.create)
router.get('/:flightId', flightsCtrl.show)
// localhost:3000/flights/:flightId
router.delete("/:flightId", flightsCtrl.delete)
// localhost:3000/flights/:flightId/edit
router.get("/:flightId/edit", flightsCtrl.edit)
// localhost:3000/flights/:flightId
router.put("/:movieId", flightsCtrl.update)

export { 
  router 
}
