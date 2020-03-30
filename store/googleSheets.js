export const state = () => ({
  counter: 0,
  endpoint: 'https://sheets.googleapis.com/v4/spreadsheets',
  sheetId: '/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
  sheetName: '/values/Sheet1!A1:D5'
  // url: this.$store.state.endpoint + this.$store.state.sheetId + this.$store.state.sheetName
})

export const mutations = {
}

export const actions = {
}

export const getters = {
  doneTodos: (state) => {
    return state.endpoint + state.sheetId + state.sheetName
  }
}
