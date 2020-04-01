import Cookie from 'js-cookie'

export const state = () => ({
  counter: 0,
  endpoint: 'https://www.googleapis.com/drive/v3/about',
  params: {
    fields: '*'
  },
  data: null,
  error: null
})

export const mutations = {
  // setSheetID
  // setSheetName
  // setRange
  setData (state, payload) {
    state.data = payload
  },
  setError (state, payload) {
    state.error = payload
  }
}

export const actions = {
  fetch (context) {
    // console.log(context.rootState.counter)
    // console.log(Cookie.get('auth._token.google'))
    // console.log(context.rootState.access_token)
    // console.log(context.getters.url)
    this.$axios.setToken(Cookie.get('auth._token.google'))
    this.$axios.setToken(context.state.endpoint)
    this.$axios.get(context.state.endpoint, context.getters.querystring)
      .then((response) => {
        console.log(response.data)
        // context.commit('setData', response.data)
      })
      .catch((error) => {
        console.log(error)
        context.commit('setError', error)
      })
  }
}

export const getters = {
  url: (state) => {
    return state.endpoint
  },
  querystring: (state) => {
    return { params: state.params }
  },
  access_token: (state, getters, rootState) => {
    return rootState.access_token
  }
}
