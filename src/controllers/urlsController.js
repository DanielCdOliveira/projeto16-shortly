
import { nanoid } from 'nanoid'

import connection from "./../db.js";

export async function createUrl(req, res) {
    console.log(req.body);
    const {url} = req.body
    const shortUrl = nanoid()
    console.log(shortUrl);
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "").trim();
    console.log(token);
    if (!token) return res.sendStatus(401);
  try {
      const userId = 1
    // const userId = await connection.query(`
    // SELECT sessions."userId" 
    // FROM sessions
    // WHERE token=($1)     
    // `,[token])

    console.log(userId);
    if(!userId) return res.sendStatus(401)
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

export async function getUrl(req, res) {

  try {
    
  } catch (error) {
    console.log("Error recovering user.");
    console.log(error);
    return res.sendStatus(500);
  }
}