module.exports = (req, res) => {
  const token = req.headers.authorization;
  if(!token || token.length !== 16) return res.status(401).json( { message: 'Token inválido!' });
  res.status(200).json( { message: 'Token válido!' });
};