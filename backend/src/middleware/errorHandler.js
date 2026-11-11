module.exports = (error, req, res, next) => {
  console.error(`[ERROR] ${req.method} ${req.originalUrl}`, error.message);
  res.status(error.status || 500).json({ message: error.status ? error.message : 'Internal server error' });
};
