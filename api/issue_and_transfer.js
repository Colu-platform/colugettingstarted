// issue_and_transfer.js
var bitcoin = require('bitcoinjs-lib');
var request = require('request');

address = 'n2t19a46cBs2DdHs2sqfRwPGhoQjvqmefR';

key = bitcoin.ECKey.makeRandom();
new_address = key.pub.getAddress(bitcoin.networks.testnet).toString();
console.log('new TESTNET address: ['+new_address+']');

function postToApi(api_endpoint, json_data, callback) {
    console.log(api_endpoint+': ', JSON.stringify(json_data));
    request.post({
        url: 'http://testnet.api.coloredcoins.org:80/v2/'+api_endpoint,
        headers: {'Content-Type': 'application/json'},
        form: json_data
    }, 
    function (error, response, body) {
        if (error) {
            return callback(error);
        }
        if (typeof body === 'string') {
            body = JSON.parse(body);
        }
        console.log('Status: ', response.statusCode);
        console.log('Body: ', JSON.stringify(body));
        return callback(null, body);
    });
};

var asset = {
    'issueAddress': address,
    'amount': 123,
    'fee': 1234,
    'transfer':[{
        'address': new_address,
        'amount': 33
     }],
    'metadata': {
        'assetId': '1',
        'assetName': 'Asset Name',
        'issuer': "Asset Issuer",
        'description': "My Description",
        'userData': {
            'meta' : [
                {key: 'Item ID', value: 2, type: 'Number'},
                {key: 'Item Name', value: 'Item Name', type: 'String'},
                {key: 'Company', value: 'My Company', type: 'String'},
                {key: 'Address', value: 'San Francisco, CA', type: 'String'}
            ]
        }
    }
}

postToApi('issue', asset, function(err, body){
    if (err) {
        console.log('error: ', err);
    }
});

/*
{"txHex":"0100000001e0ecef4a1ceb99e3564d4a7ee52f959d0307ad3090da6f9d84699438e0841c260100000000ffffffff04ac0200000000000047512103ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff210314a96cd6f5a20826070173fe5b7e9797f21fc8ca4a55bcb2d2bde99f55dd352352ae58020000000000001976a9149c8976a0fcab84ca8ad5ff1cb68740328e7ca99c88ac0000000000000000206a1e43430102fa9213bc243af03857d0f9165e971153586d391527b001221010ca7c0100000000001976a914ea55c2430dca31e56ef5ae55c2863dae65df908688ac00000000","assetId":"LCTrFhMGwY6kH1XnwU67LQyn5xFsTvcUCt73y","multisigOutputs":[]}
*/