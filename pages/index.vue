<template>
  <v-container>
    <div class="display-1" v-if="this.$auth.loggedIn">
      Welcome, {{ this.$auth.user.given_name }} !
    </div>
    <div v-else class="display-1">
      Welcome, Anonymous! Please SignIn
    </div>
  </v-container>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  // components: {
  //   Logo,
  //   VuetifyLogo
  // }
}
</script>
