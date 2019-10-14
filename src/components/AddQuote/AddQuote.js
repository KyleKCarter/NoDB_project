import React, {Component} from "react";
import axios from "axios";
import "./AddQuote.css";

class AddQuote extends Component {
    constructor() {
        super();
        this.state = {
            Img: "",
            Quote: "",  
            Character: "",
            Movie: "",
            quote: []
        }
    }

    handleImgChange = e => {
        this.setState({ Img: e.target.value })
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
        const{Img, Quote, Character, Movie} = this.state;
        e.preventDefault();
        axios.post("/api/addQuote", {
            Img,
            Quote,
            Character,
            Movie
        })
        .then(response => {
            // console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
        // this.setState({ Img: "",
        //                 Quote: "",
        //                 Character: "",
        //                 Movie: ""})
    }

    componentDidMount() {
        axios.get("/api/quote")
        .then(response => {
            this.setState({quote: response.data});
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return(
            <div className="addQuotePage">
                <h1 className="newQuoteTitle">Add Quote</h1>
                <div className="addQuoteContent">
                    <form className="addNewQuoteCard">
                        <div className="newQuoteInputFields">
                            <h5 className="imageText">Image: </h5> <p className="imgDirections">Picture should be no bigger than 500x400</p> <input placeholder="Image URL" onChange={this.handleImgChange} />
                            <h5 className="quoteText">Quote: </h5> <input className="inputQuote" placeholder="Quote" onChange={this.handleQuoteChange} />
                            <h5 className="characterText">Character: </h5> <input className="inpueCharacter" placeholder="Character" onChange={this.handleCharacterChange} />
                            <h5 className="movieText">Movie: </h5> <input className="inputMovie" placeholder="Movie" onChange={this.handleMovieChange} />
                        </div>
                        <button className="submitQuote" onClick={this.handleClick}>Submit Quote</button>
                    </form>
                    <h3 className="textBetween">What it will look like =></h3>
                    <div className="quoteCard">
                        <img src={this.state.quote.img} alt="character_image" className="characterImage"/>
                        <h2 className="quote">"{this.state.quote.Quote}"</h2>
                        <h3 className="character">-{this.state.quote.Character}</h3>
                        <h4 className="movie">({this.state.quote.Movie})</h4>
                    </div>
                </div>

            </div>
        )
    }
}

export default AddQuote;