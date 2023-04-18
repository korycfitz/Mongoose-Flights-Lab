import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET /movies/new
router.get('/new', flightsCtrl.new)
// POST /movies
router.post('/', flightsCtrl.create)

export { 
  router 
}
