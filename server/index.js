const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')

const app = express()
const cors = require('cors');
const port = process.env.PORT || 3001

// Maintenance
// app.use((req, res, next)=> {
//     if(req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})