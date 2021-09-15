import { Article } from '../model/index.js'
// import mongoose from 'mongoose'
// const populate=  mongoose.populate
export const create = async (req, res, next) => {
    try {

        const article = new Article(req.body)
        article.author = req.user._id
        console.log(article);
        // article.populate('author')
        // article.
        await article.save()

        res.json({
            article
        })
    } catch (err) {
        next(err)
    }
}