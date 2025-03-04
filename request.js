// request.js
// JOYOSA, EUNEL JACOB C.
// CMSC 100 C-1L
// Description: This JavaScript script is intended as the request script that sends requests to the server.js script

// import modules
import needle from 'needle';

// book entry 1
needle.post(
    `http://localhost:3000/add-book`,
    { 
        bookName: "Harry Potter and the Philosopher’s Stone",
        isbn: "978-0-7475-3269-9",
        bookAuthor: "J.K Rowling",
        yearPublished: "1997"
     },
    (err,res) => {
        console.log(res.body);
    }
);

// book entry 2
needle.post(
    `http://localhost:3000/add-book`,
    { 
        bookName: "Harry Potter and the Chamber of Secrets",
        isbn: "0-7475-3849-2",
        bookAuthor: "J.K Rowling",
        yearPublished: "1998"
     },
    (err,res) => {
        console.log(res.body);
    }
);

// book entry 3
needle.post(
    `http://localhost:3000/add-book`,
    { 
        bookName: "The Little Prince",
        isbn: "978-0156012195",
        bookAuthor: "Antoine Saint-Exupery",
        yearPublished: "1943"
     },
    (err,res) => {
        console.log(res.body);
    }
);

// // book entry 4 (Invalid: bookName not included)
// needle.post(
//     `http://localhost:3000/add-book`,
//     { 
//         isbn: "0-7475-3849-2",
//         bookAuthor: "J.K Rowling",
//         yearPublished: "1998"
//      },
//     (err,res) => {
//         console.log(res.body);
//     }
// );

// // book entry 5 (Invalid: isbn field empty)
// needle.post(
//     `http://localhost:3000/add-book`,
//     { 
//         bookName: "Diary of a Wimpy Kid",
//         isbn: "",
//         bookAuthor: "Jeff Kinney",
//         yearPublished: "2007"
//      },
//     (err,res) => {
//         console.log(res.body);
//     }
// );