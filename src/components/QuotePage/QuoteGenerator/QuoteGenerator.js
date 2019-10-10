import React, {Component} from "react";
import "./QuoteGenerator.css";

//components

class QuoteGenerator extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // this.setState({ img: "",
    //     quote: "",
    //     character: "",
    //     movie: "",
    // })

    render() {
        console.log(this.props.currentPage);
        return(
            <div>
                <button className="newQuote">New Quote</button>
            </div>
        )
    }
}

export default QuoteGenerator;