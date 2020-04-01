<template>
  <v-container>
    <div class="display-1" v-if="this.$auth.loggedIn">
      Welcome, {{ this.$auth.user.given_name }} !
    </div>
    <div v-else class="display-1">
      Welcome, Anonymous! Please SignIn
    </div>
    STORE - {{ $store.state.access_token }}
    <br>
    COOKIE - {{ token }}
    <br>
    count - {{ $store.state.counter }}
  </v-container>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
// const Cookie = process.client ? require('js-cookie') : undefined
import Cookie from 'js-cookie'

export default {
  // components: {
  //   Logo,
  //   VuetifyLogo
  // }
  data () {
    return {
      token: Cookie.get('auth._token.google')
    }
  },
  created () {
    this.$store.dispatch('setToken')
  }
}
</script>
