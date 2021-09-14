import { verify, sign } from '../utils/jwt.js'
import { jwtSecret } from '../config/config.default.js'
import { User } from '../model/index.js'
export default async (req, res, next) => {
    let token = req.headers['token']
    if (!token) {
        res.status(400).end()
    }
    try {
        const decoded2token = await verify(token, jwtSecret)
        req.user = await User.findById(decoded2token.userId)
        console.log(req.user);
        next()
    } catch (error) {
        res.status(400).end()
    }

}