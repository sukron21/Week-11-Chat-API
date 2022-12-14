require('dotenv').config()
// deklare exprees
const express = require('express')
const { list, destroy, detail, update, detailname, register,login,listLimit } = require('../Controller/user.controller')
// const{register, login}=require('../controller/auth.controller')
// const{isAdmin, isCustomer}= require('../middleware/authorization')

const router = express.Router()


router
  .get('/user', list) 
  .get('/user/:id', detail)
  .get('/username/:username', detailname)
//   .post('/user/tambah', insert)
  .put('/user/:id',update)
  .delete('/user/:id', destroy)
//   .delete('/user/:id',remove, destroy)
   .post('/register' , register)
   .post('/login',login)

module.exports = router
