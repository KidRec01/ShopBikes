export default function UserAuthenticated(req, res, next) {
  const isAuthenticated = req.isAuthenticated();
  if (isAuthenticated) {
    return next();
  }
  res.status(401).json({ error: "User doesn't authenticated" });
}
