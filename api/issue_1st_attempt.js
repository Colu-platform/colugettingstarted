// issue.js
var bitcoin = require('bitcoinjs-lib');
var request = require('request');

key = bitcoin.ECKey.makeRandom();
address = key.pub.getAddress(bitcoin.networks.testnet).toString();

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