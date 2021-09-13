import mongoose from 'mongoose'
import baseModel from './baseModel.js'
export default new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
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