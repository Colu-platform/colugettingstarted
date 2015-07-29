// http://documentation.colu.co/#ReissuinganAsset

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
    reissueable: true   
}

colu.on('connect', function () {
    colu.issueAsset(asset, function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
})

colu.init()

/*
Body:  { txHex: '0100000001df774fd25bad19ddae337e07be9de96b98cecf801c84d4039a70414481b7a8f3000000001976a914703388b886d19cd692e6feda0c6d4f83ac08d15488acffffffff0358020000000000001976a914703388b886d19cd692e6feda0c6d4f83ac08d15488ac00000000000000000c6a0a4343010526440026440078050000000000001976a914703388b886d19cd692e6feda0c6d4f83ac08d15488ac00000000',
  assetId: 'U6EPfUAZJT5CQa1HVD2JJyAoxHP5MvyZJf1re',
  txid: '672355286a20c988ae258a3b1acf6677e6cedb13f021b2dc3dcc6385147dd92d',
  receivingAddresses: 
   [ { address: 'mqkDiBtyuD5qAyRNKDZ1LTu97LrbK9sE2L',
       amount: 1000000 } ],
  issueAddress: 'mqkDiBtyuD5qAyRNKDZ1LTu97LrbK9sE2L' }
*/