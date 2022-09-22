<template>
  <v-row justify="center">
    <v-col class="maincol" cols="12" sm="8" md="6">
      <div class="title text-center">
        <h3><b>Ben-vindo ao Quizlive</b></h3>
      </div>
      <div class="subtitle">
        <h3>Indica teu nome e da click em 'Entrar para começar.'</h3>
      </div>
      <div class="content">
        <v-alert outlined dismissible :value="error"  type="error">Erro nos dados enviados</v-alert>
        <v-form ref="form" lazy-validation>
          <v-text-field
            label="Nome"
            v-model="form.name"
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
  async asyncData({ params }) {
    const roomCode = params.code;
    return { roomCode }
  },
  data: () => {
    return {
      error: false,
      roomCode: null, 
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
    async submitForm() {
      try {
        if (this.$refs.form.validate()) {
          const res = await this.$axios.post(`/room/${this.roomCode}/student`, this.form);
          this.$store.commit('setAuth', { name: res.data.student.name, role: 'student', token: res.data.student.student_id });
          this.$store.commit('setRoom', res.data);
          this.$router.push(`/room/${this.roomCode}`);
        }
      } catch (err) {
        this.error = true;
        console.log(err);
      }
    },
  },
}
</script>

