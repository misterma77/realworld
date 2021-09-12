import { User } from '../model/index.js'
// 登录
export const login = (req, res, next) => {
    try {
        throw new Error('1')
    } catch (err) {
        next(err)
    }
}

// 注册
export const register = async (req, res, next) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.json(user)
    } catch (err) {
        next(err)
    }
}