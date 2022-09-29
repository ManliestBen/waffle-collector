import { Waffle } from "../models/waffle.js"
import { Profile } from "../models/profile.js"
import { Topping } from "../models/topping.js"

function newWaffle(req, res) {
  res.render('waffles/new')
}

function index(req, res) {
  Waffle.find({})
  .populate('owner')
  .then(waffles => {
    res.render('waffles/index', {
      waffles
    })
  })
}

function create(req, res) {
  // add an owner to our waffle
  req.body.owner = req.user.profile._id
  Waffle.create(req.body)
  .then(waffle => {
    res.redirect('/waffles')
  })
}

function show(req, res) {
  Waffle.findById(req.params.id)
  .populate('owner')
  .populate('toppings')
  .then(waffle => {
    Topping.find({_id: {$nin: waffle.toppings}})
    .then(toppingsNotOnWaffle => {
      res.render('waffles/show', {
        waffle,
        toppingsNotOnWaffle
      })
    })
  })
}

function deleteWaffle(req, res) {
  Waffle.findByIdAndDelete(req.params.id)
  .then(waffle => {
    res.redirect('/waffles')
  })
}

function addTopping(req, res) {
  // Find the waffle
  Waffle.findById(req.params.id)
  .then(waffle => {
    // Push the id of the topping into the toppings array of objectIds
    waffle.toppings.push(req.body.toppingId)
    waffle.save()
    .then(savedWaffle => {
      // Redirect back to show view for waffle
      res.redirect(`/waffles/${savedWaffle._id}`)
    })

  })
}

export {
  create,
  newWaffle as new,
  index,
  show,
  deleteWaffle as delete,
  addTopping
}