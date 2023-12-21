import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        dataInput: "",
    };

    input = (e) => {
        this.setState({dataInput: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.plusInputValue(this.state.dataInput)
    }

  render() {
    return (
        <header className="searchbar">
        <form className="form" onSubmit={this.onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
      
          <input onChange={this.input}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
  }
}
