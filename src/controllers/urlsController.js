import { nanoid } from "nanoid";

import connection from "./../db.js";

export async function createUrl(req, res) {
  const { url } = req.body;
  const shortUrl = nanoid();
  const userId = res.locals.userId;
  try {
    await connection.query(
      `
    INSERT INTO urls (url,"shortUrl","userId") 
    VALUES ($1,$2,$3)    
    `,
      [url, shortUrl, userId]
    );
    res.status(201).send({ shortUrl });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function getUrlById(req, res) {
  const id = req.params.id;
  console.log(id);
  try {
    const urlResult = (
      await connection.query(
        `
    SELECT "id", "url", "shortUrl" 
    FROM urls
    WHERE id = $1    
    `,
        [id]
      )
    ).rows[0];
    if (!urlResult) return res.sendStatus(404);
    res.status(200).send(urlResult);
  } catch (error) {
    console.log("Error recovering user.");
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function redirectToUrl(req,res){
    const shortUrl = req.params.shortUrl
try {
    const {url} = (await connection.query(`
    SELECT url 
    FROM urls 
    WHERE "shortUrl"=$1    
    `,[shortUrl])).rows[0]
    console.log(url);
    if(!url) return res.sendStatus(404)
    res.redirect(url)

} catch (error) {
    return res.sendStatus(500)
}
}