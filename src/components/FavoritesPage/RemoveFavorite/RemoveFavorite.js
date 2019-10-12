import React from "react";
import axios from "axios";

function RemoveFavorite() {
    
    unlikeQuote = () => {
        axios.delete(`/api/travel/${this.props.val.id}`)
        .then(response => {
            console.log(response.data);
            this.props.updateFavoriteQuotes(response.data);
        })
    }
    
    return (
        <div>
            <img onClick={this.unlikeQuote} className="dislikeButton" src="https://www.pngfind.com/pngs/m/56-564486_official-facebook-like-button-png-dislike-png-transparent.png" alt="dislike"/>
        </div>
    )
}

export default RemoveFavorite;