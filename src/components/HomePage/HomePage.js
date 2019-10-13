import React, {Component} from "react";
import "./HomePage.css";
import axios from "axios";

class HomePage extends Component {
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
        const {img, quote, character, movie} = this.state;
        e.preventDefault();
        axios.post("api/quote/", {
            img,
            quote,
            character,
            movie
        }).then(response => {
            this.props.changeView();
            // console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }



    render() {
        return(
           <div className="home">
               <div className="homeContent">
                    <div className="quoteGenerator">
                        <h1 className="text">Quote Generator</h1>
                        <p className="description">This here is a state of the art random movie quote generator. 
                        By clicking the button bellow, you will be able to generate a classic quote from your favorite characters
                        from your favorite films. Enjoy!</p>
                        <button className="generateButton" onClick={this.handleClick}>Generate Quote</button> 
                    </div>
                </div>
           </div>
        )
    }
}

export default HomePage;