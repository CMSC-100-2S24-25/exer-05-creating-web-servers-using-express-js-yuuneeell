// server.js
// JOYOSA, EUNEL JACOB C.
// CMSC 100 C-1L
// Description: This JavaScript script is intended as the server side of the exercise that accepts requests on both POST and GET endpoints

// import modules
import express from 'express';
import fs from 'fs';

// setup the server and added parser to read incoming requests
const app = express();

// Below acts as a plugin in order to read JSON contents of incoming request messages
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

// get() method that just sends the response message below
app.get('/', (req, res) =>{
    res.send('Exercise 05 - Web Server with Express JS');
});

// get() method that retrieves entire book details using ISBN and Author
app.get('/find-by-isbn-author', (req, res) =>{
    console.log('Request Query:', req.query); // prints out the request query (for debugging purposes)
    const {isbn, author} = req.query;

    res.send(`Retrieved book details:\n ISBN: ${isbn}\n Author: ${author}`);
});

// get() method that retrieves book details using Author as only parameter
app.get('/find-by-author', (req, res) =>{
    console.log('Request Query:', req.query); // prints out the request query (for debugging purposes)
    const {author} = req.query;

    res.send(`Retrieved book details:\n Author: ${author}`);
});

// post() method that adds book entries to books.txt file
app.post('/add-book', (req,res) => {
    console.log('Request Body:', req.body); // prints out the request body (for debugging purposes)
    const {bookName, isbn, bookAuthor, yearPublished } = req.body;

    // Check if all the required fields are present
    if (!bookName || !isbn || !bookAuthor || !yearPublished) {
        console.log("Error: All fields are required.\n");
        return res.json({ success: false });
    }

    // Format the book data as string to be saved in books.txt
    const bookDataEntry = `${bookName},${isbn},${bookAuthor},${yearPublished}\n`;

    // Append the book data entry into books.txt file
    fs.appendFile('books.txt', bookDataEntry, (err) => {
        if (err) {
            console.log('Failed to saved book: ', err);
            return res.json({ success: false });
        }
        res.json({ success: true });
    });
});

app.listen(3000, () => { console.log('Server started at port 3000')});