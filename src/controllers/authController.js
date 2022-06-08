import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

import connection from "./../db.js";

export async function signUp(req, res) {
    console.log(req.body);
    const user = req.body
  try {
    const SALT = 10;
    const passwordHash = bcrypt.hashSync(user.password, SALT);
    await connection.query(`
    INSERT INTO users
    (name,email,password)
    VALUES ($1,$2,$3)    
    `,[user.name, user.email, passwordHash])
    return res.sendStatus(201); // created
  } catch (error) {
    console.log("Error creating new user.");
    console.log(error);
    return res.sendStatus(500);
  }

}

export async function signIn(req, res) {

  try {
    const user = (await connection.query(`
    SELECT * FROM users
    WHERE email = $1
    `,[req.body.email])).rows[0]
    console.log(user);
    if(!user) return res.sendStatus(404);

    if(user && bcrypt.compareSync(req.body.password, user.password)) {
      const token = uuid();
      await connection.query(`
      INSERT INTO sessions
      ("userId", token) VALUES ($1,$2)
      `,[user.id, token])

      return res.status(200).send(token);
    }

    return res.sendStatus(200); // not found
  } catch (error) {
    console.log("Error recovering user.");
    console.log(error);
    return res.sendStatus(500);
  }
}