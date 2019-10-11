import React, {Component} from "react";
import "./index.css";
import "./App.css";

//components
import HomePage from "./components/HomePage/HomePage";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";
import QuotePage from "./components/QuotePage/QuotePage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'Home',
      img: "",
      quote: "",
      character: "",
      movie: "",
      favoriteQuotes: []
    }
  }

  changeView = () => {
    this.setState({ currentPage: 'Quote' });
    // console.log(this.state.currentPage);
  }

  render() {
    // console.log(this.state.currentPage);
    const { currentPage } = this.state;
    const { changeView } = this;
    const { img, quote, character, movie } = this.state;
    const {favoriteQuotes} = this.state;
    return(
      <div className="movieQuotes">
        <nav className="navBar">
          <h3 className="homeButton" onClick={() => this.setState({currentPage: 'Home'})}>Home</h3>
          <h1 className="title">RANDOM MOVIE QUOTES</h1>
          <h3 className="favoritesButton" onClick={() => this.setState({currentPage: 'Favorite Quotes'})}>Favorites</h3>
        </nav>
        {
            this.state.currentPage === 'Home'
          ?
            <HomePage currentPage={currentPage}
                      changeView={changeView}/>
          :
            this.state.currentPage === 'Favorite Quotes'
          ?
            <FavoritesPage favoriteQuotes={favoriteQuotes}/>
          :
            this.state.currentPage === 'Quote'
          ?
            <QuotePage currentPage={currentPage} 
                      changeView={changeView} 
                      img={img}
                      quote={quote}
                      character={character}
                      movie={movie}
                      favoriteQuotes={favoriteQuotes}/>
          :
            null
        }
      </div>
    )
  }
}

export default App;