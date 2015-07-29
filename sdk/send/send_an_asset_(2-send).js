// http://documentation.colu.co/#SendanAsset

var Colu = require('colu')
var settings = {
    coloredCoinsHost: 'https://testnet.api.coloredcoins.org',
    coluHost: 'https://testnet.engine.colu.co',
    network: 'testnet',
    privateSeed: 'abcd4986fdac1b3a710892ef6eaa708d619d67100d0514ab996582966f927982'
}
var colu = new Colu(settings)

var assetId = 'LKrCQfWSepMFyeCbnvWL33FH12gPFoPvqqw7a';
var fromAddress = 'mvRrPRR8F4nbKa3mPSx68pzLerjBHFL1py';
var toAddress = 'mfhdwaZd9csRDGVPBGVZeup45JpEGvYqhA';

var send = {
    from: fromAddress,
    to: [{
        address: toAddress,
        assetId: assetId,
        amount: 1
    }],
    metadata: {        
        'assetName': '1 Ticket to see the Chicago Musical on 1/1/2016 at 8 PM',
        'issuer': 'Ticket booth on Times Square',
        'description': 'Seat 12 at row 10'
    }
};

colu.on('connect', function () {
    colu.sendAsset(send, function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
})

colu.init()