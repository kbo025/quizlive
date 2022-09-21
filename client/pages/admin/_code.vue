<template>
  <v-row justify="center">
    <v-col class="maincol" cols="12" sm="8" md="6">
      <div class="title text-center">
        <h3><b>Olá: {{ 'Gabo' }}</b></h3>
        <small>Envie o seguinte link para os estudantes entrar no quiz: <br> {{ 'www.exemplo.com/invite/R0001' }}</small>
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
              class="primary my-3 py-5">
              Agregar Pergunta
          </v-btn>
          <v-btn
              block
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
    name: "IndexPage",
    components: { Question },
    data: () => {
        return {
            total:150,
            value: 95,
            room: {
              status: 0
            }
        }
    },
    computed: {
      result: function() {
        return (this.value / this.total) * 100;
      }
    }
}
</script>
