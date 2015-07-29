// http://documentation.colu.co/#AssetData

var Colu = require('colu')
var settings = {
    coloredCoinsHost: 'https://testnet.api.coloredcoins.org',
    coluHost: 'https://testnet.engine.colu.co',
    network: 'testnet'
}
var colu = new Colu(settings)

var asset = {
    assetId: 'LEUWnac9Pp7kZYC3W19xtVMVqL8jw6m19RZHu'
}

colu.on('connect', function () {
    colu.coloredCoins.getAssetData(asset,function (err, body) {
        if (err) return console.error(err)
        var util = require('util')        
        console.log("Body: ",util.inspect(body, {depth:10}))
    })
})

colu.init()