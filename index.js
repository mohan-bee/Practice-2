const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./config/db')
const booksRouter = require('./routes/books')

const PORT = process.env.PORT

app.use(express.json())
app.use('/books', booksRouter)


app.get('/', (req, res) =>{
    try {
        res.send("Hello World")
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(PORT, ()=>{
    try {
        console.log(`Server is Running at ${PORT}`)
        connectDB()
    } catch (error) {
        console.log(error.message)
    }
})