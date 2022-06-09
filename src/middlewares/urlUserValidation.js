import connection from "../db.js";

export default async function checkUrlUser(req, res, next) {
  const userId = res.locals.userId;
  const urlId = req.params.id;

  try {
    const urlOwner = (
      await connection.query(
        `
        SELECT "userId" 
        FROM urls
        WHERE id=$1
        `,
        [urlId]
      )
    ).rows[0];
    if (!urlOwner) return res.sendStatus(404);
    if (userId !== urlOwner.userId) return res.sendStatus(401);
    next();
  } catch (error) {
    res.sendStatus(500);
  }
}
