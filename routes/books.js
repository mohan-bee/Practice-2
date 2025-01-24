const router = require('express').Router()
const {createBooks, getBooks, getBooksById, updateBook, deleteBook} = require('../controllers/books')

router.post('/', createBooks)
router.get('/', getBooks)
router.get('/:id', getBooksById)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

module.exports = router 