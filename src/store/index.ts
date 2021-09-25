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
      Setstate.todosState = todos.slice(0, 10);
      return Setstate.todosState;
    },
    addTodo: (addstate, newTodo) => addstate.todosState.unshift(newTodo),
    removeTodo(Delstate, id) {
      let i: number;
      const curr = Delstate.todosState.map((e) => e.id).indexOf(id);
      for (i = 0; i < Delstate.todosState.length; i += 1) {
        if (i === curr) {
          Delstate.todosState.splice(i, 1);
          console.log('in if', i, id);
        }
      }
      console.log(curr);
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
        // id: id++,
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
    CompletedTodos(CompletedState) {
      return CompletedState.todosState.filter((todo) => todo.completed === true);
    },
    pendTodos(pendState) {
      return pendState.todosState.filter((todo) => todo.completed === false);
    },
  },
  modules: {},
});
