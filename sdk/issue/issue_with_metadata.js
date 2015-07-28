// http://documentation.colu.co/#IssuewithMetadata

var testnetApi = 'https://testnet.api.coloredcoins.org'
var coluHost = 'https://testnet.engine.colu.co'
var privateSeed = 'abcd4986fdac1b3a710892ef6eaa708d619d67100d0514ab996582966f927982'
var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet',
    privateSeed: privateSeed
}

var asset = {
    amount: 500,
    metadata: {        
        'assetName': 'Mission Impossible 15',
        'issuer': 'Fox Theater',
        'description': 'Movie ticket to see the New Tom Cruise flick'
    }
}

var Colu = require('colu')
var colu = new Colu(settings)

colu.on('connect', function () {
    colu.financedIssue(asset, function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
})

colu.init()