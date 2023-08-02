const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config({ path: './config.env' })
const db = process.env.ATLAS_URI
const PORT = process.env.PORT || 8080
const router = require('./routes/dbRoutes')
const fetchCoinAPI = require('./api/api')


const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

mongoose.set('strictQuery', true)
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
	console.log('Connected to MongoDB')
);

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`)
})

app.use(fetchCoinAPI)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'))
}