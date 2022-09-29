import { Router } from 'express'
import * as wafflesCtrl from '../controllers/waffles.js'

const router = Router()

router.get('/new', isLoggedIn, wafflesCtrl.new)
router.post('/', isLoggedIn, wafflesCtrl.create)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}

export {
  router
}
