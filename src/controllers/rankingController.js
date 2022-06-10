import connection from "../db.js";

export default async function getRanking(req, res){
try {
    const urlArray = (await connection.query(`
    SELECT users.id, users.name, COUNT(urls."userId") AS "linksCount", SUM(urls."visitCount") AS "visitCount"
    FROM users
    JOIN urls ON urls."userId" = users.id
    GROUP BY users.id
    `)).rows
    res.status(200).send(urlArray)
} catch (error) {
    
}



}