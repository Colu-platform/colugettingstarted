// asset_holders.js
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
        console.log('Status:', response.statusCode);
        console.log('Body:', body);
        return callback(null, body);
    });
};

assetid='LE5arg1fawheJDvZEs9saPBoq9AENQGNxN9zr';

getFromApi('stakeholders',assetid,function(err, body){
  if (err) console.log('error: ', err);
});

/*
{ assetId: 'LE5arg1fawheJDvZEs9saPBoq9AENQGNxN9zr',
  holders: 
   [ { address: 'mfhdwaZd9csRDGVPBGVZeup45JpEGvYqhA', amount: 1 },
     { address: 'mt9QVuKiRswFVEFMGDaBTzDNqr7EKEe9MT', amount: 100 },
     { address: 'mvPLR3FtUekCBvpikbVLvmw53XuT4FH7QV', amount: 1 },
     { address: 'mjgxtAdRDD5QHGAFyqLuwpuXWHpKwh3rHw', amount: 2 },
     { address: 'n4NLk9GLVgLzx7Uo5wwNGHEEU3BjiAF4zi', amount: 3 },
     { address: 'msqFcwt9GSNGo5N7LAFfkMkDDQN7nETJVH', amount: 4 },
     { address: 'mgrhPJzH37YctFsNtZGAHgvgEhJQ2A62ss', amount: 389 } ],
  divisibility: 0,
  lockStatus: null,
  someUtxo: 'b15a12441343e23fab484fd0be150d505fbb2d4769e67da0a69a413cb9b4724e:1' }
*/