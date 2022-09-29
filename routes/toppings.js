import { Router } from 'express'
import * as toppingsCtrl from '../controllers/toppings.js'

const router = Router()

router.get('/', isLoggedIn, toppingsCtrl.index)
router.get('/new', isLoggedIn, toppingsCtrl.new)
router.post('/', isLoggedIn, toppingsCtrl.create)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}

export {
  router
}
