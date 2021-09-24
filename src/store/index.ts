import { createStore } from 'vuex';
import axios from 'axios';
import TodoModel from '../models/todoModel';

export interface State { todosState: TodoModel[] }

const state: State = {
  todosState: [],
};

export const store = createStore({
  state,
  mutations: {
    setTodos(Setstate, todos) {
      // Setstate.todosState = todos;
      Setstate.todosState = todos.slice(todos.length - 4, todos.length);
      return Setstate.todosState;
    },
    addTodo: (addstate, newTodo) => addstate.todosState.unshift(newTodo),
    removeTodo(Delstate, id) {
      Delstate.todosState = Delstate.todosState.filter((todo) => todo.id !== id);
      return Delstate.todosState;
    },
    updateTodo(Upstate, updatedTodo) {
      // Find index of update one
      const index = Upstate.todosState.findIndex((todo) => todo.id === updatedTodo.id);

      if (index !== -1) {
        Upstate.todosState.splice(index, 1, updatedTodo);
      }
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      commit('setTodos', response.data);
    },
    async addTodo({ commit }, addtitle) {
      const defaultObject = {
        // id: newId,
        title: addtitle,
        completed: false,
      };
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', defaultObject);
      commit('addTodo', response.data);
    },
    async deleteTodo({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      commit('removeTodo', id);
    },
    async updateTodo({ commit }, updatedTodo) {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo);
      commit('updateTodo', response.data);
    },
  },
  getters: {
    allTodos: (allState) => allState.todosState,
  },
  modules: {},
});
