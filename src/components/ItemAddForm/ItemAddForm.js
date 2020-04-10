import React, { Component } from 'react';
import './ItemAddForm.scss';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.label !== '') {
      this.props.onItemAdded(this.state.label);
    }
    this.setState({
      label: ''
    })
  };

  render() {
    return (
      <form 
        className="item-add-form"
        onSubmit={this.onSubmit} >
        <input 
          className="item-add-form__input" 
          type="text" 
          placeholder="Add todo" 
          onChange={ this.onLabelChange }
          value={ this.state.label } />
        <input 
          className="item-add-form__submit" 
          type="submit" value="Add" />
      </form>
    );
  }
}