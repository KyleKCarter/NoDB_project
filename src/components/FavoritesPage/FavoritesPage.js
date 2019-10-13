import React, {Component} from "react";
import "./FavoritesPage.css";
import axios from "axios";

//components
import RemoveFavorite from "./RemoveFavorite/RemoveFavorite";
import Copyright from "./Copyright/Copyright";


class FavoritesPage extends Component {
    constructor() {
        super();
        this.state = {
            favoriteQuotes: []
        }
    }

    componentDidMount() {
        axios.get(`/api/favorites/`)
        .then(response => {
            this.setState({ favoriteQuotes: response.data })
        })
        .catch(error => {
            console.log(error);
        })
    }

    updateFavoriteQuotes = newArr => {
        this.setState({favoriteQuotes: newArr})
    }
        
    render() {
        console.log(this.state.favoriteQuotes);
        let mappedFavoriteQuotes = this.state.favoriteQuotes.map( val => {
            return(
                <div className="favoriteQuoteCards">
                    <img src={val.img} alt="character_img" className="characterImage"/>
                    <h2 className="quote">"{val.Quote}"</h2>
                    <h3 className="character">-{val.Character}</h3>
                    <h4 className="movie">({val.Movie})</h4> 
                    <RemoveFavorite val={val} updateFavoriteQuotes={this.updateFavoriteQuotes}/>
                </div>
            )
        })
        return(
            <div className="favoritesPage">
                <h1 className="favoritesTitle">Your Favorite Quotes</h1>
                <div className="favoriteContent">
                    {mappedFavoriteQuotes}
                </div>
                <footer>
                    <Copyright />
                </footer>
            </div>
        )
    }
}

export default FavoritesPage;