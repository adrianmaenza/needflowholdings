<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat :to="{path: '/'}">Home</v-btn>
      <v-btn flat :to="{path: '/about'}">About</v-btn>
      <v-btn flat :to="{path: '/contact'}">Contact</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>