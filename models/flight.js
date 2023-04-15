import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const movieSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number, 
  departs: Date
}, {
  //going to need for the data: 1 year from the date that it is created 
  timestamps: true,
})

const Movie = mongoose.model('Movie'. movieSchema)

export {
  Movie
}