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
      const data = await this.$axios.$get('http://aad73eb80051.ngrok.io/todos')
      this.todos = data
    },
    sendPost () {
      if (this.givenTitle && this.givenDescription) {
        this.$axios.post('http://aad73eb80051.ngrok.io/todos', { // linku duhet ketu
          id: this.todos[this.$route.params.id],
          title: this.givenTitle
        }).then((response) => {
          this.saveMessage = 'Changes saved!'
        }, (error) => {
          this.saveMessage = 'Change failed!'
          console.error(error)
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
