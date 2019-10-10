const quotes = require("../../quotes.json");

let randomQuotes = [];
let quote = [];

function addQuote(req, res) {
    randomQuotes.push(
        quotes[Math.floor(Math.random()*quotes.length)]
    )
    res.status(200).json(randomQuotes)
}

function getQuote(req, res) {
    res.status(200).json(randomQuotes);
}

module.exports = {
    addQuote,
    getQuote
}