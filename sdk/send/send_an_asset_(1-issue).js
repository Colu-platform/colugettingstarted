// http://documentation.colu.co/#SendanAsset

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
        'assetName': 'Chicago: The Musical',
        'issuer': 'AMBASSADOR THEATRE, 219 West 49th Street, New York, NY 10019',
        'description': 'Tickets to the show on 1/1/2016 at 8 PM'
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