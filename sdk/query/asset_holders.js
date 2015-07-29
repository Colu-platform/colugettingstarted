// http://documentation.colu.co/#AssetHolders

var Colu = require('colu')
var settings = {
    coloredCoinsHost: 'https://testnet.api.coloredcoins.org',
    coluHost: 'https://testnet.engine.colu.co',
    network: 'testnet'
}
var colu = new Colu(settings)

var assetId = 'U831iMR6M2aXdDSSmY3tyY7ZqpaCqLXQZKWJt'

colu.on('connect', function () {
    colu.coloredCoins.getStakeHolders(assetId,function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
})

colu.init()