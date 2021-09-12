import express from 'express'
import * as userControler from '../controler/user.js'
const router = express.Router()

router.get("/login", userControler.login)
router.post("/register", userControler.register)

export default router