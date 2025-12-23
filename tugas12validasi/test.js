const axios = require('axios');

const testExpressValidator = async () => {
    try {
        const response = await axios.post('http://localhost:3000/user', {
            username: 'yajit',
            email: 'yajit@gmail.com'
        });
        console.log('Response from Express /user (express-validator):', response.data);
    } catch (error) {
        console.log('Error from Express /user (express-validator):', error.response.data);
    }
};

const testJoiValidator = async () => {
    try {
        const response = await axios.post('http://localhost:3000/user-joi', {
            username: 'padluy',
            email: 'padluy@gmail.com'
        });
        console.log('Response from Express /user-joi (Joi):', response.data);
    } catch (error) {
        console.log('Error from Express /user-joi (Joi):', error.response.data);
    }
};

const runTests = async () => {
    console.log('Testing /user route with express-validator:');
    await testExpressValidator();

    console.log('\nTesting /user-joi route with Joi:');
    await testJoiValidator();
};

runTests();