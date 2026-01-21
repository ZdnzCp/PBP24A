const jwt = require('jsonwebtoken');
const secretKey = 'yazidsukauang';

const user = {
    id: 1,
    username: 'Zaidan Yazid'
};

const token = jwt.sign(user, secretKey, { expiresIn: '30s' });
console.log('token:', token);