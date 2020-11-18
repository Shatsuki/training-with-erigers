<template>
  <div id="app">{{ todos }}</div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    todos () {
      return this.$store.state.todos
    }
  }
}
</script>

<style></style>
