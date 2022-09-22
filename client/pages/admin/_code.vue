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
              <Question v-for="question in room.questions" :key="JSON.stringify(question)" :model="question"></Question>
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
    async asyncData({ store, $axios, params  }) {
      const user = store.state.auth;
      const res = await $axios.get(
        `/room/${params.code}`,
        { headers: { 'authorization': user.token } }
      );
      const room = res.data;
      return { user, room }
    },
    data: () => {
        return {
            user: null,
            room: null,
        }
    },
    methods: {
      async closeRoom() {
        try {
            const res = await this.$axios.put(
              `/room/${this.room.code}`,
              { status: 1 },
              { headers: { 'authorization': this.user.token } }
            );
            this.$store.commit('setRoom', res.data);
            this.$router.push(`/results/${this.room.code}`);
        } catch (err) {
          this.error = true;
          console.log(err);
        }
      },
    },
    computed: {

    }
}
</script>
