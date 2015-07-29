// http://documentation.colu.co/#SendanAsset

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
        'assetName': 'Chicago: The Musical',
        'issuer': 'AMBASSADOR THEATRE, 219 West 49th Street, New York, NY 10019',
        'description': 'Tickets to the show on 1/1/2016 at 8 PM'
    }
}

colu.on('connect', function () {
    colu.issueAsset(asset, function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
})

colu.init()

/*
{ txHex: '0100000001d63404d27843a979f14b0d2a82aef4d1e30f8289e66191e3297a9ecf63f99bd2000000001976a914a392e02ae974cbd472ae4cfe51e1b6ccddb4661a88acffffffff04ac0200000000000047512103ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2103263cd91de248d96c41b7b6fd4e6560c5ab624fec4ba038cbaf3516f10dfd8e3152ae58020000000000001976a914a392e02ae974cbd472ae4cfe51e1b6ccddb4661a88ac0000000000000000206a1e4343010207af7a379075a2b5d55c152bee206f84f59bb3c8205201205210cc020000000000001976a914a392e02ae974cbd472ae4cfe51e1b6ccddb4661a88ac00000000',
  assetId: 'LKrCQfWSepMFyeCbnvWL33FH12gPFoPvqqw7a',
  txid: '200414e4a8511c802e564197a6d7036869d038dd2c2030aa52f61808b9108f1a',
  receivingAddresses: [ { address: 'mvRrPRR8F4nbKa3mPSx68pzLerjBHFL1py', amount: 500 } ],
  issueAddress: 'mvRrPRR8F4nbKa3mPSx68pzLerjBHFL1py' }
*/