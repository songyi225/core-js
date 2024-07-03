import { TodoList } from './components/ToDoList/ToDoList.js';
import { TodoItem } from './components/ToDoItem/ToDoItem.js';

const app = document.getElementById('app');

const defineElements = () => {
  customElements.define('todo-app', TodoList);
  customElements.define('todo-item', TodoItem);
};

defineElements();

const todoElement = document.createElement('todo-app');

app.append(todoElement);
