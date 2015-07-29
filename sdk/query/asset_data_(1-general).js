// http://documentation.colu.co/#AssetData

var Colu = require('colu')
var settings = {
    coloredCoinsHost: 'https://testnet.api.coloredcoins.org',
    coluHost: 'https://testnet.engine.colu.co',
    network: 'testnet'
}
var colu = new Colu(settings)

var asset = {
    assetId: 'U831iMR6M2aXdDSSmY3tyY7ZqpaCqLXQZKWJt'
}

colu.on('connect', function () {
    colu.coloredCoins.getAssetData(asset,function (err, body) {
        if (err) return console.error(err)
        var util = require('util')        
        console.log("AssetData: ",util.inspect(body, {depth:10}))
    })
})

colu.init()