<template>
<div>

  <v-toolbar dark color="primary">
    <v-toolbar-side-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <!-- Replace with logo -->
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-for="menuItem in menuItems" v-bind:key="menuItem.id" flat :to="{path: menuItem.path}">{{ menuItem.name }}</v-btn>
    </v-toolbar-items>
  </v-toolbar>


  <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >


      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="{path :item.path}"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title :to="{path: item.path}">{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</div>
</template>

<script>
export default {
  data(){
    return {
      title: 'Needflow Holdings',
      menuItems: [
        {name: 'Home', path: '/', icon: 'home'},
        {name: 'Needflow Finance', path: '/finance', icon: 'money'},
        {name: 'Contact', path: '/contact', icon: 'contact_mail'},
      ],
      drawer: null,
    }
  }
}
</script>
