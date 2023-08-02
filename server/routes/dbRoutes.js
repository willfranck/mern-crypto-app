const express = require('express')
const coinRouter = express.Router()
const coinModel = require('../models/currency')

coinRouter.get('/coins', async (req, res, next) => {
  const coins = await coinModel.find({})

  try {
    res.send(coins)
  } catch (err) {
    res.status(500).send(err)
  }
})

coinRouter.put('/coins', async (req, res, next) => {
  const coin = new coinModel(req.body)

  try {
    await coin.save()
    res.send(coin)
  } catch (err) {
    res.status(500).send(err)
  }
})

coinRouter.patch('/coins/:uuid', async (req, res, next) => {
  try {
    await coinModel.updateMany({"uuid": req.params.uuid}, req.body)
    await coinModel.save()
    res.send(coin)
  } catch (err) {
    res.status(500).send(err)
  }
})

coinRouter.delete('/coins/:id', async (req, res, next) => {
  try {
    const coin = await coinModel.findByIdAndDelete(req.params.id)

    if (!coin) res.status(404).send('Coin ID not found')
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = coinRouter