// query_address.js

var bitcoin = require('bitcoinjs-lib');
var request = require('request');

function getFromApi(api_endpoint, param, callback) {
    console.log('Get from:'+api_endpoint+'/'+param);
    request.get('http://testnet.api.coloredcoins.org:80/v2/'+api_endpoint+'/'+param, function (error, response, body) {
        if (error) {
            return callback(error);
        }
        if (typeof body === 'string') {
            body = JSON.parse(body);
        }
        var util = require('util')               
        console.log('Status:', response.statusCode);
        console.log("Body: ",util.inspect(body, {depth:10}))
        return callback(null, body);
    });
};

address='miQnYGkmPZ5yne2S2n3UibxZLcAhMhNCAL';
getFromApi('addressinfo',address,function(err, body){
  if (err) consule.log('error: ', err);
});

/*
Status: 200
Body:  { address: 'miQnYGkmPZ5yne2S2n3UibxZLcAhMhNCAL',
  utxos: 
   [ { _id: '5590f3bf7c3454d08f7c1108',
       txid: '2ea25d59979e35aec53037b2bf47014f21358f550c8ef290e04249b152ba3de5',
       index: 1,
       value: 600,
       blockheight: 486460,
       used: false,
       assets: 
        [ { assetId: 'LHV1qyP3d54oyEHPHvzpUFXDiCfre61DifMRi',
            amount: 33,
            issueTxid: '2ea25d59979e35aec53037b2bf47014f21358f550c8ef290e04249b152ba3de5',
            divisibility: 0,
            lockStatus: null } ],
       scriptPubKey: 
        { asm: 'OP_DUP OP_HASH160 1fbdbd176079a667572cc875f5a4e11ba42f89d9 OP_EQUALVERIFY OP_CHECKSIG',
          hex: '76a9141fbdbd176079a667572cc875f5a4e11ba42f89d988ac',
          reqSigs: 1,
          type: 'pubkeyhash',
          addresses: [ 'miQnYGkmPZ5yne2S2n3UibxZLcAhMhNCAL' ] } } ] }
*/