import React, {Component} from "react";
import "./QuotePage.css";

//components
import axios from "axios";
import LikeButton from "./LikeButton/LikeButton";
// import AddQuote from "./AddQuote/AddQuote";

class QuotePage extends Component {
    constructor() {
        super();
        this.state = {
            quote: []
        }

        this.getNewQuote = this.getNewQuote.bind(this);
    }

    componentDidMount() {
        console.log("First Quote");
        axios.get("/api/quote/")
        .then(response => {
            this.setState({quote: response.data});
        })
        .catch(error => {
            console.log(error);
        })
    }


    //function to get new quote from server//
        
    getNewQuote() {
        console.log("New Quote");
        axios.get("/api/new_quote/")
        .then(response => {
            this.setState({quote: response.data});
            //setState is not working...it cannot read property 'setState' of undefined//
            //forgot to bind, error was coming up because the quote was set to null and the component could not find the function 
            //because it was not binded. Need to either bind the function under the this.state or turn the function into an arrow function.
        })
        .catch(error => {
        console.log(error);
        })
    }

    render() {
        console.log(this.state.quote);
        const {quote} = this.state;
        const {getNewQuote} = this;
        return(
            <div className="quotePage">
                <nav className="quoteNav">
                    <button className="addQuote" onClick={this.props.changeViewAdd}>Add Quote</button>
                    <button className="newQuote" onClick={getNewQuote}>New Quote</button>  
                </nav>
                <div className="quoteCard">
                    <img src={this.state.quote.img} alt="character_image" className="characterImage"/>
                    <h2 className="quote">"{this.state.quote.Quote}"</h2>
                    <h3 className="character">-{this.state.quote.Character}</h3>
                    <h4 className="movie">({this.state.quote.Movie})</h4>
                </div>
                <footer>
                    <LikeButton img={this.props.img}
                                quote={quote}
                                character={this.props.character}
                                movie={this.props.movie}
                                favoriteQuotes={this.props.favoriteQuotes}
                                id={this.state.quote.id}
                                changeStateFavorite={this.props.changeStateFavorite}
                                />
                </footer>
            </div>
        )
    }
}

export default QuotePage;