const mongoose = require('mongoose')

const CoinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  uuid: {
    type: String,
    required: true
  },
  iconURL: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  change: {
    type: Number,
    required: true
  }
})

const Coins = mongoose.model('Coins', CoinSchema)

module.exports = Coins