const Book = require('../models/books')


const createBooks = async (req, res) =>{
    const {title, author, genre, year, available} = req.body
    try {
        const newBook = new Book({title, author, genre, year, available})
        await newBook.save()
        res.status(200).json({data: newBook})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


const getBooks = async (req, res) =>{
    try {
        const books = await Book.find()
        res.status(200).json({data: books})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getBooksById = async (req, res) =>{
    try {
        const id = req.params.id
        const book = await Book.findById(id)
        if(!book){
            res.status(404).json({message: "Book Not Found"})
        }
        res.status(200).json({data: book})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateBook = async (req, res) =>{
    try {
        const id = req.params.id
        const newBook = await Book.findByIdAndUpdate(id, req.body)
        
        res.status(200).json({message: "Book Updated Successfully" ,data: newBook})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteBook = async (req, res) =>{
    try {
        const id = req.params.id
        const newBook = await Book.findByIdAndDelete(id)
        res.status(200).json({message: "Book Deleted Successfully" ,data: newBook})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {createBooks, getBooks, getBooksById, updateBook, deleteBook}