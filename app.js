import express from 'express'
import cors from 'cors'
import router from './router/index.js'
import errorMiddleware from './middleware/errorMiddleware.js'
import notFountMiddleware from './middleware/notFountMiddleware.js'
import './model/index.js'

const app = express()
app.use(express.json())
app.use(cors())


app.use("/api", router)

app.use(errorMiddleware())
app.use(notFountMiddleware())

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})