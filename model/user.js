import mongoose from 'mongoose'
import baseModel from './baseModel.js'
export default new mongoose.Schema({
    username: {
        type: String,
        request: true
    },
    password: {
        type: String,
        require: true
    },
    image: {
        type: String,
        default: null
    },
    bio: {
        type: String,
        default: null
    },
    ...baseModel
})