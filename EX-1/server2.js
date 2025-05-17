// server.js
const express = require('express');
const app = express();
const fs = require("fs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Welcome to the Home Page");
})

app.get("/contact", (req, res) => {
    res.send(`
        <form method="POST" action="/contact">
            <input type="text" name="name" placeholder="Your name" />
            <button type="submit">Submit</button>
        </form>
    `);
})

app.post('/contact', (req, res) => {
    const name = req.body.name;

    console.log("Received name:", name);

    fs.appendFile('submissions.txt', name + '\n', (err) => {
        if (err) {
            res.status(500).type('text/plain').send('Server error writing to file.');
            return;
        }

        res.send(`
            <html>
                <head>
                    <title>Success</title>
                </head>
                <body>
                    <h1>Thank you, ${name}!</h1>
                    <p>Your submission was received.</p>
                </body>
            </html>
        `);
    });
});

app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

