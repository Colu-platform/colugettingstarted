// sign_transaction.js
var bitcoin = require('bitcoinjs-lib');

function signTx (unsignedTx, wif) {
    privateKey = bitcoin.ECKey.fromWIF(wif);
    var tx = bitcoin.Transaction.fromHex(unsignedTx)
    var insLength = tx.ins.length
    for (var i = 0; i < insLength; i++) {
        tx.sign(i, privateKey)
    }
    return tx.toHex()
}

var key = 'KzH9zdXm95Xv3z7oNxzM6HqSPUiQbuyKoFdQBTf3HKx1B6eYdbAn';
var txHex = '010000000156a639c7fa43195acadfb43ef01bbb68404b2ca1f5231ed6dc1de243235104a50100000000ffffffff03ac0200000000000047512103ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff210314a96cd6f5a20826070173fe5b7e9797f21fc8ca4a55bcb2d2bde99f55dd352352ae00000000000000001c6a1a43430102fa9213bc243af03857d0f9165e971153586d391501100c800100000000001976a914ea55c2430dca31e56ef5ae55c2863dae65df908688ac00000000'

var signedTxHex = signTx(txHex, key);
console.log("signedTxHex: ["+signedTxHex+"]");

/*
signedTxHex: [010000000156a639c7fa43195acadfb43ef01bbb68404b2ca1f5231ed6dc1de243235104a5010000006b483045022100901684bb7602c4351910e23e899b726c70a470ae4e392e1a5e2b6d5c66298adc02203ad5b6ed1af235211b89f5b2c9d1f0f69a4ed0a7d51c5d5aafb9abee38f59792012102c5ac36c34715ebf5b82abab08132ca08e90cc40ed8c2ca29620d0f00f28655d6ffffffff03ac0200000000000047512103ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff210314a96cd6f5a20826070173fe5b7e9797f21fc8ca4a55bcb2d2bde99f55dd352352ae00000000000000001c6a1a43430102fa9213bc243af03857d0f9165e971153586d391501100c800100000000001976a914ea55c2430dca31e56ef5ae55c2863dae65df908688ac00000000]
*/