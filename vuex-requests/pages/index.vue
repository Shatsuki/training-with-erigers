<template>
  <div id="container" class="login">
    <div v-show="showButtons" id="buttonsDiv">
      <button @click="activateSignUp">
        Sign up
      </button>
      <button @click="activateSignIn">
        Sign in
      </button>
    </div>
    <form v-show="showSignIn" id="signInForm" @submit="sendSignInData(user.email, user.password)">
      <input v-model="user.email" type="email" placeholder="email"><br>
      <input v-model="user.password" type="password" placeholder="password"><br>
      <input id="inpButton" type="submit" value="Sign in"><br>
    </form>
    <form v-show="showSignUp" id="signUpForm" @submit="setValues(user.username, user.password, user.cpassword, user.email)">
      <input v-model="user.username" type="text" placeholder="username">
      <input v-model="user.email" type="email" placeholder="email"><br>
      <input v-model="user.password" type="password" placeholder="password">
      <input v-model="user.cpassword" type="password" placeholder="confirm password"><br>
      <input id="inpButton" type="submit" value="Sign up">
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'TodoList',
  data () {
    return {
      showSignIn: false,
      showSignUp: false,
      showButtons: true
    }
  },
  computed: mapGetters('info', ['user']),
  methods: {
    activateSignUp () {
      this.showSignUp = !this.showSignUp
      this.showButtons = false
    },
    activateSignIn () {
      this.showSignIn = !this.showSignIn
      this.showButtons = false
    },
    ...mapActions('info', ['setUsername', 'setPassword', 'setEmail', 'sendSignUpData', 'sendSignInData']),
    setValues (username, password, cpassword, email) {
      if (password === cpassword) {
        this.setUsername(username)
        this.setPassword(password)
        this.setEmail(email)
        this.sendSignUpData()
      }
    }
  }
}
</script>

<style>
body {
  background-color: rgb(18, 22, 22);
}

#signUpForm {
  margin: 17% 40%;
}

#signInForm {
  margin: 20% 40%;
}

#buttonsDiv {
  margin: 20% 45%;
}

button:hover {
  color: white;
  background-color: black;
}

#inpButton:hover {
  color: white;
  background-color: black;
}
</style>
