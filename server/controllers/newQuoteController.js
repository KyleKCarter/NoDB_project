const quotes = require("../../quotes.json");

function getNewQuote(req, res) {
    res.status(200).json(quotes[Math.floor(Math.random()*quotes.length)]);
}

module.exports = {
    getNewQuote
}