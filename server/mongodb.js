///////////////////////////////////////////////////////////
// DATABASE CONNECTION
///////////////////////////////////////////////////////////

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'db_social_network_monster'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to the database')
    }

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        firstName: 'Aurelian',
        lastName: 'Spodarec',
        email: 'aurelianxspodarec@gmail.com',
        password: 'dazdazdaz',
    })
})