const state = {
  todos: [
    {
      id: 1,
      title: "Doctors",
    },
    {
      id: 2,
      title: "Milk",
    },
  ],
};
const getters = {
  allTodos: (state) => state.todos,
};
const actions = {};
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
