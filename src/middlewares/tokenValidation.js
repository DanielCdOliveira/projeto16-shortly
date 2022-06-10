import connection from "../db.js";

export default async function tokenValidation(req, res, next) {
  try {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "").trim();
    console.log(token);
    if (!token) return res.sendStatus(401);
    const  userId  = (
      await connection.query(
        `
    SELECT sessions."userId" 
    FROM sessions
    WHERE token=($1)     
    `,
        [token]
      )
    ).rows[0];
    if (!userId) return res.sendStatus(401);
    console.log(userId);
    res.locals.userId = userId.userId;
    next()
  } catch (error) {
      res.status(500).send(error)
  }
}
