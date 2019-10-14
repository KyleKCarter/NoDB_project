let addedQuotes = [];
let id = 1;

function addUserQuote(req, res) {
    const {Img, Quote, Character, Movie} = req.body;
    addedQuotes.push({
        Img,
        Quote,
        Character,
        Movie,
        id
    })
    id++;
    res.status(200).json(addedQuotes);
}

function getAddedQuotes(req, res) {
    res.status(200).json(addedQuotes);
}

function deleteQuote(req, res) {
    const {id} = req.params;
    const index = addedQuotes.findIndex(val => {
        if(val.id == id) {
            return true;
        }
    });
    addedQuotes.splice(index, 1);
    res.status(200).json(addedQuotes);
}



module.exports = {
    addUserQuote,
    getAddedQuotes,
    deleteQuote
}