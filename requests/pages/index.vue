<template>
  <div id="container" class="todo-list">
    <div id="div">
      <ul id="ul">
        <li
          v-for="(todo, index) in todos"
          :key="`todo-${index}`"
          class="list-item"
        >
          {{ todo.title }}
          <br>
          <router-link :to="{ path: `todo/${todo.id}` }">
            <button>
              edit
            </button>
          </router-link>
          <button @click="deleteTodo(todo.id)">
            delete
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  async asyncData ({ $axios }) {
    try {
      const todos = await $axios.$get(
        'http://aad73eb80051.ngrok.io/todos'
      )
      return { todos }
    } catch (error) {
      console.error(error)
      return { todos: [] }
    }
  },
  methods: {
    deleteTodo (index) {
      if (confirm('Are you sure you want to delete this todo?')) {
        this.$axios.delete('http://aad73eb80051.ngrok.io/todos', {
          id: index
        })
      }
    }
  }
}
</script>

<style>
body {
  background-color: rgb(18, 22, 22);
}

#input {
  margin-left: 5%;
  margin-bottom: 5%;
  height: 35px;
  outline: none;
}

#div {
  text-align: center;
  margin-top: 5%;
}

#ul {
  list-style-type: none;
  border: red solid 2px;
  border-bottom: none;
  margin: 0 30%;
  padding-inline-start: 0;
  background-color: rgb(50, 0, 0);
  box-shadow: rgb(0, 0, 0) 10px 10px;
  padding: 0;
}

.list-item {
  color: red;
  padding: 1em 0;
  border-bottom: red solid 2px;
  font-size: 35px;
  text-shadow: rgb(128, 0, 0) 2px 2px;
}

button {
  background-color: rgba(0, 0, 0, 0);
  color: white;
}
</style>
