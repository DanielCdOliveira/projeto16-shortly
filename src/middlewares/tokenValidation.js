import connection from "../db.js";

export default async function tokenValidation(req, res, next) {
  const userIdParams = req.params.id;
  try {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "").trim();
    if (!token) return res.sendStatus(401);
    const userId = (
      await connection.query(
        `
    SELECT sessions."userId" 
    FROM sessions
    WHERE token=($1)     
    `,
        [token]
      )
    ).rows[0];
    if (userIdParams && !userId) return res.sendStatus(404);
    if (!userId) return res.sendStatus(401);
    res.locals.userId = userId.userId;
    next();
  } catch (error) {
    res.status(500).send(error);
  }
}
