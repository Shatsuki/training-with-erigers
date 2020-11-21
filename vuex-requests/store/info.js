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
      await this.$axios.$post(`${process.env.BaseUrl}/users/signup`, {
        username: state.username,
        email: state.email,
        password: state.password
      })
    } catch (error) {}
  },
  async sendSignInData (emailR, passwordR) {
    try {
      await this.$axios.$post(`${process.env.BaseUrl}/users/signin`, { // env problem
        email: emailR,
        password: passwordR
      })
    } catch (error) {}
  }
}

export const getters = {
  user: state => state.user
}
