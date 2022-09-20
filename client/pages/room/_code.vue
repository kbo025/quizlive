<template>
    <v-row justify="center">
      <v-col class="maincol" cols="12" sm="8" md="6">
        <div class="title text-center">
          <h3><b>Olá: {{ 'Gabo' }}</b></h3>
        </div>
        <div class="subtitle">
          <h3>Responde as perguntas do professor:</h3>
        </div>
        <div class="content">
            <v-expansion-panels>
                <v-expansion-panel class="my-3">
                    <v-expansion-panel-header>
                        <span>
                            <v-icon class="mr-3" color="primary">mdi-checkbox-blank-circle</v-icon>
                            Item
                        </span>
                        <template v-slot:actions>
                            <v-icon color="accent">
                            $expand
                            </v-icon>
                        </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel class="my-3">
                    <v-expansion-panel-header disable-icon-rotate>
                        <span>
                            <v-icon class="mr-3" color="success">mdi-checkbox-marked-circle</v-icon>
                            Item
                        </span>
                        <template v-slot:actions>
                            <span><b>+50XP</b></span>
                        </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel  class="my-3">
                    <v-expansion-panel-header disable-icon-rotate>
                        <span>
                            <v-icon class="mr-3" color="error">mdi-close-circle</v-icon>
                            Item
                        </span>
                        <template v-slot:actions>
                            <span><b>0XP</b></span>
                        </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    name: 'IndexPage'
  }
  </script>
  
  