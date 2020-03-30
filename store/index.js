const Cookie = process.client ? require('js-cookie') : undefined

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
  setToken (context) {
    const payload = Cookie.get('auth._token.google')
    context.commit('clearToken')
    context.commit('setToken', payload)
  }
}
