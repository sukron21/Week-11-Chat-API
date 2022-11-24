const db = require('../config/db')
const userModel = {
  // router 
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users', (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  },
  selectDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users where id=${id}`, (err, result) => {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
  },
  nameDetail: (username) => {
    return new Promise((resolve, reject) => {
      db.query(`select * from users where username='${username}'`,
        (err, result) => {
          if (err) {
            reject(err)
          }
          resolve(result)
        })
    })
  },
  
  register:({username,email, phone, password})=>{
    return new Promise((resolve,reject)=>{
        db.query(`insert into users (username,email, phone, password) 
        values
        ('${username}','${email}','${phone}','${password}')`,(err,res)=>{
            if (err) {
                reject(err)
              }
              resolve(res)
        })
    })
  },  
  updateAccount: (id,username,email, phone, password) => {
    return new Promise((resolve, reject) => {
      db.query(
       ` UPDATE users SET
        username = COALESCE ($1, username),
        email = COALESCE ($2, email),
        phone = COALESCE ($3, phone),
        password = COALESCE ($4, password)
        WHERE id = $5
        `,
        [username,email, phone, password, id],(err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        })
      })
    },
  
  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM users WHERE id = ${id};`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  checkUEmail:(email)=>{
    return new Promise((resolve, reject)=>{
      db.query(`select * from users where email='${email}'`, (err, result)=>{
        if (err) {
          reject(err)
        }
        resolve(result);
      })
    })
  },  

}
module.exports = userModel