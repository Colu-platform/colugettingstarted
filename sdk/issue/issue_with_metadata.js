// http://documentation.colu.co/#IssuewithMetadata

var Colu = require('colu')
var settings = {
    coloredCoinsHost: 'https://testnet.api.coloredcoins.org',
    coluHost: 'https://testnet.engine.colu.co',
    network: 'testnet',
    privateSeed: 'abcd4986fdac1b3a710892ef6eaa708d619d67100d0514ab996582966f927982'
}
var colu = new Colu(settings)

var asset = {
    amount: 500,
    metadata: {        
        'assetName': 'Mission Impossible 15',
        'issuer': 'Fox Theater',
        'description': 'Movie ticket to see the New Tom Cruise flick'
    }
}

colu.on('connect', function () {
    colu.issueAsset(asset, function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
})

colu.init()