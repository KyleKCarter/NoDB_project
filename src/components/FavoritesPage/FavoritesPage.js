import React, {Component} from "react";
import "./FavoritesPage.css";
import axios from "axios";


class FavoritesPage extends Component {
    constructor() {
        super();
        this.state = {
            favoriteQuotes: []
        }
    }

    componentDidMount() {
        console.log(this.props.favoriteQuotes)
        axios.get(`/api/favorites/`)
        .then(response => {
            console.log(response.data);
            this.setState({ favoriteQuotes: response.data })
        })
        .catch(error => {
            console.log(error);
        })
    }
        
    render() {
        console.log(this.state.favoriteQuotes);
        let mappedFavoriteQuotes = this.state.favoriteQuotes.map( val => {
            console.log(val);
            return(
                <div className="favoriteQuoteCards">
                    <img src={val.img} alt="character_img" className="characterImage"/>
                    <h2 className="quote">"{val.Quote}"</h2>
                    <h3 className="character">-{val.Character}</h3>
                    <h4 className="movie">({val.Movie})</h4> 
                    <img className="dislikeButton" src="https://www.pngfind.com/pngs/m/56-564486_official-facebook-like-button-png-dislike-png-transparent.png" alt="dislike"/>
                </div>
            )
        })
        return(
            <div className="favoritesPage">
                <h1 className="favoritesTitle">Your Favorite Quotes</h1>
                <div className="favoriteContent">
                    {mappedFavoriteQuotes}
                </div>
            </div>
        )
    }
}

export default FavoritesPage;