<template>
  <v-app>
    <navbar></navbar>
    <banner></banner>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Navbar from './components/partials/Navbar.vue'
import Banner from './components/partials/Banner.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Banner
  },
  data () {
    return {
      
    }
  }
}
</script>
