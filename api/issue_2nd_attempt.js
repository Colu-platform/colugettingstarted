// issue.js
var bitcoin = require('bitcoinjs-lib');
var request = require('request');

address = 'n2t19a46cBs2DdHs2sqfRwPGhoQjvqmefR';

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
    'amount': 1,
    'fee': 1000,
    'metadata': {
        'assetId': '1',
        'assetName': 'Asset Name',
        'issuer': 'Asset Issuer',
        'description': 'My Description',
        'userData': {
            'meta' : [
                {key: 'Item ID', value: 2, type: 'Number'},
                {key: 'Item Name', value: 'Item Name', type: 'String'},
                {key: 'Company', value: 'My Company', type: 'String'},
                {key: 'Address', value: 'San Francisco, CA', type: 'String'}
            ]
        }
    }
};

postToApi('issue', asset, function(err, body){
    if (err) {
        console.log('error: ', err);
    }
});

/*
{"txHex":"010000000156a639c7fa43195acadfb43ef01bbb68404b2ca1f5231ed6dc1de243235104a50100000000ffffffff03ac0200000000000047512103ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff210314a96cd6f5a20826070173fe5b7e9797f21fc8ca4a55bcb2d2bde99f55dd352352ae00000000000000001c6a1a43430102fa9213bc243af03857d0f9165e971153586d391501100c800100000000001976a914ea55c2430dca31e56ef5ae55c2863dae65df908688ac00000000","assetId":"LHKdVQoccgg4eyMLB1n7UGw9y2LHuQXnQX24d","multisigOutputs":[]}
*/