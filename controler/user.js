import { User } from '../model/index.js'
import { sign } from '../utils/jwt.js'
import { jwtSecret } from '../config/config.default.js'
// 登录
export const login = async (req, res, next) => {
    try {
        const user = req.user.toJSON()
        console.log(user);
        delete user.password
        const token = await sign({ userId: user._id }, jwtSecret)
        res.status(200).json({
            ...user,
            token
        })
    } catch (err) {
        next(err)
    }
}

// 注册
export const register = async (req, res, next) => {
    try {
        let user = new User(req.body)
        await user.save()
        user = user.toJSON()
        delete user.password
        res.json(user)
    } catch (err) {
        next(err)
    }
}

// info
export const info = async (req, res, next) => {
    try {
        res.json(req.user)
    } catch (err) {
        next(err)
    }
}