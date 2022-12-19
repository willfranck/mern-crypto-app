const express = require('express')
const app = express()
const coinModel = require('../models/currency')


app.get('/coins', async (req, res) => {
  const coins = await coinModel.find({})

  try {
    res.send(coins)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.post('/coins', async (req, res) => {
  const coin = new coinModel(req.body)

  try {
    await coin.save()
    res.send(coin)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.patch('/coins/:uuid', async (req, res) => {
  try {
    await coinModel.updateMany({"uuid": req.params.uuid}, req.body)
    await coinModel.save()
    res.send(coin)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.delete('/coins/:id', async (req, res) => {
  try {
    const coin = await coinModel.findByIdAndDelete(req.params.id)

    if (!coin) res.status(404).send('Coin ID not found')
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = app