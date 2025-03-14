const express = require('express')
const router = express.Router()
const arrayPosts = require('../data/posts_array')

// Index
router.get('/', (req, res) => {
    res.json(arrayPosts)
})

// Show
router.get('/:id', (req, res) => {
    res.json(arrayPosts[req.params.id - 1])
})

// Create
router.post('/', (req, res) => {
    res.send("Create new post")
})

// Update
router.put('/:id', (req, res) => {
    res.send(`Update the post with id: ${req.params.id}`)
})

// Modify
router.patch('/:id', (req, res) => {
    res.send(`Modify the post with id: ${req.params.id}`)
})

// Destroy
router.delete('/:id', (req, res) => {
    res.send(`Delete post with id: ${req.params.id}`)
})

module.exports = router