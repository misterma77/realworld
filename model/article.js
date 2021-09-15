import mongoose from 'mongoose'
import baseModel from './baseModel.js'
const Schema = mongoose.Schema
export default new mongoose.Schema({
    ...baseModel,
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    tagList: {
        type: [String],
        required: true
    },
    favoritesCount: {
        type: Number,
        default: 0
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})