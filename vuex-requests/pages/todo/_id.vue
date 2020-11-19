<template>
  <div class="todo">
    <pre style="color: red;">{{ todo }}</pre>
  </div>
</template>
<script>
export default {
  name: 'Todo',
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  computed: {
    todo () {
      return this.$store.getters['todo/todoById'](parseInt(this.$route.params.id))
    }
  },
  fetch () {
    return this.$store.dispatch('todo/getTodoById', this.$route.params.id)
  }
}
</script>
