import axios from 'axios';
import TodoModel from '../models/todoModel';

const url = 'https://jsonplaceholder.typicode.com/todos';

export default {
  async fetchTodos() {
    return axios.get(url);
  },
  async deleteTodo(id:number) {
    axios.delete(`${url}/${id}`);
  },
  async updateTodo(todo:TodoModel) {
    return axios.patch(`${url}/${todo.id}`, todo);
  },
  async addTodo(defaultObject:TodoModel) {
    return axios.post(url, defaultObject);
  },
  async FilterTodos(event:any) {
    const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText, 0);
    return axios.get(`${url}?_limit=${limit}`);
  },
};
