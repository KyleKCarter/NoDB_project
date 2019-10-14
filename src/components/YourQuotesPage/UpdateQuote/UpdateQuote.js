import React, {Component} from "react";
import "./UpdateQuote.css";

class UpdateQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editingImg: false,
            editingQuote: false,
            editingCharacter: false,
            editingMovie: false,
            Img: this.props.Img,
            Quote: this.props.Quote,
            Character: this.props.Character,
            Movie: this.props.Movie
        }
        
        this.update=this.update.bind(this);
    }

    handleChangeImg = (e) => {
        this.setState({ Img: e.target.value });
        console.log(e.target.value);
    }
    handleChangeQuote = (e) => {
        this.setState({ Quote: e.target.value });
        console.log(e.target.value);
    }
    handleChangeCharacter = (e) => {
        this.setState({ Character: e.target.value });
        console.log(e.target.value);
    }
    handleChangeMovie = (e) => {
        this.setState({ Movie: e.target.value });
        console.log(e.target.value);
    }

    update(e) {
        const { Img, Quote, Character, Movie } = this.state;
        const { id, update } = this.props;
        if( e.key === "Enter" && this.props.yourQuotes.length !== 0 ) {
            update( id, Img, Quote, Character, Movie );
            this.setState({ editing: false });
        }
    }
    
    render() {
        const { id, Img, Quote, Character, Movie } = this.props;
        const { editingImg, editingQuote, editingCharacter, editingMovie } = this.state;
        // console.log( id, Quote );
        return(
            <div>
                <span>

                    {
                            editingImg
                        ?
                            <input className="quoteInput" value={ this.state.Img} onChange={ this.handleChangeImg} onKeyPress={this.update} />
                        :
                            <span className="quoteText">{Img}</span>
                    }
                </span>
                <span className="update" onClick={ () => this.setState({ editingImg: !editingImg, Img }) }>update img</span>
                <span>
                    {
                            editingQuote
                        ?
                            <input className="quoteInput" value={ this.state.Quote} onChange={ this.handleChangeQuote} onKeyPress={this.update} />
                        :
                            <span className="quoteText">{Quote}</span>
                    }
                </span>
                <span className="update" onClick={ () => this.setState({ editingQuote: !editingQuote, Quote }) }>update quote</span>
                <span>
                    {
                            editingCharacter
                        ?
                        <input className="quoteInput" value={ this.state.Character} onChange={ this.handleChangeCharacter} onKeyPress={this.update} />
                        :
                        <span className="quoteText">{Character}</span>
                    }
                </span>
                <span className="update" onClick={ () => this.setState({ editingCharacter: !editingCharacter, Character }) }>update character</span>
                <span>
                    {
                            editingMovie
                        ?
                        <input className="quoteInput" value={ this.state.Movie} onChange={ this.handleChangeMovie} onKeyPress={this.update} />
                        :
                        <span className="quoteText">{Movie}</span>
                    }
                </span>
                <span className="update" onClick={ () => this.setState({ editingMovie: !editingMovie, Movie }) }>update movie</span>
            </div>
        )
    }
    }

export default UpdateQuote;