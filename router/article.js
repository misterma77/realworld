import express from 'express'
import * as articleControler from '../controler/article.js'
import * as articleValidator from '../validator/article.js'
import auth from '../middleware/auth.js'
const router = express.Router()
// 创建文章
router.post("/", auth, articleValidator.create, articleControler.create)
// 获取文章
// router.post("/:articleId", articleValidator.getArticle, articleControler.register)



export default router