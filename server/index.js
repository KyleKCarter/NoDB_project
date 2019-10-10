const express = require("express");
const {addQuote, getQuote} = require("./controllers/quoteController");

const app = express();

app.use(express.json());

app.post("/api/quote", addQuote);

app.get("/api/quote", getQuote);

app.listen(5050, () => console.log("Running on PORT 5050"));