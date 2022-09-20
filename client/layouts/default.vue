<template>
  <v-app class="app">
    <v-main>
      <v-container class="main d-flex align-stretch">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {

  }
}
</script>

<style>
  app {
    background: #555;
  }
</style>