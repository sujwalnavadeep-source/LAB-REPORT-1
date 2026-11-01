const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

function startServer() {
    return app.listen(PORT, () => {
        console.log(`Express server is running at http://localhost:${PORT}`);
    });
}

// GET /
app.get(["/", "/home"], (request, response) => {
    response.status(200).send("Welcome to my Lab 1 server!");
});

// GET /about
app.get(["/about", "/about/"], (request, response) => {
    response.status(200).json({
        name: "S. Ujwal Navadeep",
        section: "CSE FSD - 2B"
    });
});

// GET /time
app.get(["/time", "/time/"], (request, response) => {
    const currentTime = new Date();
    response.status(200).send(`Current Date and Time: ${currentTime}`);
});

// Handle unknown routes - 404 Not Found
app.use((request, response) => {
    response.status(404).send("404 - Page Not Found");
});

if (require.main === module) {
    startServer();
}

module.exports = app;
module.exports.app = app;
module.exports.startServer = startServer;
