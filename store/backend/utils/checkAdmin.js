const adminList = ['515568667719630876', '477245682625806348'];

module.exports = function (req, res, next) {
  if (adminList.includes(req.user.discordId)) {
    return next();
  }
  res.status(403).send('No tienes acceso.');
};