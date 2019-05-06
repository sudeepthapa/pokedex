import React, { Component } from "react";

export default class Searchbar extends Component {
  onChageHandler = e => {
    this.props.onSearchChange(e.target.value);
  };
  render() {
    return (
      <div>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={this.onChageHandler}
          />
        </form>
      </div>
    );
  }
}
