import React, {Component} from "react";
import axios from "axios";
import "./YourQuoteCard.css";

//components
import DeleteQuote from "./DeleteQuote/DeleteQuote";
import UpdateQuote from "./UpdateQuote/UpdateQuote";

class YourQuoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yourQuotes: this.props.yourQuotes,
            Img: this.props.Img,
            Quote: this.props.Quote,
            Character: this.props.Character,
            Movie: this.props.Movie
        }
    }

    updateQuote = ( id, Img, Quote, Character, Movie) => {
        console.log("updateQuote", id, Quote);
        axios.put(`/api/addQuote/${id}`, { Img, Quote, Character, Movie })
        .then(response => {
            this.props.getAllQuotes();
            this.setState({ Img: response.data, Quote: response.data, Character: response.data, Movie: response.data});
            console.log(this.state.Quote);
        })
        .catch(error => {
            console.log(error);
        })
    }

    deleteYourQuotes = newArr => {
        this.setState({ yourQuotes: newArr })
    }
    
    render() {
        const {yourQuotes, Img, Quote, Character, Movie} = this.props;
        // let mappedYourQuotes = yourQuotes.map(val => {
            // console.log(val);
            // return(
            // )
        // })
        return(
            <div className="yourQuotesContent" key={this.props.key}>
                {/* {mappedYourQuotes} */}
                <div className="yourQuoteCard">
                    <DeleteQuote key={this.props.key} id={this.props.id} updateQuotes={this.props.updateQuotes} />
                    <img src={this.props.Img} alt="character_img" className="characterImage"/>
                    <h2 className="quote">"{this.props.Quote}"</h2>
                    <h3 className="character">-{this.props.Character}</h3>
                    <h4 className="movie">({this.props.Movie})</h4>
                    <UpdateQuote 
                                // val={val}
                                yourQuotes={this.props.yourQuotes}
                                id={ this.props.id }
                                key={ this.props.id }
                                Img={ this.props.Img }
                                Quote={ this.props.Quote }
                                Character={ this.props.Character }
                                Movie={ this.props.Movie }
                                update={ this.updateQuote }
                                />
                    {/* <div> */}
                        {/* {
                            this.state.yourQuotes.map( yourQuotes => (
                            ))
                        } */}
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default YourQuoteCard;