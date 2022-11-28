const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const createAccessToken = (email) => {
    const accessToken = jwt.sign(
        {email: email},
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '15s' }
    );

    return accessToken;
}

module.exports = {
    createAccessToken
}