import validateMiddleware from "../middleware/validateMiddleware.js";
import { body } from 'express-validator'
import { User } from '../model/index.js'
export const register = validateMiddleware([
    body('username').notEmpty().withMessage('用户名不能为空')
        .custom(async username => {
            const user = await User.findOne({ username })
            if (user) {
                return Promise.reject("用户名已存在")
            }
        }),
    body('password').notEmpty().withMessage('密码不能为空'),
    body('email')
        .notEmpty().withMessage('邮箱不能为空')
        .isEmail().withMessage('邮箱格式错误')
        .bail()
        .custom(async email => {
            const user = await User.findOne({ email })
            if (user) {
                return Promise.reject("邮箱已存在")
            }
        })
])