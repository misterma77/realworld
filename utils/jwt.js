import jsonwebtoken from 'jsonwebtoken'
import { promisify } from 'util'
export const sign = promisify(jsonwebtoken.sign)
export const verify = promisify(jsonwebtoken.verify)
export const decode = promisify(jsonwebtoken.decode)