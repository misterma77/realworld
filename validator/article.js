import validateMiddleware from "../middleware/validateMiddleware.js";
import { body } from 'express-validator'

export const create = validateMiddleware([
    body("title").notEmpty().withMessage("title不能为空"),
    body("description").notEmpty().withMessage("description不能为空"),
    body("body").notEmpty().withMessage("body不能为空"),
])

export const getArticle = validateMiddleware([

])