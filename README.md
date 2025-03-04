[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/fO1z5voz)

# Exercise 05 - Web Server with ExpressJS

## Student Description

**Name:** Eunel Jacob C. Joyosa

**Degree Program:** BS Computer Science

**Section:** C-1L

## Things you did in your code
These are what I implemented in my code:
### server.js
1. **Imports:**
    - Used `express` for the server and `fs` for file operations (e.g., `appendFile`).
2. **Server Setup:**
    - Initialized `express()` and added lines to parse JSON and URL-encoded data.
3. **Endpoints:**
    - `/`: responds with `"Exercise 05 - Web Server with Express JS"`
    - `/find-by-isbn-author`: Accepts `isbn` and `author` as query parameters and responds with retrieved details.
    - `/find-by-author`: Accepts `author` as a query parameter and responds with retrieved details.
    - `/add-book`: Accepts a JSON object with `bookName`, `isbn`, `bookAuthor`, and `yearPublished`. Validates the data, and appends it into `books.txt`, then responds with `{ success: true }` when all data are valid, otherwise `{ success: false }`.
4. **Server Start:**
    - Listens on port `3000` and logs a startup message.

### request.js
1. **Imports:**
    - Used `needle` to send the HTTP requests.
2. **Valid POST Requests:**
    - Sent three valid book entries to `/add-book` (followed sample data from exercise).
    - Then logged server's response for each request.
3. **Invalid Requests:**
    - Included two invalid entries for case-testing:
        - Missing `bookName`.
        - Empty `isbn`.

## Key Takeaways from the Exercise
This exercise provided a thorough overview of developing and interacting with web servers using Express.js and interacting with HTTP requests and responses. I gained further insight into how to set up a basic server, define routes for different HTTP methods such as GET and POST, and parse request bodies and query parameters.

## References
- https://nodejs.org/api/fs.html
- https://expressjs.com/en/guide/routing.html
- https://www.npmjs.com/package/needle