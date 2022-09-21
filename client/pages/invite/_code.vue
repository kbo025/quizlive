<template>
  <v-row justify="center">
    <v-col class="maincol" cols="12" sm="8" md="6">
      <div class="title text-center">
        <h3><b>Ben-vindo ao Aula: {{ 'Conjuntos' }}</b></h3>
      </div>
      <div class="subtitle">
        <h3>Indica teu nome e da click em 'Entrar para começar.'</h3>
      </div>
      <div class="content">
        <v-form ref="form" lazy-validation>
          <v-text-field
            label="Nome"
            :v-model="form.name"
            :rules="rules.name"
            outlined>
          </v-text-field>
        </v-form>
          <v-btn
            block
            color="primary"
            elevation="2"
            large
            @click="submitForm">
            Entrar
          </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InvitePage',
  data: () => {
    return {
      rules: {
        name: [
          v => !!v || 'Requerido',
        ]
      },
      form: {
        name: null,
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

