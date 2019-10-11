import React, {Component} from "react";
import "./QuotePage.css";

//components
import QuoteGenerator from "./QuoteGenerator/QuoteGenerator";
import axios from "axios";
import LikeButton from "./LikeButton/LikeButton";

class QuotePage extends Component {
    constructor() {
        super();
        this.state = {
            quote: []
        }
    }

    componentDidMount() {
        axios.get("/api/quote")
        .then(response => {
            console.log(response);
            // console.log(response.data);
            this.setState({quote: response.data});
            
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        // console.log(this.state.quote)
        return(
            <div className="quotePage">
                <nav className="quoteNav">
                    <QuoteGenerator currentPage={this.props.currentPage}
                                    changeView={this.props.changeView} />  
                </nav>
                <div className="quoteCard">
                    <img src={this.state.quote.img} alt="character_image" className="characterImage"/>
                    <h2 className="quote">"{this.state.quote.Quote}"</h2>
                    <h3 className="character">-{this.state.quote.Character}</h3>
                    <h4 className="movie">({this.state.quote.Movie})</h4>
                </div>
                <footer>
                    <LikeButton img={this.props.img}
                                quote={this.props.quote}
                                character={this.props.character}
                                movie={this.props.movie}
                                favoriteQuotes={this.props.favoriteQuotes}/>
                </footer>
            </div>
        )
    }
}

export default QuotePage;