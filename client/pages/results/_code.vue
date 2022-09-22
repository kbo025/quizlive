<template>
    <v-row justify="center">
      <v-col class="maincol" cols="12" sm="8" md="6">
        <div class="title text-center">
          <h3><b>Olá: {{ user.name }}</b></h3>
        </div>
        <div class="subtitle">
          <h3>Estes forom os resultados do Quiz:</h3>
        </div>
        <div class="content">
            <v-list subheader>
                <v-list-item
                    v-for="student in students"
                    :key="JSON.stringify(student)">
                    <v-list-item-avatar>
                        <v-icon color="primary">mdi-odnoklassniki</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title v-text="student.name"></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-icon>
                        <span><b>{{ getPerc(student.xp) }}%</b></span>
                    </v-list-item-icon>
                </v-list-item>
            </v-list>
        </div>
      </v-col>
    </v-row>
  </template>
  
<script>
export default {
    name: "ResultPage",
    async asyncData({ store, $axios, params }) {
        const user = store.state.auth;
        const resRoom = await $axios.get(
            `/room/${params.code}`,
            { headers: { 'authorization': user.token } }
        );
        const room = resRoom.data;
        const resStudents = await $axios.get(
            `/room/${params.code}/student`,
            { headers: { 'authorization': user.token } }
        );
        const students = resStudents.data;

        return { user, room, students }
    },
    data: () => {
        return {
            room: null,
            students: []
        }
    },
    methods: {
        getPerc(xp) {
            return Math.ceil((((xp || 0) / (this.room.xp || 1)) * 100));
        }
    },
    computed: {
    }
}
</script>
  