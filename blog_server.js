const express = require('express')
const app = express()
const port = 3000

// Inserimento body-parser
app.use(express.json())

const postsRouter = require('./routers/posts')

app.get('/', (req, res) => {
    res.send("Welcome on my server")
})

app.use('/api/v1/blog_posts', postsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})