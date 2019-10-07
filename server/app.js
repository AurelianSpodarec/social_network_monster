const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());

app.get('', (req, res) => {
    res.header('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Origin", "*");
    res.send({hello: "world"})
})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
});
