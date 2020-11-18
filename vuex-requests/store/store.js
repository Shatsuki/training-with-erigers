import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  actions: {
    async asyncData ({ $axios }) {
      try {
        const todos = await $axios.$get(
          'http://3553f6909ef7.ngrok.io/todos'
        )
        return { todos }
      } catch (error) {
        console.error(error)
        return { todos: [] }
      }
    }
  }
})
