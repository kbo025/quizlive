<template>
  <v-row justify="center">
    <v-col class="maincol" cols="12" sm="8" md="6">
      <div class="title text-center">
        <h3><b>Seja ben-vindo a Quizlive!</b></h3>
      </div>
      <div class="subtitle">
        <h3>Para começar a aula indique seu nome e um titulo e de click no botão 'Criar Sala'.</h3>
      </div>
      <div class="content">
        <v-text-field
            label="Nome"
            outlined
          ></v-text-field>
          <v-text-field
            label="Titulo da aula"
            outlined
          ></v-text-field>

          <v-btn
            block
            color="primary"
            elevation="2"
            large
          >
            Criar Sala
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

