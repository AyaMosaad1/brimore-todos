import { createStore } from 'vuex';
import TodoModel from '../models/todoModel';

export interface State { todosState: TodoModel[] }

const state: State = {
  todosState: [
    { Name: 'Aya', IsCompleted: false },
    { Name: 'Aya', IsCompleted: true },
    { Name: 'Aya', IsCompleted: true },
    { Name: 'Aya', IsCompleted: false },
  ],
};

export const store = createStore({
  state,
  mutations: {
    AddTodo(oldState:State, payload:TodoModel) {
      // oldState.todosState.push(payload);
      oldState.todosState.push({ Name: 'AyaNew', IsCompleted: false });
      console.log(payload);
    },
  },
  actions: {
    AddTodo({ commit }) {
      commit('AddTodo');
    },
  },
  getters: {
    AllTodos(curState) {
      return curState.todosState;
    },
  },
  modules: {},
});
