export const namespaced = true

export const state = () => ({
  todos: []
})

export const mutations = {
  SET_TODOS (state, todoList) {
    state.todos = todoList
  },
  DELETE_TODO (state, index) {
    state.todos.splice(index, 1)
  }
}

export const actions = {
  async getTodos ({ commit }) {
    try {
      const todos = await this.$axios.$get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      commit('SET_TODOS', todos)
    } catch (error) {
      console.error(error)
    }
  },
  async getTodoById ({ commit, state }, id) {
    try {
      const todo = await this.$axios.$get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      commit('SET_TODOS', [...[todo]])
    } catch (error) {
      console.error(error)
    }
  },
  async deleteTodoById ({ state, commit }, index) {
    try {
      await this.$axios.$delete(
        `https://jsonplaceholder.typicode.com/posts/${state.todos[index].id}`
      )
      await commit('DELETE_TODO', index)
    } catch (error) {
      console.error(error)
    }
  }
}

export const getters = {
  todos: state => state.todos,
  todoById: state => id => state.todos.filter(todo => todo.id === id)[0]
}
