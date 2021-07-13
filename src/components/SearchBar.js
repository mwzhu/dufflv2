import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { label: "" };
  }

  handleChange = (event) => {
    this.setState({ label: event.target.value });
  };

  handleSearchClick = (event) => {
    event.preventDefault();

    // let the app manage the persistence & state
    this.props.search(this.state);
  };

  handleClearClick = (event) => {
      event.preventDefault();
      this.props.clear(this.state);
      this.setState({ label: ''});
  }

  render() {
    return (
      <div className="container">
        <div className="input-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search for items"
            aria-label="Label"
            aria-describedby="basic-addon2"
            value={this.state.label}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <button
              onClick={this.handleSearchClick}
              className="btn btn-primary"
              type="submit"
            >
              Search
            </button>
          </div>
          <div className="input-group-append">
            <button
                onClick={this.handleClearClick}
                className="btn btn-primary"
                type="submit"
            >
                Clear
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;