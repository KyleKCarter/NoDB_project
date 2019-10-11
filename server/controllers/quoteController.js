const quotes = require("../../quotes.json");

let randomQuotes = [];

function addQuote(req, res) {
    randomQuotes.push(
        quotes[Math.floor(Math.random()*quotes.length)]
    )
    res.status(200).json(randomQuotes)
}

function getQuote(req, res) {
    res.status(200).json(quotes[Math.floor(Math.random()*quotes.length)]);
}

module.exports = {
    addQuote,
    getQuote
}