const crypto = require("crypto")

let api_secret = 'fc8fa6ef2a9e4949bdf72d38208803657659ff67f2a74486a04a64b0bf1f2e6f'

let signer = (apiSecret, str) => {
    let hmac = crypto.createHmac("sha512", apiSecret);
    let signed = hmac.update(str).digest('hex');
    return signed;
}


let request_header = 'amount=1&nonce=2731832&pair=usdt_thb&price=31&side=buy&type=limit'
let signed = signer(api_secret, request_header)
console.log('signed::', signed)