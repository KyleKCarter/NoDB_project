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
            this.setState({quote: response.data});
            
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        console.log(this.state.quote)
        return(
            <div className="quotePage">
                <nav className="quoteNav">
                    <QuoteGenerator currentPage={this.props.currentPage}
                                    changeView={this.props.changeView} />  
                </nav>
                <div className="quoteCard">
                    <img src={this.state.quote.img} alt="character_image" className="characterImage"/>
                    <h2 className="quote">"{this.state.quote.Quote}"</h2>
                    <h3 className="character_movie">-{this.state.quote.Character} ({this.state.quote.Movie})</h3>
                </div>
            </div>
        )
    }
}

export default QuotePage;