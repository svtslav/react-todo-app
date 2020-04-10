import React, { Component } from 'react';
import './ItemStatusFilter.scss';

export default class ItemStatusFilter extends Component {

  buttons = [
    { filterName: 'all', label: 'All' },
    { filterName: 'active', label: 'Active' },
    { filterName: 'done', label: 'Done' },
  ];

  render() {
    const { filter, onFilter } = this.props;
    const buttons = this.buttons.map(({ filterName, label }) => {
      const isButtonActive = filterName === filter;
      const className = isButtonActive ? 
        'item-status-filter__filter item-status-filter__filter_active' 
        : 'item-status-filter__filter';
      return (
        <span className={ className } 
              key={ filterName }
              type="button"
              onClick={() => onFilter(filterName)}>
              { label }
        </span>);
    });

    return (
      <div className="item-status-filter">
        { buttons }
      </div>
    );
  }
}
