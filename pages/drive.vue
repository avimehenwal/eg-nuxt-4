<template>
  <v-container>
    <h1>Drive</h1>
    {{ URL }} <br>
    {{ this.$store.state.drive.data }}
    <v-btn @click="fetch">FETCH DRIVE</v-btn>
    {{ $store.state.drive.error }}
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      URL: this.$store.getters['drive/url']
      // data: this.$store.state.GSheet.data
    }
  },
  mounted () {
    this.$store.dispatch('drive/fetch')
  },
  methods: {
    fetch () {
      this.$store.dispatch('drive/fetch')
    }
  }
}
</script>
