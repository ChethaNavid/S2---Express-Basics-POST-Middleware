const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send(`
        <html>
            <head><title>Home</title></head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple Node.js server.</p>
            </body>
        </html>
    `);
});

app.get("/about", (req, res) => {
    res.send(`
        <html>
            <head><title>Contact</title></head>
            <body>
                <h1>You can contact us vai email...</h1>
            </body>
        </html>
        
    `)
})

app.get("/contact-us", (req, res) => {
    res.send(`
        <html>
            <head><title>Contact</title></head>
            <body>
            <h1>You can contact us vai email...</h1>
            </body>
        </html> 
    `)
})

app.get("/products", (req, res) => {
    res.send(`
        <html>
            <head><title>Products</title></head>
            <body>
                <h1>Buy one get one...</h1>
            </body>
        </html>
        
    `)
})

app.get("/projects", (req, res) => {
    res.send(`
        <html>
            <head><title>Projects</title></head>
            <body>
                <h1>Here are our awesome projects</h1>
            </body>
        </html>
        
    `)
})

app.use((req, res) => {
    res.status(404).send(`
        <html>
            <head><title>404 Not Found</title></head>
            <body>
                <h1>Page Not Found</h1>
            </body>
        </html>
    `);
});

app.listen(3000, () => console.log("Server running"));
