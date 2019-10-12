import React, {Component} from "react";
import "./LikeButton.css"
import axios from "axios";

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteQuotes: []
        }
    }

    addToFavorites = (e, id) => {
        const {img, quote, character, movie} = this.state;
        e.preventDefault();
        // console.log(id);
        axios.post(`/api/favorites/${id}`, {
            img,
            quote,
            character,
            movie,
            id
        })
        .then(response => {
            console.log("Liked");
            console.log(response.data);
            //invoke changeState function
            this.props.changeStateFavorite(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    render() {
        return(
            <div>
                <img onClick={(e) => this.addToFavorites(e, this.props.id)} className="likeButton" src="https://www.pngkey.com/png/full/161-1614667_youtube-thumbs-up-png-thumbs-up-button-png.png" alt="like_button"/>
            </div>
        )
    }
}

export default LikeButton;