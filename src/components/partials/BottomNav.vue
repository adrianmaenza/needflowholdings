<template>
  <v-footer
    height="auto"
    color="primary lighten-1"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-flex
        primary
        lighten-3
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy; {{ date }} — <strong>Needflow Holdings</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<script>
const date = new Date(),
      year = date.getFullYear();
export default {
  data(){
    return{
      date: year
    }
  }
}
</script>
