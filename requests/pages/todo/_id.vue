<template>
  <div>
    <a href="/">go back</a>
    <pre>
      <p>{{ todos[this.$route.params.id - 1] }}</p>
      <form method="post" @submit.prevent="sendPost">
        <input v-model="givenTitle" type="text">
        <input v-model="givenDescription" type="text">
        <button type="submit">Save Changes</button>
      </form>
      <p>{{ saveMessage }}</p>
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todos: [],
      givenTitle: null,
      givenDescription: null,
      saveMessage: null
    }
  },
  created () {
    this.getTodo()
  },
  methods: {
    async getTodo () {
      const data = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos')
      this.todos = data
    },
    sendPost () {
      if (this.givenTitle && this.givenDescription) {
        this.$axios.post('', { // linku duhet ketu
          id: this.todos[this.$route.params.id - 1],
          title: this.givenTitle,
          description: this.givenDescription
        }).then((response) => {
          this.saveMessage = 'Changes saved!'
        }, (error) => {
          this.saveMessage = 'Change failed!'
          console.log(error)
        })
        this.givenTitle = ''
        this.givenDescription = ''
      } else if (!this.givenTitle && this.givenDescription) {
        this.saveMessage = 'Missing title!'
      } else if (!this.givenDescription && this.givenTitle) {
        this.saveMessage = 'Missing description!'
      } else {
        this.saveMessage = 'Missing title and description!'
      }
    }
  }
}
</script>

<style>
body {
  color: red;
}
</style>
