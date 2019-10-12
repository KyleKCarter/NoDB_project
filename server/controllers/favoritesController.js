const quotes = require("../../quotes.json");
let favoriteQuotes = [];

function addToFavorites(req, res) {
    const{id} = req.params;
    const index = quotes.findIndex(val => {
        return val.id == id
    });
    const favQuote = quotes.slice(index, index + 1)
    favoriteQuotes.push(favQuote[0]);
    res.status(200).json(favoriteQuotes);
}

function getFavorites(req, res) {
    res.status(200).json(favoriteQuotes);
}

function removeFromFavorites(req, res) {
    const {id} = req.params;
    console.log(id);
    const index = favoriteQuotes.findIndex(val => {
        if(val.id == id) {
            return true;
        }
    });
    favoriteQuotes.splice(index, 1);
    res.status(200).json(favoriteQuotes);
}

module.exports = {
    addToFavorites,
    getFavorites,
    removeFromFavorites
}
