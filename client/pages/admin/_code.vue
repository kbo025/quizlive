<template>
  <v-row justify="center">
    <v-col class="maincol" cols="12" sm="8" md="6">
      <div class="title text-center">
        <h3><b>Olá: {{ user.name }}</b></h3>
        <small>Envie o seguinte link para os estudantes entrar no quiz: <br> {{ room.url }}</small>
      </div>
      <div class="subtitle">
        <h3>Agregue perguntas no Quiz:</h3>
      </div>
      <div class="content">
          <v-expansion-panels>
              <Question></Question>
              <Question></Question>
              <Question></Question>
          </v-expansion-panels>
          <v-btn
              block
              :to="`/question/${room.code}`"
              class="primary my-3 py-5">
              Agregar Pergunta
          </v-btn>
          <v-btn
              block
              @click="closeRoom"
              class="accent my-3 py-5">
              Fechar Aula
          </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Question from "../../components/Question.vue";

export default {
    name: "AdminPage",
    components: { Question },
    async asyncData({ store  }) {
      const room = store.state.room;
      const user = store.state.auth;
      return { user, room }
    },
    data: () => {
        return {
            user: null,
            room: null,
            total:150,
            value: 95,
            room: {
              status: 0
            }
        }
    },
    methods: {
      async closeRoom() {
        try {
            const res = await this.$axios.put(`/room/${this.roomCode}`, { status: 1 });
            this.$store.commit('setRoom', res.data);
            this.$router.push(`/result/${this.roomCode}`);
        } catch (err) {
          this.error = true;
          console.log(err);
        }
      },
    },
    computed: {
      result: function() {
        return (this.value / this.total) * 100;
      }
    }
}
</script>
