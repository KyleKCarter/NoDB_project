import React, {Component} from "react";
import "./QuotePage.css";

//components
import QuoteGenerator from "./QuoteGenerator/QuoteGenerator";
import axios from "axios";

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
            console.log(response.data);
            this.setState({quote: response.data})
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        let mappedQuotes = this.state.quote.map(val => {
            return (
                <div className="quoteCard">
                    <img src={val.img} alt="character_image" className="characterImage"/>
                    <h2 className="quote">"{val.Quote}"</h2>
                    <h3 className="character_movie">-{val.Character} ({val.Movie})</h3>
                </div>
            )
        })
        return(
            <div className="quotePage">
                <nav className="quoteNav">
                    <QuoteGenerator />  
                </nav>
                <h1 className="quotePageTitle">Quote</h1>
                {mappedQuotes}

            </div>
        )
    }
}

export default QuotePage;