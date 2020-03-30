<template>
  <v-container>
    <h1>Sheets</h1>
    <v-btn @click="sheet">get sheet </v-btn>
    <v-card tile>
      <!-- <v-list-item> {{ token }} </v-list-item> -->
      <v-list-item v-for="item in data" :key="item">
        <v-list-item-content>
          <v-list-item-title>{{item}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    {{driveData}}
  </v-container>
</template>

<script>
// const { google } = require('googleapis')
// let url = 'https://sheets.googleapis.com/v4/spreadsheets/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/values/Sheet1!A1:D5'
// const querystring = require('querystring')
const Cookie = process.client ? require('js-cookie') : undefined
// const url = 'https://sheets.googleapis.com/v4/spreadsheets/1KuuDpw2ssi4EC-hlkOTWQTFuIhVGtlN8EhqsdI4y2S0/values/INDEX!A1:F3'
export default {
  data () {
    return {
      token: null,
      data: null,
      driveData: null
    }
  },
  methods: {
    sheet () {
      Cookie.set('foo', 'bar')
      this.token = Cookie.get('auth._token.google')
      this.$axios.setToken(this.token)
      this.$axios.get(url)
        .then(response => (this.data = response.data.values))
      const drive = 'https://www.googleapis.com/drive/v3/about?fields=*'
      const driveParams = {
        fields: '*'
      }
      const drive = 'https://www.googleapis.com/drive/v3/about'
      this.$axios.setToken(this.token)
      this.$axios.get(drive, { params: driveParams })
        .then(response => (this.driveData = response.data))
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
