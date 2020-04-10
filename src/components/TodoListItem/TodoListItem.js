import React, { Component } from 'react';
import './TodoListItem.scss';

export default class TodoListItem extends Component {

  // не принимает свойство props, они храняться в классе в this.props
  render() {
    const { label, important, done, onItemDeleted, onToggleDone, onToggleImportant } = this.props;

    let classNames = 'todo-list-item__label';
    
    if (done) {
      classNames += ' todo-list-item__label_done';
    }
    if (important) {
      classNames += ' todo-list-item__label_important';
    }

    return (
      <span className="todo-list-item">
        <span className={classNames}
          onClick={ onToggleDone }>
          {label}
        </span>
        <span className="todo-list-item__controls">
          <span className="todo-list-item__control todo-list-item__control_delete"
                // функция приходит из props
                onClick={ onItemDeleted } >
                <span>×</span>
          </span>
          <span className="todo-list-item__control todo-list-item__control_important" 
                onClick={ onToggleImportant } >
                <span>!</span>
          </span>
        </span>
      </span>
    );
  }
}
