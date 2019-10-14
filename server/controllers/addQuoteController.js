let addedQuotes = [];
let id = 0;

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

function updateQuote(req, res) {
    for (let i=0; i<addedQuotes.length; i++) {
        if (addedQuotes[i].id == +req.params.id) {
            addedQuotes[i].Img = req.body.Img
            addedQuotes[i].Quote = req.body.Quote;
            addedQuotes[i].Character = req.body.Character;
            addedQuotes[i].Movie = req.body.Movie;
        }
    }
    console.log(addedQuotes);
    res.status(200).json(addedQuotes) 
};

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
    updateQuote,
    deleteQuote
}