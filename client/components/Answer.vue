<template>
    <v-expansion-panel class="question my-3">
        <v-expansion-panel-header>
            <span>
                <v-icon v-if="!answered" class="mr-3" color="primary">mdi-checkbox-blank-circle</v-icon>
                <v-icon v-else-if="answered && rigth" class="mr-3" color="success">mdi-checkbox-marked-circle</v-icon>
                <v-icon v-else class="mr-3" color="error">mdi-close-circle</v-icon>
                {{ label }}
            </span>
            <template v-slot:actions>
                <v-icon v-if="!answered" color="accent">$expand</v-icon>
                <span v-else-if="answered && rigth" ><b>+{{ value }}XP</b></span>
                <span v-else><b>-</b></span>
            </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <h2 class="my-5 text-center">{{ statement }}</h2>
            <v-btn-toggle
                class="d-flex flex-column"
                v-model="answer"
            >
                <v-btn
                    v-for="item in options"
                    :key="JSON.stringify(item)"
                    :disabled="answered"
                    block
                    outlined
                    class="my-3 py-5"
                    active-class="success white--text" 
                    :value="item.id">
                    <b class="hidden-sm-and-down">{{ item.text }}</b>
                </v-btn>
            </v-btn-toggle>
            <v-btn
                block
                :disabled="answered"
                color="primary"
                class="my-5 py-5">
                Continuar
            </v-btn>
        </v-expansion-panel-content>
    </v-expansion-panel>
  </template>
  
  <script>
    export default {
      name: 'Answer',
      data: () => {
        return {
            answer: null,
            label: 'Números primos',
            statement: 'Cual de los siguientes es un número primo?',
            options: [
                { id: 1, text: '8', rigth: false },
                { id: 2, text: '15', rigth: false },
                { id: 3, text: '5', rigth: true },
                { id: 4, text: '21', rigth: false },
            ],
            answered: true,
            rigth: true,
            value: 10,
        }
      }
    }
    </script>

  <style>
  .nuxt-logo {
    height: 180px;
  }
  </style>
  