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
  fetch (context) {
    // this.$axios.setToken(this.token)
    //   this.$axios.get(url)
    //     .then(response => (this.data = response.data.values))
    //   const drive = 'https://www.googleapis.com/drive/v3/about?fields=*'
    //   const driveParams = {
    //     fields: '*'
    //   }
    //   const drive = 'https://www.googleapis.com/drive/v3/about'
    //   this.$axios.setToken(this.token)
    //   this.$axios.get(drive, { params: driveParams })
    //     .then(response => (this.driveData = response.data))
  }
}

export const getters = {
  doneTodos: (state) => {
    return state.endpoint + state.sheetId + state.sheetName
  }
}
