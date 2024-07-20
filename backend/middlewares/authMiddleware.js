const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log('Auth Header:', authHeader); 
  if (!authHeader) {
    return res.status(401).send({ error: 'Unauthorized - Missing Authorization Header' });
  }

  const token = authHeader.split(' ')[1];
  console.log('Token:', token);

  if (!token) {
    return res.status(401).send({ error: 'Unauthorized - Missing Token' });
  }

  try {
    const decoded = jwt.verify(token, 'secret_key'); 
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Token verification failed:', error); 
    return res.status(401).send({ error: 'Unauthorized - Invalid Token' });
  }
};

module.exports = authMiddleware;
