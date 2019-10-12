const quotes = require("../../quotes.json");

let nextQuote = [];

function addNewQuote(req, res) {
    nextQuote.push(
        quotes[Math.floor(Math.random()*quotes.length)]
    )
    res.status(200).json(nextQuote)
    console.log(nextQuote);
}

function getNewQuote(req, res) {
    
    res.status(200).json(quotes[Math.floor(Math.random()*quotes.length)]);
    console.log(nexQuote);
}

module.exports = {
    addNewQuote,
    getNewQuote
}