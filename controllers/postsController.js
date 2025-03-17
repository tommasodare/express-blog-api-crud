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
    //res.json(arrayPosts[req.params.id - 1])

    // Recupero l'id dall'URL e lo trasformo in un numero
    const postSlug = req.params.slug

    // Cerco il post tramite slug
    const post = arrayPosts.find(post => post.slug === postSlug)

    // Lo restituisco in formato JSON
    

    if (!post) {
        res.status(404)

        return res.json({
            status: 404,
            error: "Not Found",
            message: " Post non trovato"
        })
    } else {
        res.json(post)
    }
}

function store(req, res) {
    res.send("Create new post")
}

function update(req, res) {
    res.send(`Update the post with slug: ${req.params.id}`)
}

function modify(req, res) {
    res.send(`Modify the post with id: ${req.params.id}`)
}

function destroy(req, res) {
    //res.send(`Delete post with id: ${req.params.id}`)

    //Recupero l'ID dall'URL e lo trasformo in numero
    const postSlug = req.params.slug

    // Cerco il post tramite ID
    const post = arrayPosts.find(post => post.slug === postSlug)

    if (!post) {
        res.status(404)

        return res.json({
            status: 404,
            error: "Not Found",
            message: " Post non trovato"
        })
    } else {
        res.status(204)
    }

    // Rimuovo la pizza dall'array
    arrayPosts.splice(arrayPosts.indexOf(post), 1)


    // Stampo la lista aggiornata
    console.log(arrayPosts);

}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}