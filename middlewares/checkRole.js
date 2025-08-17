const checkRole = (requiredRole) => {
  return (req, res, next) => {
    if (req.jwt && req.jwt.role === requiredRole) {
      next();
    } else {
      res.status(403).json({
        status: false,
        message: "ACCESS_DENIED",
      });
    }
  };
};

export default checkRole;
