const express = require('express')
const mysql = require('mysql')
const pool = require('./db')
const app = express()

app.use(express.json())

pool.connect((err) => {
  if (err) {
    throw err
  }
  console.log('mysql connected')
})

app.get('/posts', async (req, res) => {
  try {
    const allPosts = await pool.query('SELECT * FROM posts')
    res.json(allPosts.rows)
  } catch (err) {
    console.error(err.message)
  }
})

app.post('/posts', async (req, res) => {
  try {
    const { posts } = req.body
    const newPosts = await pool.query(
      'INSERT INTO posts (postdata) VALUES ($1)        RETURNING *',
      [posts]
    )
    res.json(newPosts)
  } catch (err) {
    console.error(err.message)
  }
})

app.get('/posts/:id', async (req, res) => {
  const { id } = req.params
  try {
    const post = await pool.query('SELECT * FROM posts WHERE todo_id = $1', [
      id,
    ])

    res.json(post.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

app.put('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { post } = req.body

    const updataPost = await pool.query(
      'UPDATE posts SET postdata = $1 WHERE postid = $2',
      [post, id]
    )
    res.json('post is updated')
  } catch (err) {
    console.error(err.message)
  }
})

app.delete('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deletePost = await pool.query('DELETE FROM posts WHERE postid = $1', [
      id,
    ])
    res.json('post is successfully deleted')
  } catch (err) {
    console.error(err.message)
  }
})

app.listen('3000', () => {
  console.log('server started on port no 3000')
})
