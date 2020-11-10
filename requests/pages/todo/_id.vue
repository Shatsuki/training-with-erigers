<template>
<div>
  <h1 class="red">Hello!</h1>
  <a href="/">go back</a>
  <pre>{{ todos[$route.params.id-1] }}</pre>
</div>
</template>

<script>
export default {
  data () {
    return {
      todos: []
    }
  },
  created () {
    this.getTodo()
  },
  methods: {
    async getTodo () {
      const data = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos')
      this.todos = data
    }
  }
}
</script>

<style>
  .red {
    color: red;
  }

</style>
