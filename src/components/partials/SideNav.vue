<template>
  <v-layout
    wrap
    style="height: 200px;"
  >
    
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
      }
    }
  }
</script>
