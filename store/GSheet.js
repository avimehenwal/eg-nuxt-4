// const { google } = require('googleapis')
import Cookie from 'js-cookie'

export const state = () => ({
  counter: 0,
  endpoint: 'https://sheets.googleapis.com/v4/spreadsheets',
  sheetId: '/1KuuDpw2ssi4EC-hlkOTWQTFuIhVGtlN8EhqsdI4y2S0',
  sheetName: '/values/INDEX!A1:G5',
  data: null
})

export const mutations = {
  // setSheetID
  // setSheetName
  // setRange
  setData (state, payload) {
    state.data = payload
  }
}

export const actions = {
  fetch (context) {
    // console.log(context.rootState.counter)
    // console.log(Cookie.get('auth._token.google'))
    // console.log(context.rootState.access_token)
    // console.log(context.getters.url)
    this.$axios.setToken(Cookie.get('auth._token.google'))
    this.$axios.get(context.getters.url)
      .then(response => (context.commit('setData', response.data.values)))
    // console.log(context.getters.data)
    // const drive = 'https://www.googleapis.com/drive/v3/about?fields=*'
    // const driveParams = {
    //   fields: '*'
    // }
    // const drive = 'https://www.googleapis.com/drive/v3/about'
    // this.$axios.setToken(this.token)
    // this.$axios.get(drive, { params: driveParams })
    //   .then(response => (this.driveData = response.data))
  }
}

export const getters = {
  url: (state) => {
    return state.endpoint + state.sheetId + state.sheetName
  },
  data: (state) => {
    return state.data
  },
  access_token: (state, getters, rootState) => {
    return rootState.access_token
  }
}
