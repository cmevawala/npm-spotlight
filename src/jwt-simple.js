const jwt = require('jwt-simple');
const config = require('config');
const uuid = require('uuid');

function generateToken() {
    const payload = {
        id: uuid.v4(),
        name: 'Brad'
    };

    return jwt.encode(payload, config.get('jwtsecret'));
}

function validateToken(token) {
    return jwt.decode(token, config.get('jwtsecret'));
}

const token = generateToken();

console.log("Generated Token:" + token);
console.log(validateToken(token, 'secret'));