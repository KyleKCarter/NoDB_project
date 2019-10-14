import React, {Component} from "react";
import axios from "axios";
import "./YourQuotesPage.css";

//components
import YourQuoteCard from "./YourQuoteCard/YourQuoteCard";

class YourQuotesPage extends Component {
    constructor() {
        super();
        this.state = {
            Img: "",
            Quote: "",
            Character: "",
            Movie: "",
            // editStatus: need to be a ternary
            yourQuotes: []
        }
    }

    componentDidMount = () => {
        this.getAllQuotes();
    }

    updateQuotes = (newQuotes) => {
        this.setState({ yourQuotes: newQuotes })
    }

    getAllQuotes = () => {
        axios.get("/api/addQuote")
        .then(response => {
            console.log(response.data);
            this.setState({ yourQuotes: response.data });
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const {yourQuotes, Img, Quote, Character, Movie} = this.state;
        const {getAllQuotes} = this;
        const {componentDidMount} = this;
        const {updateQuotes} = this;
        return(
            <div className="yourQuotesPage">
                <nav className="yourQuoteNavBar">
                    <button className="backToAddQuote" onClick={this.props.changeViewAdd}>Add Quote</button>
                </nav>
                <h1 className="yourQuotesTitle">Your Quotes</h1>
                {
                    yourQuotes.map((quote, i) => {
                        const {Character, Img, Movie, Quote, id} = quote;
                        return <YourQuoteCard  
                            quote={Quote}
                            yourQuotes={yourQuotes}
                            key={i}
                            id={id}
                            Img={Img}
                            Quote={Quote}
                            Character={Character}
                            Movie={Movie}
                            updateQuotes={updateQuotes}
                            getAllQuotes={getAllQuotes}
                            // componentDidMount={componentDidMount}
                        />

                    })
                }
            </div>
        )
    }
}

export default YourQuotesPage;