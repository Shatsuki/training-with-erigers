<template>
  <div class="container todo-list">
    <pre>
      <ul>
        <li
          v-for="(todo, index) in todos"
          :key="`todo-${index}`"
          class="list-item"
        >
          <pre>
            {{ todo.title }}
          </pre>
          <button><router-link :to="{ path: `todo/${todo.id}` }">edit</router-link></button>
        </li>
      </ul>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  async asyncData ({ $axios }) {
    const todos = await $axios.$get(
      'https://jsonplaceholder.typicode.com/todos'
    )
    return { todos }
  },
  methods: {
    goToEdit (id) {
      document.location.href = `/edit${id}`
    }
  }
}
</script>

<style>
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
  color: blue;
}
</style>
