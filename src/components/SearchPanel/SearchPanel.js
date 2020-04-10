import React, { Component } from 'react';
import './SearchPanel.scss';

export default class SearchPanel extends Component {

  state = {
    searchText: ''
  }

  onChange = (e) => {
    const searchText = e.target.value;
    this.setState({
      searchText: searchText
    });
    this.props.onSearch(searchText);
  };
  
  render() {
    return (
      <div className="search-panel">
        <input 
          className="search-panel__input" 
          placeholder="Type to search" 
          onChange={ this.onChange } 
          value={ this.state.searchText } />
      </div>
    );
  }
}
