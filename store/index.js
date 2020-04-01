// const Cookie = process.client ? require('js-cookie') : undefined
import Cookie from 'js-cookie'

export const state = () => ({
  counter: 0,
  access_token: null
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  setToken (state, payload) {
    state.access_token = payload
  },
  clearToken (state) {
    state.access_token = null
  }
}

export const actions = {
  clearToken (context) {
    context.commit('clearToken')
  },
  login (context) {
    // context.commit('clearToken')
    this.$auth.loginWith('google')
    context.commit('increment')
    context.dispatch('setToken')
  },
  logout (context) {
    context.commit('increment')
    context.commit('clearToken')
    this.$auth.logout('google')
  },
  setToken (context) {
    // console.log(Cookie.get('auth._token.google'))
    context.commit('setToken', Cookie.get('auth._token.google'))
  }
}
