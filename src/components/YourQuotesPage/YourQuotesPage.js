import React, {Component} from "react";
import axios from "axios";

class YourQuotesPage extends Component {
    constructor() {
        super();
        this.state = {
            yourQuotes: []
        }
    }

    componentDidMount() {
        axios.get("/api/addQuote")
        .then(response => {
            this.setState({ yourQuotes: response.data });
        })
        .catch(error => {
            console.log(error);
        })
    }



    render() {
        let mappedYourQuotes = this.state.yourQuotes.map(val => {
            return(
                <div className="yourQuoteCard">
                    <img src={val.img} alt="character_img" className="characterImage"/>
                    <h2 className="quote">"{val.Quote}"</h2>
                    <h3 className="character">-{val.Character}</h3>
                    <h4 className="movie">({val.Movie})</h4>
                </div>
            )
        })
        return(
            <div>
                <h1 className="yourQuotesTitle">Your Quotes</h1>
                <div className="yourQuotesContent">
                    {mappedYourQuotes}
                </div>
            </div>
        )
    }
}

export default YourQuotesPage;