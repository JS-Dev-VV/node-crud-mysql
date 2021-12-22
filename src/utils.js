const cryptojs = require("crypto-js");
const key = "quad-fi"

exports.encrypt = (value) => {
    return cryptojs.AES.encrypt(value, key).toString();
}

exports.decrypt = (value) => {
    return cryptojs.AES.decrypt(value, key).toString(cryptojs.enc.Utf8);
}