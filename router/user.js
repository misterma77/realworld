import express from 'express'
import * as userControler from '../controler/user.js'
import * as userValidator from '../validator/user.js'
const router = express.Router()
// 登录
router.get("/login", userControler.login)
// 注册
router.post("/register", userValidator.register, userControler.register)

export default router