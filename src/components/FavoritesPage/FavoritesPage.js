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

    getFavorites = (id) => {
        // componentDidMount() {
            axios.get(`/api/favorites/${id}`)
            .then(response => {
                console.log(response.data);
                this.setState({ favoriteQuotes: response.data })
            })
            .catch(error => {
                console.log(error);
            })
        // }
    }

    render() {
        return(
            <div className="favoritesPage">
                <h1 className="favoritesTitle">Your Favorite Quotes</h1>
                <div className="favoriteQuoteCards">
                    <img src={this.state.favoriteQuotes.img} alt="character_img" className="characterImage"/>
                    <h2 className="quote">"{this.state.favoriteQuotes.Quote}"</h2>
                    <h3 className="character">-{this.state.favoriteQuotes.Character}</h3>
                    <h4 className="movie">({this.state.favoriteQuotes.Movie})</h4>
                </div>
            </div>
        )
    }
}

export default FavoritesPage;