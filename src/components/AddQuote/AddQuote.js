import React, {Component} from "react";
import axios from "axios";
import "./AddQuote.css";

class AddQuote extends Component {
    constructor() {
        super();
        this.state = {
            img: "",
            Quote: "",  
            Character: "",
            Movie: ""
        }
    }

    handleImgChange = e => {
        this.setState({ img: e.target.value })
    }

    handleQuoteChange = e => {
        this.setState({ Quote: e.target.value })
    }

    handleCharacterChange = e => {
        this.setState({ Character: e.target.value })
    }

    handleMovieChange = e => {
        this.setState({ Movie: e.target.value })
    }

    handleClick = (e) => {
        const{img, Quote, Character, Movie} = this.state;
        e.preventDefault();
        axios.post("/api/addQuote", {
            img,
            Quote,
            Character,
            Movie
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return(
            <div className="addQuoteContent">
                <h1 className="newQuoteTitle">Add Quote</h1>
                <form className="addNewQuoteCard">
                    <div className="newQuoteInputFields">
                        <h5 className="imageText">Image: </h5> <p className="imgDirections">Picture should be no bigger than 500x400</p> <input placeholder="Image URL" onChange={this.handleImgChange} />
                        <h5 className="quoteText">Quote: </h5> <input className="inputQuote" placeholder="Quote" onChange={this.handleQuoteChange} />
                        <h5 className="characterText">Character: </h5> <input className="inpueCharacter" placeholder="Character" onChange={this.handleCharacterChange} />
                        <h5 className="movieText">Movie: </h5> <input className="inputMovie" placeholder="Movie" onChange={this.handleMovieChange} />
                    </div>
                    <button className="submitQuote" onClick={this.handleClick}>Submit Quote</button>
                </form>
            </div>
        )
    }
}

export default AddQuote;