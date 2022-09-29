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
  .then(waffle => {
    res.render('waffles/show', {
      waffle
    })
  })
}

function deleteWaffle(req, res) {
  Waffle.findByIdAndDelete(req.params.id)
  .then(waffle => {
    res.redirect('/waffles')
  })
}

export {
  create,
  newWaffle as new,
  index,
  show,
  deleteWaffle as delete
}