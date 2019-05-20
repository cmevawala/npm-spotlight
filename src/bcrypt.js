const bcrypt = require('bcryptjs');

async function hashPassword(plaintext) {
    const user = {
        name: 'Brad',
        email: 'brad@gmail.com',
        password: plaintext
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(plaintext, salt);

    console.log(user);
}

async function preparePasswords(plaintext, hash) {
    const isMatch = await bcrypt.compare(plaintext, hash)

    if (isMatch) {
        console.log('Match Found');
    } else {
        console.log('Match Not Found');
    }
}

hashPassword('123456');
preparePasswords('123456', '$2a$10$Xi37sNOpYeRMq4pkzJBBxegKxWL8vndDyLPvlEWI9pLwlQF2xJMB.')
