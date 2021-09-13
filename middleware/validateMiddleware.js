import { validationResult } from "express-validator"

export default validate => {
    return async (req, res, next) => {
        await Promise.all(validate.map(item => item.run(req)))
        const error = validationResult(req)
        if (error.isEmpty()) {
            return next()
        }
        res.status(400).json({
            error: error.array()
        })
    }

}