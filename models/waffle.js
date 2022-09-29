import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  content: String,
  reviewer: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}
})

const waffleSchema = new mongoose.Schema({
  description: String,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'},
  reviews: [reviewSchema],
  toppings: [{type: mongoose.Schema.Types.ObjectId, ref: 'Topping'}]
}, {
  timestamps: true
})

const Waffle = mongoose.model('Waffle', waffleSchema)

export {
  Waffle
}
