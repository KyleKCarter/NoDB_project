import React, {Component} from "react";
import "./LikeButton.css"
import axios from "axios";

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "",
            quote: "",
            character: "",
            movie: "",
            favoriteQuotes: []
        }
    }

    addToFavorites = (e, id) => {
        const {img, quote, character, movie} = this.state;
        e.preventDefault();
        axios.post(`/api/favorites/${id}`, {
            img,
            quote,
            character,
            movie,
            id
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
        id++
    }
    
    render() {
        return(
            <div>
                <img onClick={this.addToFavorites} className="likeButton" src="https://www.pngkey.com/png/full/161-1614667_youtube-thumbs-up-png-thumbs-up-button-png.png" alt="like_button"/>
            </div>
        )
    }
}

export default LikeButton;