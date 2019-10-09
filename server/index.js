const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3001

// app.use((req, res, next)=> {
//     if(req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

app.use(express.json())
app.use(userRouter)


const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({_id: 'abc123'}, 'secret', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'secret')
//     console.log("SDSSD", data)
// }

// myFunction()

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})