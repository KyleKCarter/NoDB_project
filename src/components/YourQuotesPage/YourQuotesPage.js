import React, {Component} from "react";
import axios from "axios";
import "./YourQuotesPage.css";

//components
import DeleteQuote from "./DeleteQuote/DeleteQuote";
import UpdateQuote from "./UpdateQuote/UpdateQuote";

class YourQuotesPage extends Component {
    constructor() {
        super();
        this.state = {
            Img: "",
            Quote: "",
            Character: "",
            Movie: "",
            yourQuotes: []
        }
    }

    componentDidMount() {
        axios.get("/api/addQuote")
        .then(response => {
            console.log(response.data);
            this.setState({ yourQuotes: response.data });
        })
        .catch(error => {
            console.log(error);
        })
    }

    updateQuote = ( id, Quote) => {
        console.log("updateQuote", id, Quote);
        axios.put(`/api/addQuote/${id}`, { Quote })
        .then(response => {
            console.log("Updated");
            this.setState({ Quote: response.data });
        })
        .catch(error => {
            console.log(error);
        })
    }

    updateYourQuotes = newArr => {
        this.setState({ yourQuotes: newArr })
    }

    render() {
        let mappedYourQuotes = this.state.yourQuotes.map(val => {
            return(
                <div className="yourQuoteCard">
                    <DeleteQuote val={val} updateYourQuotes={this.updateYourQuotes} />
                    <img src={val.Img} alt="character_img" className="characterImage"/>
                    <h2 className="quote">"{val.Quote}"</h2>
                    <h3 className="character">-{val.Character}</h3>
                    <h4 className="movie">({val.Movie})</h4>
                    <div>
                        {
                            this.state.yourQuotes.map( yourQuotes => (
                                <UpdateQuote val={val}
                                            id={ yourQuotes.id }
                                            key={ yourQuotes.id }
                                            Img={ yourQuotes.Img }
                                            Quote={ yourQuotes.Quote }
                                            Character={ yourQuotes.Character }
                                            Movie={ yourQuotes.Movie }
                                            update={ this.updateQuote }/>
                            ))
                        }
                    </div>
                    {/* <p className="update">update</p> */}
                </div>
            )
        })
        console.log(this.state.yourQuotes);
        return(
            <div className="yourQuotesPage">
                <h1 className="yourQuotesTitle">Your Quotes</h1>
                <div className="yourQuotesContent">
                    {mappedYourQuotes}
                </div>
            </div>
        )
    }
}

export default YourQuotesPage;