<template>
  <v-row justify="center">
    <v-col class="maincol" cols="12" sm="8" md="6">
      <div class="title text-center">
        <h3><b>Ben-vindo ao Aula: {{ 'Conjuntos' }}</b></h3>
      </div>
      <div class="subtitle">
        <h3>Indica-nos teu nome e da click em 'Entrar para começar.'</h3>
      </div>
      <div class="content">
          <v-text-field
            label="Nome"
            outlined
          ></v-text-field>
          <v-btn
            block
            color="primary"
            elevation="2"
            large
          >
            Entrar
          </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

