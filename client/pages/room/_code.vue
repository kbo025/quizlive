<template>
    <v-row justify="center">
      <v-col class="maincol" cols="12" sm="8" md="6">
        <div class="title text-center">
          <h3><b>Olá: {{ user.name }}</b></h3>
          <h3>Ben-vindo ao aula de {{ room.name }}</h3>
        </div>
        <div class="subtitle">
          <h3 v-if="room.status == 0">Responde as perguntas do professor:</h3>
          <h3 v-else-if="room.status == 1">Teu resultado foi:</h3>
        </div>
        <div class="content" v-if="room.status == 0">
            <v-expansion-panels>
                <Answer
                  :room="room.code"
                  :student="user.code"
                  v-for="answer in room.questions"
                  @addanswer="addanswer"
                  :key="JSON.stringify(answer)"
                  :model="answer">
                </Answer>
            </v-expansion-panels>
        </div>
        <div class="content d-flex justify-center" v-else-if="room.status == 1">
          <v-progress-circular
            :value="result"
            :size="200"
            :width="25"
            color="success">
            <h1>{{ `${xp}PX` }}</h1>
          </v-progress-circular>
        </div>
      </v-col>
    </v-row>
  </template>
  
  <script>
import Answer from "../../components/Answer.vue";

export default {
    name: "RoomPage",
    components: { Answer },
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
          xp: 0
        }
    },
    methods: {
      addanswer(data) {
        this.xp = this.xp + data.xp;
      }
    },
    computed: {
        result: function() {
            return ((this.xp || 0) / (this.room.xp || 1)) * 100;
        }
    }
}
</script>

<style scoped>
    .v-progress-circular {
        margin: 5rem;
    }
</style>