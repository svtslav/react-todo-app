import React from 'react';
//import styled from 'styled-components';
import TodoListItem from '../TodoListItem';
import './TodoList.scss';

/*const Li = styled.li`
  font-weight: bold;
`;*/

const TodoList = ({ todos, onItemDeleted, onToggleDone, onToggleImportant }) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    // ...item spread оператор, разложил объект по ключам и значениям
    return (
      <li key={id} className="todo-list__item">
        <TodoListItem 
          { ...itemProps } 
          onItemDeleted={() => onItemDeleted(id) }
          onToggleDone={() => onToggleDone(id) }
          onToggleImportant={() => onToggleImportant(id)} />
      </li>
    );
  });
  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
}

export default TodoList;