import React, {Component} from "react";
import "./UpdateQuote.css";

class UpdateQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            Quote: this.props.Quote
        }
        
        this.handleChange=this.handleChange.bind(this);
        this.update=this.update.bind(this);
    }

    handleChange(e) {
        this.setState({ Quote: e.target.value });
    }

    update(e) {
        const { Quote } = this.state;
        const { id, edit } = this.props;
        if( e.key === "Enter" && Quote.length !== 0 ) {
            edit( id, Quote );
            this.setState({ editing: false });
        }
    }
    
    render() {
        const { id, Quote } = this.props;
        const { editing } = this.state;
        console.log( id, Quote );
        return(
            <div>
                <span>

                    {
                            editing
                        ?
                            <input className="quoteInput" value={ this.state.Quote} onChange={ this.handleChange} onKeyPress={this.edit} />
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