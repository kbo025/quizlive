<template>
    <v-row justify="center">
      <v-col class="maincol" cols="12" sm="8" md="6">
        <div class="title text-center">
          <h3><b>Olá: {{ 'Gabo' }}</b></h3>
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
                        <span><b>{{student.value}}%</b></span>
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
      data: () => {
          return {
            students: [
                { code: 'E0001', name: 'Gabo', value: 75},
                { code: 'E0002', name: 'Alfredo', value: 80},
                { code: 'E0003', name: 'Victor', value: 100},
                { code: 'E0004', name: 'Luis', value: 12},
            ]
          }
      },
      computed: {

      }
  }
  </script>
  