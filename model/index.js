import mongoose from 'mongoose'
import userSchema from './user.js'
mongoose.connect('mongodb://localhost/realworld');

const db = mongoose.connection

db.on("error", err => {
    console.log(err);
})
db.on('open', () => {
    console.log('数据库连接成功');
})

// export const User = mongoose.model("User", userSchema)

export const User = mongoose.model("User", userSchema)




