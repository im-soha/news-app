import React from "react";
import './searchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTopic: "" };
  }

  handleChange = event => {
    this.setState({ searchTopic: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchForTopic(this.state.searchTopic);
  };

  render() {
    return (
      <div id="search-bar" className="form-inline">
        <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Search for a topic"
              name="topic"
              className="form-control mr-sm-3"
              aria-label="Search"
              value={this.state.searchTopic}
              onChange={this.handleChange}
            />
            <input 
              type="submit" 
              value="Search"
              className="btn btn-primary my-2 my-sm-0" />
        </form>
      </div>
    );
  }
}

export default SearchBar;