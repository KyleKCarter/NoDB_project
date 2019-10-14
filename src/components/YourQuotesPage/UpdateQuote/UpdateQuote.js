import React, {Component} from "react";
import "./UpdateQuote.css";

class UpdateQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            Img: this.props.Img,
            Quote: this.props.Quote,
            Character: this.props.Character,
            Movie: this.props.Movie
        }
        
        this.handleChange=this.handleChange.bind(this);
        this.update=this.update.bind(this);
    }

    handleChange(e) {
        this.setState({ Quote: e.target.value });
        console.log(e.target.value);
    }

    update(e) {
        const { Img, Quote, Character, Movie } = this.state;
        const { id, update } = this.props;
        if( e.key === "Enter" && Quote.length !== 0 ) {
            update( id, Quote );
            this.setState({ editing: false });
        }
    }
    
    render() {
        const { id, Quote } = this.props;
        const { editing } = this.state;
        // console.log( id, Quote );
        return(
            <div>
                <span>

                    {
                            editing
                        ?
                            <input className="quoteInput" value={ this.state.Quote} onChange={ this.handleChange} onKeyPress={this.update} />
                        :
                            <span className="quoteText">{Quote}</span>
                    }
                </span>
                <span className="update" onClick={ () => this.setState({ editing: !editing, Quote }) }>update</span>
            </div>
        )
    }
    }

export default UpdateQuote;