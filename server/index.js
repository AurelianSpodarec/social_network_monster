const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(userRouter)


const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const password = 'asdasdasd'
    const hashedPassword = await bcrypt.hash(password, 8)

    const isMatch = await bcrypt.compare('asdd', password)
}

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})