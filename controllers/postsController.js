const arrayPosts = require('../data/posts_array')

function index(req, res) {

    //res.json(arrayPosts)

    // l'array filtrato inizialmente corrisponde a quello originale
    let filteredArrayPosts = arrayPosts

    // Se la richiesta contiene un filtro, allora filtriamo l'array
    if (req.query.tag) {
        filteredArrayPosts = arrayPosts.filter(post => post.tags.includes(req.query.tag))
    }

    res.json(filteredArrayPosts)
}

function show(req, res) {
    res.json(arrayPosts[req.params.id - 1])
}

function store(req, res) {
    res.send("Create new post")
}

function update(req, res) {
    res.send(`Update the post with id: ${req.params.id}`)
}

function modify(req, res) {
    res.send(`Modify the post with id: ${req.params.id}`)
}

function destroy(req, res) {
    res.send(`Delete post with id: ${req.params.id}`)
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}