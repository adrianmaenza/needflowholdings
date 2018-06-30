<template>
  <v-app>
    <navbar></navbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Navbar from './components/partials/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      
    }
  }
}
</script>
