const Users = require('./models/users')
const Posts = require('./models/posts')
const knex = require('./util/database')
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
  res.json('database connected')
})

app.post('/signup/:username/:email/:password', async (req, res) => {
  try {
    const user = await Users.query().insert({
      name: req.params.username,
      email: req.params.email,
      password: req.params.password,
    })
    res.json(user)
  } catch (err) {
    console.error(err.message)
  }
})

app.post('/login/:email/:password', async (req, res) => {
  try {
    const validUser = await Users.query()
      .select('id')
      .where('email', '=', req.params.email)
      .where('password', '=', req.params.password)
    res.json(validUser)
  } catch (err) {
    console.error(err.message)
  }
})

app.get('/posts:id', async (req, res) => {
  try {
    const posts = await Users.query()
      .select('post')
      .where('id', '=', req.params.id)
      .orderBy('createdAt')
    res.json(posts)
  } catch (err) {
    console.error(err.message)
  }
})

app.post('/posts:id/:post', async (req, res) => {
  try {
    const posts = await Posts.query().insert({
      post: req.params.post,
      post_id: req.params.id,
    })
    res.json(posts)
  } catch (err) {
    console.error(err.message)
  }
})

app.listen('3000', () => {
  console.log('server started on port no 3000')
})
