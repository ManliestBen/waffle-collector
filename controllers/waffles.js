import { Waffle } from "../models/waffle.js"
import { Profile } from "../models/profile.js"
import { Topping } from "../models/topping.js"

function newWaffle(req, res) {
  res.render('waffles/new')
}

export {
  newWaffle as new
}