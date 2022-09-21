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
        <v-form ref="form" lazy-validation>
          <v-text-field
            label="Nome"
            :v-model="form.name"
            :rules="rules.name"
            outlined>
          </v-text-field>
          <v-text-field
            :v-model="form.classroom"
            :rules="rules.classroom"
            label="Titulo da aula"
            outlined>
          </v-text-field>

          <v-btn
            block
            color="primary"
            elevation="2"
            @click="submitForm"
            large>
            Criar Sala
          </v-btn>
        </v-form>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'MainPage',
  data: () => {
    return {
      rules: {
        name: [
          v => !!v || 'Requerido',
        ],
        classroom: [
          v => !!v || 'Requerido',
        ],
      },
      form: {
        name: null,
        classroom: null
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate();
    },
  },
}
</script>

