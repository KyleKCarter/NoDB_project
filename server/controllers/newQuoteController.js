const quotes = require("../../quotes.json");

let newQuote = []

function addNewQuote(req, res) {
    newQuote.push(
        quotes[Math.floor(Math.random()*quotes.length)]
    )
    res.status(200).json(newQuote)
}

function getNewQuote(req, res) {
    res.status(200).json(quotes[Math.floor(Math.random()*quotes.length)]);
}

module.exports = {
    addNewQuote,
    getNewQuote
}