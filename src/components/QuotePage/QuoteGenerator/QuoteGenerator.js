import React, {Component} from "react";
import "./QuoteGenerator.css";
import axios from "axios";

//components

class QuoteGenerator extends Component{
    constructor() {
        super();
        this.state = {
            img: "",
            quote: "",
            character: "",
            movie: ""
        }
    }

    handleClick = (e) => {
        console.log("Working")
        const {img, quote, character, movie} = this.state;
        e.preventDefault();
        axios.post("api/quote/", {
            img,
            quote,
            character,
            movie
        }).then(response => {
            console.log(response.data);
            this.props.changeView();
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        // console.log(this.props.currentPage);
        return(
            <div>
                <button className="newQuote" onClick={this.handleClick} >New Quote</button>
            </div>
        )
    }
}

export default QuoteGenerator;