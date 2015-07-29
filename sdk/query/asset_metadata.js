// http://documentation.colu.co/#AssetMetadata

var Colu = require('colu')
var settings = {
    coloredCoinsHost: 'https://testnet.api.coloredcoins.org',
    coluHost: 'https://testnet.engine.colu.co',
    network: 'testnet'
}
var colu = new Colu(settings)

var assetId = 'LEUWnac9Pp7kZYC3W19xtVMVqL8jw6m19RZHu'
var utxo = 'f9fff185dc1df89ffe13cd7e5668a0af2953622176de91232ec1be975c6114c4:1'

colu.on('connect', function () {
    colu.coloredCoins.getAssetMetadata(assetId,utxo,function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
})

colu.init()