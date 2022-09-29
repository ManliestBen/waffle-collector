import { Waffle } from "../models/waffle.js"
import { Profile } from "../models/profile.js"
import { Topping } from "../models/topping.js"

function newWaffle(req, res) {
  res.render('waffles/new')
}

function create(req, res) {
  // add an owner to our waffle
  req.body.owner = req.user.profile._id
  Waffle.create(req.body)
  .then(waffle => {
    res.redirect('/')
  })
}

export {
  create,
  newWaffle as new
}