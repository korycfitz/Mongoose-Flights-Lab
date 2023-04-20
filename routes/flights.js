import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET localhost:3000/flights
router.get('/', flightsCtrl.index)
// GET /flights/new
router.get('/new', flightsCtrl.new)
router.get('/:flightId', flightsCtrl.show)
// localhost:3000/flights/:flightId/edit
router.get('/:flightId/edit', flightsCtrl.edit)
// POST /flights
router.post('/', flightsCtrl.create)
router.post('/:flightId/tickets', flightsCtrl.createTicket)
// localhost:3000/flights/:flightId
router.delete('/:flightId', flightsCtrl.delete)
// localhost:3000/flights/:flightId
router.put('/:flightId', flightsCtrl.update)
router.post('/:flightId/meals', flightsCtrl.addToMeals)

export { 
  router 
}
