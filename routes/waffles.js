import { Router } from 'express'
import * as wafflesCtrl from '../controllers/waffles.js'

const router = Router()

router.get('/', isLoggedIn, wafflesCtrl.index)
router.get('/new', isLoggedIn, wafflesCtrl.new)
router.get('/:id', isLoggedIn, wafflesCtrl.show)
router.post('/', isLoggedIn, wafflesCtrl.create)
router.post('/:id/toppings', isLoggedIn, wafflesCtrl.addTopping)
router.delete('/:id', isLoggedIn, wafflesCtrl.delete)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}

export {
  router
}
