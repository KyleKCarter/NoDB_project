import React, {Component} from "react";
import axios from "axios";
import "./DeleteQuote.css";

class DeleteQuote extends Component {
    
    deleteQuote = () => {
        axios.delete(`/api/addQuote/${this.props.id}`)
        .then(response => {
            console.log("Deleted");
            this.props.updateQuotes(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return(
            <div key={this.props.key}>
                <p className="deleteButton" onClick={this.deleteQuote}>X</p>
            </div>
        )
    }
}

export default DeleteQuote;