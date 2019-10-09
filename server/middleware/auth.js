const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        // const token = req.header('Authorization').substring(7) Different way of doing it :) 4hours to figure out I missed space.

        console.log("Auth Token", token)
        const decoded = jwt.verify(token, 'secret')
        console.log("Auth decoded", decoded)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        console.log("Auth User", user)
        if(!user) {
            throw new Error()
        }

        req.user = user
        next()
    } catch (e) {
        console.log("Auth Console log", e)
        res.status(401).send({ error: 'Please authenticate.'})
    }
    
}

module.exports = auth