import React from 'react';
import './AppHeader.scss';

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header">
      <h1 className="app-header__title">React Todo List</h1>
      <div>{toDo || 'no'} more to do, {done || 'nothing'} done</div>
    </div>
  );
}

export default AppHeader;