// http://documentation.colu.co/#AssetData

var testnetApi = 'https://testnet.api.coloredcoins.org'
var coluHost = 'https://testnet.engine.colu.co'
var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet'
}
var assetId = 'LEUWnac9Pp7kZYC3W19xtVMVqL8jw6m19RZHu'
var params = {
    assetId: assetId
}

var Colu = require('colu')
var colu = new Colu(settings)

colu.on('connect', function () {
    colu.coloredCoins.getassetdata(params,function (err, body) {
        if (err) return console.error(err)
        var util = require('util')        
        console.log("Body: ",util.inspect(body, {depth:10}))
    })
})

colu.init()