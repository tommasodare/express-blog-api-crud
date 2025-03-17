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

    // Recupero l'id dall'URL
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
    //res.send("Create new post")
    //console.log(req.body);

    // Creo un nuovo slug utilizzando il titolo fornito dall'utente
    const newSlug = req.body.title.replaceAll(" ", "-")

    // Creo un nuovo oggetto post
    const newPost = {
        title: req.body.title,
        slug: newSlug.toLowerCase(),
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    // Aggiugiamo il nuovo post all'arrayPosts
    arrayPosts.push(newPost)

    // Loggiamo in console
    console.log(arrayPosts);

    // Restituisco lo status corretto e il post appena creato
    res.status(201)
    res.send(newPost)

}

function update(req, res) {
    //res.send(`Update the post with slug: ${req.params.id}`)

    // Recupero lo slug dall'URL
    const postSlug = req.params.slug

    // Cerco il post tramite lo slug
    const post = arrayPosts.find(post => post.slug === postSlug)

    // Creo un nuovo slug utilizzando il titolo fornito dall'utente
    const newSlug = req.body.title.replaceAll(" ", "-")

    // Aggiorno il post
    post.title = req.body.title
    post.slug = newSlug.toLowerCase()
    post.content = req.body.content
    post.image = req.body.image
    post.tags = req.body.tags

    console.log(arrayPosts);

    // Restituisco il post appena creato
    res.json(post)

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