const express = require("express");
const {addQuote, getQuote} = require("./controllers/quoteController");
const {getNewQuote} = require("./controllers/newQuoteController");
const {addToFavorites, getFavorites, removeFromFavorites} = require("./controllers/favoritesController");
const {addUserQuote, getAddedQuotes, updateQuote, deleteQuote} = require("./controllers/addQuoteController");

const app = express();

app.use(express.json());

app.post("/api/quote", addQuote);
app.get("/api/quote", getQuote);

app.get("/api/new_quote", getNewQuote);

app.post("/api/favorites/:id", addToFavorites);
app.get("/api/favorites/", getFavorites);
app.delete("/api/favorites/:id", removeFromFavorites);

app.post("/api/addQuote", addUserQuote);
app.get("/api/addQuote", getAddedQuotes);
app.put("/api/addQuote/:id", updateQuote);
app.delete("/api/addQuote/:id", deleteQuote);

app.listen(5050, () => console.log("Running on PORT 5050"));