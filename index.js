const express = require('express')
const app = express()

app.use(express.json())
let books = []

app.post('/books',  (req, res) => {
    //input
    let newTitle = req.body.title
    let newPrice = req.body.price
    let newUnit = req.body.unit
    let newIsbn = req.body.isbn
    let newImageurl  = req.body.imageurl

    let newBooks = {
        title: newTitle,
        price: newPrice,
        unit: newUnit,
        isbn: newIsbn,
        imageurl : newImageurl
    }
    let bookID = 0

    //process
    books.push(newBooks)

    //n-1
    bookID = books.length - 1

    //output

    res.status(201).json(bookID)
})

const port = 3000
app.listen(port,  () => console.log(`Server started at ${port}`))
