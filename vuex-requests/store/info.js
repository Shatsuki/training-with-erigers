export const namespaced = true
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ADD VALIDATION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export const state = () => ({
  user: [{
    email: '',
    password: '',
    cpassword: '',
    username: ''
  }]
})

export const mutations = {
  SET_USERNAME (state, username) {
    state.username = username
  },
  SET_PASSWORD (state, password) {
    state.password = password
  },
  SET_EMAIL (state, email) {
    state.email = email
  }
}

export const actions = {
  setUsername ({ commit }, username) {
    commit('SET_USERNAME', username)
  },
  setPassword ({ commit }, password) {
    commit('SET_PASSWORD', password)
  },
  setEmail ({ commit }, email) {
    commit('SET_EMAIL', email)
  },
  async sendSignUpData ({ state }) {
    try {
      await this.$axios.post('http://aa053b3e5a5f.ngrok.io/users/signup', {
        username: state.username,
        email: state.email,
        password: state.password
      })
    } catch (error) {
      alert(error)
    }
  },
  async sendSignInData (emailR, passwordR) {
    try {
      await this.$axios.post('http://aa053b3e5a5f.ngrok.io/users/login', {
        email: emailR,
        password: passwordR
      })
    } catch (error) {
      alert(`${error}haha`)
    }
  }
}

export const getters = {
  user: state => state.user
}
