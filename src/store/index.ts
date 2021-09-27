import { createStore } from 'vuex';
import TodoModel from '../models/todoModel';
import coreApi from '../core/core';

const {
  fetchTodos, deleteTodo, updateTodo, addTodo, FilterTodos,
} = coreApi;

export interface State { todosState: TodoModel[] }

const state: State = {
  todosState: [],
};

export const store = createStore({
  state,
  mutations: {
    setTodos(Setstate, todos) {
      Setstate.todosState = todos;
      // Setstate.todosState = todos.slice(0, 10);
      return Setstate.todosState;
    },
    addTodo: (addstate, newTodo) => addstate.todosState.unshift(newTodo),
    removeTodo(Delstate, id) {
      let i: number;
      const curr = Delstate.todosState.map((e) => e.id).indexOf(id);
      for (i = 0; i < Delstate.todosState.length; i += 1) {
        if (i === curr) {
          Delstate.todosState.splice(i, 1);
        }
      }
    },
    updateTodo(Upstate, updatedTodo) {
      const index = Upstate.todosState.findIndex((todo) => todo.id === updatedTodo.id);
      if (index !== -1) {
        Upstate.todosState.splice(index, 1, updatedTodo);
      }
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      const promiseFetch = fetchTodos();
      promiseFetch.then((response) => {
        commit('setTodos', response.data);
      }).catch((error) => {
        console.log('error in fetch', error);
      });
    },
    async addTodo({ commit }, addtitle) {
      let newId = this.getters.todoslenght + 1;
      const defaultObject = {
        useId: 1,
        id: newId,
        title: addtitle,
        completed: false,
      };
      const promiseAdd = addTodo(defaultObject);
      promiseAdd.then(() => {
        commit('addTodo', defaultObject);
        newId += 1;
      }).catch((error) => {
        console.log(error);
      });
    },
    async deleteTodo({ commit }, id) {
      await deleteTodo(id);
      commit('removeTodo', id);
    },
    async updateTodo({ commit }, updatedTodo) {
      const promiseUpdate = updateTodo(updatedTodo);
      promiseUpdate.then((response) => {
        commit('updateTodo', response.data);
      }).catch((error) => {
        console.log('error in fetch', error);
      });
    },
    async filterTodos({ commit }, event) {
      const promiseFilter = FilterTodos(event);
      promiseFilter.then((response) => {
        commit('setTodos', response.data);
      }).catch((error) => {
        console.log('error in filtering', error);
      });
    },
  },
  getters: {
    allTodos: (allState) => allState.todosState,
    CompletedTodos(CompletedState) {
      return CompletedState.todosState.filter((todo) => todo.completed === true);
    },
    apendTodos(apendState) {
      return apendState.todosState.filter((todo) => todo.completed === false);
    },
    todoslenght(stateLen) {
      return stateLen.todosState.length;
    },
  },
  modules: {},
});
