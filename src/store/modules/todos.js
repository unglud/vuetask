import axios from "axios";

const state = {
  todos: [],
};
const getters = {
  allTodos: (state) => state.todos,
};
const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit(`setTodos`, response.data);
  },

  async addTodo({ commit }, todo) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title: todo.title, completed: todo.reminder }
    );

    commit(`newTodo`, response.data);
  },

  async deleteTodo({ commit }, id) {
    commit(`removeTodo`, id);

    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  },

  async filterTodos({ commit }, limit) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );

    commit(`setTodos`, response.data);
  },

  async updateTodo({ commit }, todo) {
    commit(`updTodo`, todo);

    await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      todo
    );
  },
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  updTodo: (state, updatedTodo) => {
    const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
