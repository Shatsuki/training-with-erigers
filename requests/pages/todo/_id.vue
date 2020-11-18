<template>
  <div id="modal">
    <button id="backButton">
      <a href="/">go back</a>
    </button>
    <p id="saveMessage">
      {{ saveMessage }}
    </p>
    <pre>
      <p>{{ todos[this.$route.params.id - 1] }}</p>
      <form method="post" @submit.prevent="sendPost">
        <input v-model="givenTitle" placeholder="Title" type="text">
        <input v-model="givenDescription" placeholder="Description" type="text">
        <button type="submit">Save Changes</button>
      </form>
    </pre>
  </div>
</template>

<script>
export default {
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
  },
  data () {
    return {
      todos: [],
      givenTitle: null,
      givenDescription: null,
      saveMessage: null
    }
  },
  methods: {
    async sendPost () {
      if (this.givenTitle && this.givenDescription) {
        try {
          await this.$axios.post('http://3553f6909ef7.ngrok.io/todos', {
            id: this.todos[this.$route.params.id],
            title: this.givenTitle
          })
          this.saveMessage = 'Changes Saved!'
        } catch (error) {
          this.saveMessage = 'Change failed!'
          console.error(error)
        }
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
#saveMessage {
  margin-top: 3%;
  text-align: center;
}

body {
  background-color: rgba(20, 20, 20, 1);
}

#modal {
  list-style-type: none;
  border-bottom: none;
  margin: 3% 10% 0 10%;
  padding-inline-start: 0;
  background-color: rgb(50, 0, 0);
  box-shadow: rgb(0, 0, 0) 10px 10px;
  font-size: 30px;
}

pre {
  height: 80vh;
}

p {
  color: white;
}

button {
  background-color: rgba(0, 0, 0, 0);
  color: white;
}

#backButton {
  margin-left: 46%;
}

a {
  color: white;
  background-color: rgba(0, 0, 0, 0);
  text-decoration: none;
}
</style>
