import mongoose from 'mongoose'

const toppingSchema = new mongoose.Schema({
  name: String,
}, {
  timestamps: true
})

const Topping = mongoose.model('Topping', toppingSchema)

export {
  Topping
}
