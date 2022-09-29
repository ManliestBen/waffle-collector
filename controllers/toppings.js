import { Waffle } from "../models/waffle.js"
import { Profile } from "../models/profile.js"
import { Topping } from "../models/topping.js"


function index(req, res) {
  Topping.find({})
  .then(toppings => {
    res.render('toppings/index', {
      toppings
    })
  })
}

function newTopping(req, res) {
  res.render('toppings/new')
}

function create(req, res) {
  Topping.create(req.body)
  .then(topping => {
    res.redirect('/toppings')
  })
}


export {
  index,
  newTopping as new,
  create
}