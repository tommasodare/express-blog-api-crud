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
    const id = Number(req.params.id)

    // Cerco il post tramite ID
    const post = arrayPosts.find(post => post.id === id)

    // Lo restituisco in formato JSON
    res.json(post)
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
    //res.send(`Delete post with id: ${req.params.id}`)

    //Recupero l'ID dall'URL e lo trasformo in numero
    const id = Number(req.params.id)

    // Cerco il post tramite ID
    const post = arrayPosts.find(post => post.id === id)

    /* if (!post) {
        res.status(404)

        return res.json({
            status: 404,
            error: "Not Found",
            message: " Post non trovato"
        })
    } */


    if (post) {
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