const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/posts')

app.get('/', (req, res) => {
    res.send("Welcome on my server")
})

app.use('/api/v1/blog_posts', postsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

// OPERATION CRUD

// Index
app.get('/api/v1/blog_posts', (req, res) => {
    res.send("Posts List")
})

// Show
app.get('/api/v1/blog_posts/:id', (req, res) => {
    res.send(`Details of post with id: ${req.params.id}`)
})

// Create
app.post('/api/v1/blog_posts', (req, res) => {
    res.send("Create new post")
})

// Update
app.put('/api/v1/blog_posts/:id', (req, res) => {
    res.send(`Update the post with id: ${req.params.id}`)
})

// Modify
app.patch('/api/v1/blog_posts/:id', (req, res) => {
    res.send(`Modify the post with id: ${req.params.id}`)
})

// Destroy
app.delete('/api/v1/blog_posts/:id', (req, res) => {
    res.send(`Delete post with id: ${req.params.id}`)
})