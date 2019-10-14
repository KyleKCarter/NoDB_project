import React, {Component} from "react";
import axios from "axios";
import "./DeleteQuote.css";

class DeleteQuote extends Component {
    
    deleteQuote = () => {
        axios.delete(`/api/addQuote/${this.props.val.id}`)
        .then(response => {
            console.log("Deleted");
            this.props.deleteYourQuotes(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return(
            <div>
                <p className="deleteButton" onClick={this.deleteQuote}>X</p>
            </div>
        )
    }
}

export default DeleteQuote;