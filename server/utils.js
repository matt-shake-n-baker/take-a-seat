const jwt = require('jsonwebtoken');
const APP_SECRET = 'APP_SECRET';

function getTokenPayload(token) {
    try {
        return jwt.verify(token, APP_SECRET);
    } catch (error) {
        console.log(error)
    }  
}

function getUserId(req, authToken) {
  if (req) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      if (!token) {
        throw new Error('No token found');
      }
      const { userId } = getTokenPayload(authHeader);
    //   console.log(userId)

      return userId;
    }
  } else if (authToken) {
    const { userId } = getTokenPayload(authToken);
    return userId;
  }

  throw new Error('Not authenticated');
}

module.exports = {
  APP_SECRET,
  getUserId
};