const quotes = require("../../quotes.json");
let favoriteQuotes = [];

function addToFavorites(req, res) {
    const{id} = req.params;
    console.log(id);
    const index = quotes.findIndex(val => {
        // console.log(val);
        if(val.id == id) {
            return val;
        }
        // console.log(val.id);
    });
    favoriteQuotes.push(index, 1);
    console.log(index);
    res.status(200).json(favoriteQuotes);
}

function getFavorites(req, res) {
    res.status(200).json(favoriteQuotes);
}

module.exports = {
    addToFavorites,
    getFavorites
}
