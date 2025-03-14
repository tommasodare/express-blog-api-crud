const express = require('express')
const router = express.Router()
const pizzaController = require('../controllers/postsController')

// Index
router.get('/', pizzaController.index)

// Show
router.get('/:id', pizzaController.show)

// Create
router.post('/', pizzaController.store)

// Update
router.put('/:id', pizzaController.update)

// Modify
router.patch('/:id', pizzaController.modify)

// Destroy
router.delete('/:id', pizzaController.destroy)


module.exports = router