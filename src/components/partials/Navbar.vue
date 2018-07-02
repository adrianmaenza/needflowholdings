<template>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <!-- Replace with logo -->
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-for="menuItem in menuItems" v-bind:key="menuItem.id" flat :to="{path: menuItem.path}">{{ menuItem.name }}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data(){
    return {
      title: 'Needflow Holdings',
      menuItems: [
        {name: 'Home', path: '/'},
        {name: 'Needflow Finance', path: '/finance'},
        {name: 'Contact', path: '/contact'},
      ]
    }
  }
}
</script>
