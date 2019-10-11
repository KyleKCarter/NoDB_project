const quotes = require("../../quotes.json");
let favoriteQuotes = [];

function addToFavorites(req, res) {
    const{id} = req.params;
    // console.log(id);
    const index = quotes.findIndex(val => {
        // console.log(val);
        return val.id == id
        // console.log(val.id);
    });
    const favQuote = quotes.slice(index, index + 1)
    // console.log(favQuote);
    favoriteQuotes.push(favQuote[0]);
    // console.log(favoriteQuotes);
    res.status(200).json(favoriteQuotes);
}



function getFavorites(req, res) {
    res.status(200).json(favoriteQuotes);
}

module.exports = {
    addToFavorites,
    getFavorites
}
