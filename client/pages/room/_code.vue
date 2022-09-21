<template>
    <v-row justify="center">
      <v-col class="maincol" cols="12" sm="8" md="6">
        <div class="title text-center">
          <h3><b>Olá: {{ 'Gabo' }}</b></h3>
          <h3>Ben-vindo ao aula de {{ 'Nome da aula' }}</h3>
        </div>
        <div class="subtitle">
          <h3 v-if="room.status == 0">Responde as perguntas do professor:</h3>
          <h3 v-else-if="room.status == 1">Teu resultado foi:</h3>
        </div>
        <div class="content" v-if="room.status == 0">
            <v-expansion-panels>
                <Answer></Answer>
                <Answer></Answer>
                <Answer></Answer>
            </v-expansion-panels>
        </div>
        <div class="content d-flex justify-center" v-else-if="room.status == 1">
          <v-progress-circular
            :value="result"
            :size="200"
            :width="25"
            color="success">
            <h1>{{ `${value}PX` }}</h1>
          </v-progress-circular>
        </div>
      </v-col>
    </v-row>
  </template>
  
  <script>
import Answer from "../../components/Answer.vue";

export default {
    name: "IndexPage",
    components: { Answer },
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
  
<style scoped>
    .v-progress-circular {
      margin: 5rem;
    }
</style>