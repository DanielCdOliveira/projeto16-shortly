
import { nanoid } from 'nanoid'

import connection from "./../db.js";

export async function createUrl(req, res) {
    const {url} = req.body
    const shortUrl = nanoid()
    const userId = res.locals.userId
    console.log(userId);
    // const  {authorization}  = req.headers;
    // const token = authorization?.replace('Bearer ', '').trim();
    // if (!token) return res.sendStatus(401);
  try {
    // const {userId} = (await connection.query(`
    // SELECT sessions."userId" 
    // FROM sessions
    // WHERE token=($1)     
    // `,[token])).rows[0]
    // if(!userId) return res.sendStatus(401)
    await connection.query(`
    INSERT INTO urls (url,"shortUrl","userId") 
    VALUES ($1,$2,$3)    
    `,[url, shortUrl, userId])
res.status(201).send({shortUrl})
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }

}

export async function getUrlById(req, res) {
    const id = req.params.id
    console.log(id);
  try {
    const urlResult =  (await connection.query(`
    SELECT "id", "url", "shortUrl" 
    FROM urls
    WHERE id = $1    
    `,[id])).rows[0]
    if(!urlResult) return res.sendStatus(404)
    res.status(200).send(urlResult)
  } catch (error) {
    console.log("Error recovering user.");
    console.log(error);
    return res.sendStatus(500);
  }
}