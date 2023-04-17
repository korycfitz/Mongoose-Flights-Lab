import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {type: String, enum: ['American', 'Southwest', 'United']},
  airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN'},
  flightNo: {type: Number, min: 10, max: 9999},
  departs: {
    type: Number, 
    default: function() {
      let dt = new Date();
      dt.setTime(dt.getTime()+dt.getTimezoneOffset()*60*1000);
      let offset = -300; //Timezone offset for EST in minutes.
      let estDate = new Date(dt.getTime() + offset*60*1000);
      return estDate //Gives date in est. Need to add 1 year
    }
  },
}, {
  //going to need for the data: 1 year from the date that it is created 
  timestamps: true,
})

const Flight = mongoose.model('Flight'. flightSchema)

export {
  Flight
}