import React, {Component} from "react";
import "./FavoritesPage.css";


class FavoritesPage extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return(
            <div className="favoritesPage">
                <h1 className="favoritesTitle">Favorite Quotes</h1>
            </div>
        )
    }
}

export default FavoritesPage;