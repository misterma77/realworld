import mongoose from 'mongoose'
import baseModel from './baseModel.js'
import md5 from '../utils/md5.js'
export default new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        set: val => md5(val),
        select: false
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