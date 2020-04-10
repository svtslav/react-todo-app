import React, { Component } from 'react';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';
import TodoList from '../TodoList';
import ItemAddForm from '../ItemAddForm';

export default class App extends Component {

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee', 1),
      this.createTodoItem('Make Awesome App', 2),
      this.createTodoItem('Have a lunch', 3),
      this.createTodoItem('Go to sleep', 4),
    ],
    searchText: '',
    filter: 'all',
  };

  createTodoItem(label, id) {
    return {
      label: label,
      important: false,
      done: false,
      id: id
    }
  } 

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      // ищем индекс в масссиве
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [
        ...todoData.slice(0, idx), 
        ...todoData.slice(idx + 1)
      ];
      return {
        todoData: newArray
      }
    });
  }

  addItem = (label) => {
    this.setState(({ todoData }) => {
      const maxId = todoData.map((item) => {
        return item.id;
      }).reduce((max, current) => {
        return Math.max(current, max);
      }, 0);

      const newArray = [
        ...todoData, 
        this.createTodoItem(label, maxId + 1)
      ];

      return {
        todoData: newArray
      }
    });
  }

  togglePropery(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    return [
      ...arr.slice(0, idx), 
      {
        ...arr[idx],
        [propName]: !arr[idx][propName]
      },
      ...arr.slice(idx + 1)
    ];
  }

  toggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.togglePropery(todoData, id, 'done')
      }
    });
  }

  toggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.togglePropery(todoData, id, 'important')
      }
    });
  }

  search = (items, searchText) => {
    if (searchText === '') {
      return items;
    }
    return items.filter((item) => {
      return item.label
        .toLowerCase()
        .indexOf(searchText.toLowerCase()) >= 0;
    });
  }

  searchItem = (searchText) => {
    this.setState({ searchText });
  }

  filter = (items, filter = 'all') => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => {
          return !item.done;
        });
      case 'done':
        return items.filter((item) => {
          return item.done;
        });
      default:
        return items;
    }
  }

  onFilter = (filter) => {
    this.setState({
      filter: filter
    });
  }

  render() {
    const { todoData, searchText, filter } = this.state;
    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;

    const filteredItems = this.filter(
      this.search(todoData, searchText), 
      filter);

    return (
      <div>
        <AppHeader 
          toDo={todoCount} 
          done={doneCount} />
        <SearchPanel 
          onSearch={ this.searchItem } />
        <ItemStatusFilter 
          filter={ filter }
          onFilter={ this.onFilter } />
        <TodoList 
          todos={filteredItems} 
          onItemDeleted={ this.deleteItem } 
          onToggleDone={ this.toggleDone }
          onToggleImportant={ this.toggleImportant }/>
        <ItemAddForm onItemAdded={ this.addItem } />
      </div>
    );
  }
}
