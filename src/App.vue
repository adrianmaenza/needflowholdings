<template>
  <v-app>
    <navbar></navbar>
    <banner></banner>
    <v-content>
      <router-view></router-view>
    </v-content>
    <botton-nav></botton-nav>
  </v-app>
</template>

<script>

import Navbar from './components/partials/Navbar.vue'
import Banner from './components/partials/Banner.vue'
import BottonNav from './components/partials/BottomNav.vue'
import SideNav from './components/partials/SideNav.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Banner,
    BottonNav,
    SideNav
  },
  data () {
    return {
      
    }
  }
}
</script>
