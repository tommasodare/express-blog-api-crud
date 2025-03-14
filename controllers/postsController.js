const arrayPosts = require('../data/posts_array')

function index(req, res) { 
    res.json(arrayPosts)
}

function show(req, res) {
    res.json(arrayPosts[req.params.id - 1])
}

function store(req, res) {
    res.send("Create new post")
}