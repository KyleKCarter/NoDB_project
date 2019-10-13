import React, {Component} from "react";
import axios from "axios";
import "./AddQuote.css";

class AddQuote extends Component {
    constructor() {
        super();
        this.state = {
            img: "",
            quote: "",
            character: "",
            movie: ""
        }
    }

    handleImgChange = e => {
        this.setState({ img: e.target.value })
    }

    handleQuoteChange = e => {
        this.setState({ quote: e.target.value })
    }

    handleCharacterChange = e => {
        this.setState({ character: e.target.value })
    }

    handleMovieChange = e => {
        this.setState({ movie: e.target.value })
    }

    handleClick = (e) => {
        const{img, quote, character, movie} = this.state;
        e.preventDefault();
        axios.post("/api/addQuote", {
            img,
            quote,
            character,
            movie
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return(
            <div>
                <h1 className="newQuoteTitle">Add Quote</h1>
                <form className="addNewQuote">
                    <h4>Picture should be no bigger than 500x400</h4>
                    <input placeholder="Image URL" onChange={this.handleImgChange} />
                    <input placeholder="Quote" onChange={this.handleQuoteChange} />
                    <input placeholder="Character" onChange={this.handleCharacterChange} />
                    <input placeholder="Movie" onChange={this.handleMovieChange} />
                    <button onClick={this.handleClick}>Submit Quote</button>
                </form>
            </div>
        )
    }
}

export default AddQuote;