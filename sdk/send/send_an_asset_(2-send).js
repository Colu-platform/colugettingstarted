// http://documentation.colu.co/#SendanAsset

var testnetApi = 'https://testnet.api.coloredcoins.org';
var coluHost = 'https://testnet.engine.colu.co';
var privateSeed = 'abcd4986fdac1b3a710892ef6eaa708d619d67100d0514ab996582966f927982';
var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet',
    privateSeed: privateSeed
};

var assetId = 'LK4heYpgK1EJD2ev111wAfyMLzssXXJ5N5YY1';
var fromAddress = 'mx2sSW67Fuu7iCJNJ3DEFmtEtZqhWrfMZC';
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

var Colu = require('colu');
var colu = new Colu(settings);

colu.on('connect', function () {
    colu.financedSend(send, function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
})

colu.init()