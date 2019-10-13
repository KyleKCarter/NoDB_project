let addedQuotes = [];
let id = 1;

function addUserQuote(req, res) {
    const {img, quote, character, movie} = req.body;
    addedQuotes.push({
        img,
        quote,
        character,
        movie
    })
    id++;
    res.status(200).json(addedQuotes);
}

function getAddedQuotes(req, res) {
    res.status(200).json(addedQuotes);
}

module.exports = {
    addUserQuote,
    getAddedQuotes
}