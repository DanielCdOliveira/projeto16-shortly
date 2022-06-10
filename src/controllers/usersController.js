import connection from "../db.js";
export default async function getUserUrls(req, res) {
  const userId = res.locals.userId;
  try {
    const infoUser = (
      await connection.query(
        `
    SELECT users.id, users.name, SUM(urls."visitCount") AS "visitCount"
    FROM users
    JOIN urls ON urls."userId" = users.id
    WHERE users.id = $1
    GROUP BY users.id
    `,
        [userId]
      )
    ).rows[0];
    const shortenedUrls = (
      await connection.query(
        `
    SELECT id,"shortUrl",url,"visitCount"
    FROM urls
    WHERE "userId" = $1   
    `,
        [userId]
      )
    ).rows;
    // caso venha vazio
    res.status(200).send({ ...infoUser, shortenedUrls });
  } catch (error) {
    res.sendStatus(500);
  }
}
