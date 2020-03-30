<template>
  <v-container>
    <h1>Sheets</h1>
    <v-btn @click="sheet">get sheet </v-btn>
    {{ this.$auth.token }}
    {{ token }}
  </v-container>
</template>

<script>
// const { google } = require('googleapis')
// let url = 'https://sheets.googleapis.com/v4/spreadsheets/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/values/Sheet1!A1:D5'
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  data () {
    return {
      token: null
    }
  },
  methods: {
    sheet () {
      Cookie.set('foo', 'bar')
      this.token = Cookie.get('auth._token.google')
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
