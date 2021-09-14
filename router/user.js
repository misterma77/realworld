import express from 'express'
import * as userControler from '../controler/user.js'
import * as userValidator from '../validator/user.js'
import auth from '../middleware/auth.js'
const router = express.Router()
// 登录
router.post("/login", userValidator.login, userControler.login)
// 注册
router.post("/register", userValidator.register, userControler.register)
// 获取用户信息
router.post("/", auth, userControler.info)

export default router