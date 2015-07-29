// http://documentation.colu.co/#IssueandSend

var Colu = require('colu')
var settings = {
    coloredCoinsHost: 'https://testnet.api.coloredcoins.org',
    coluHost: 'https://testnet.engine.colu.co',
    network: 'testnet',
    privateSeed: 'abcd4986fdac1b3a710892ef6eaa708d619d67100d0514ab996582966f927982'
}
var colu = new Colu(settings)

var asset = {
    amount: 1000000,
    reissueable: true,
    transfer: [{
        address: 'mvaHph557j63CyJxmEaJ8F38SC3cNetvaa', amount: 250000
    }]
}

colu.on('connect', function () {
    colu.issueAsset(asset, function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
})

colu.init()