// http://documentation.colu.co/#Initialization15

var Colu = require('colu')
var settings = {
    coloredCoinsHost: 'https://testnet.api.coloredcoins.org',
    coluHost: 'https://testnet.engine.colu.co',
    network: 'testnet',
    privateSeed: null
}
var colu = new Colu(settings)

colu.init(function (err, coluInstance) {
	if (err) throw err
    privateSeed = coluInstance.hdwallet.getPrivateSeed()
    console.log("privateSeed: ",privateSeed)
})