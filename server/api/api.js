const express = require('express')
const app = express()
const axios = require('axios')
const coinRouter = require('../routes/dbRoutes')

const options = {
	method: 'GET',
	url: 'https://coinranking1.p.rapidapi.com/coins',
	params: {
		referenceCurrencyUuid: 'yhjMzLPhuIDl', //USD

		'uuids[0]': 'Qwsogvtv82FCd', //Bitcoin
		'uuids[1]': 'razxDUgYGNAdQ', //Ethereum
		'uuids[2]': 'a91GCGd_u96cF', //Dogecoin
		'uuids[3]': 'D7B1x_ks7WhV5', //Litecoin
		'uuids[4]': '-l8Mn2pVlRs-p', //XRP
		'uuids[5]': '1evaOJpHs', //XMON
		'uuids[6]': 'YRTkUcMi', //Pax Gold
		'uuids[7]': 'zNZHO_Sjf', //Solana
		'uuids[8]': '25W7FG7om', //Polkadot
		'uuids[9]': 'qzawljRxB5bYu', //Cardano
		'uuids[10]': 'qFakph2rpuMOL', //Maker
		'uuids[11]': 'sCDE9K1b', //Unisocks
		'uuids[12]': '3mVx2FX_iJFp5', //Monero
		'uuids[13]': 'WcwrkfNI4FUAe', //BNB
		'uuids[14]': 'vd4-RU816', //SHAKE token
		'uuids[15]': 'U9dzZFwIyMq19', //42 Coin
		'uuids[16]': 'ZlZpzOJo43mIo', //Bitcoin Cash
		'uuids[17]': 'qUhEFk1I61atv', //TRON

		// orderBy: '24hVolume',         //Allowed values: price, marketCap, 24hVolume, change, listedAt
		// orderDirection: 'desc'        //Allowed values: desc, asc
		// search: '',                   //String search
		// 'tags[i]': '',                //Allowed values: defi, stablecoin, nft, dex, exchange, staking, dao, meme, privacy
		// 'tiers[i]': '',               //Allowed values: 1, 2, 3
		// limit: ''                     //Integer value
	},
	headers: {
		'X-RapidAPI-Key': 'd2ee1c07d9msh25026da6e7295fbp1272bajsn28ee4f973b89',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
}

app.use(coinRouter)

const fetchCoinAPI = async () => {
	await axios
		.request(options)
		.then((res) => {
			// console.log(res.data)
      app.put(res)
		})
		.catch((err) => {
			console.error(err)
		})
}

module.exports = fetchCoinAPI