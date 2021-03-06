import React, {Component} from "react";
import "./index.css";
import "./App.css";

//components
import HomePage from "./components/HomePage/HomePage";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";
import QuotePage from "./components/QuotePage/QuotePage";
import HomeFooter from "./components/HomePage/HomeFooter/HomeFooter";
import YourQuotesPage from "./components/YourQuotesPage/YourQuotesPage";
import AddQuote from "./components/AddQuote/AddQuote";

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

  changeViewAdd = () => {
    this.setState({ currentPage: 'Add'});
  }

  changeStateFavorite = (val) => {
    this.setState({ favoriteQuotes: val})
    // console.log(this.state.favoriteQuotes);
  }

  render() {
    // console.log(this.state.currentPage);
    const { currentPage } = this.state;
    const { changeView } = this;
    const { changeViewAdd } = this;
    const { img, quote, character, movie } = this.state;
    const { favoriteQuotes } = this.state;
    const { changeStateFavorite } = this;
    return(
      <div className="movieQuotes">
        <nav className="navBar">
          <h3 className="homeButton" onClick={() => this.setState({currentPage: 'Home'})}>Home</h3>
          <h3 className="addQuoteButton" onClick={() => this.setState({currentPage: 'Add'})}>Add Quote</h3>
          <h1 className="title">RANDOM MOVIE QUOTES</h1>
          <h3 className="yourQuotesButton" onClick={() => this.setState({currentPage: 'Your Quotes'})}>Your Quotes</h3>
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
            <FavoritesPage  favoriteQuotes={favoriteQuotes}
                            changeStateFavorite={changeStateFavorite}
                            img={img}
                            quote={quote}
                            character={character}
                            movie={movie}/>
          :
            this.state.currentPage === 'Quote'
          ?
            <QuotePage currentPage={currentPage} 
                       changeView={changeView}
                       changeViewAdd={changeViewAdd} 
                       img={img}
                       quote={quote}
                       character={character}
                       movie={movie}
                       favoriteQuotes={favoriteQuotes}
                       changeStateFavorite={changeStateFavorite}/>
          :
            this.state.currentPage === 'Your Quotes'
          ?
            <YourQuotesPage currentPage={currentPage}
                            changeView={changeView}
                            changeViewAdd={changeViewAdd}/>
          :
            this.state.currentPage === 'Add'
          ?
            <AddQuote currentPage={currentPage}
                      changeView={changeView}
                      changeViewAdd={changeViewAdd} 
                      img={img}
                      quote={quote}
                      character={character}
                      movie={movie}
                      favoriteQuotes={favoriteQuotes}
                      changeStateFavorite={changeStateFavorite}/>
          :
            null
        }
        <footer>
        <HomeFooter />
        </footer>
      </div>
    )
  }
}

export default App;