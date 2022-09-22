<template>
    <v-expansion-panel class="question my-3">
        <v-expansion-panel-header>
            <span>
                <v-icon v-if="!answered" class="mr-3" color="primary">mdi-checkbox-blank-circle</v-icon>
                <v-icon v-else-if="answered && answered.rigth" class="mr-3" color="success">mdi-checkbox-marked-circle</v-icon>
                <v-icon v-else class="mr-3" color="error">mdi-close-circle</v-icon>
                {{ model.topic }}
            </span>
            <template v-slot:actions>
                <v-icon v-if="!answered" color="accent">$expand</v-icon>
                <span v-else-if="answered && answered.rigth" ><b>+{{ answered.xp }}XP</b></span>
                <span v-else><b>-</b></span>
            </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <h2 class="my-5 text-center">{{ model.statement }}</h2>
            <v-btn-toggle
                class="d-flex flex-column"
                v-model="answer">
                <v-btn
                    v-for="item in model.options"
                    :key="JSON.stringify(item)"
                    :disabled="answered"
                    block
                    outlined
                    class="my-3 py-5"
                    active-class="success white--text" 
                    :value="item.code">
                    <b class="hidden-sm-and-down">{{ item.statement }}</b>
                </v-btn>
            </v-btn-toggle>
            <v-btn
                block
                :disabled="answered || !answer"
                color="primary"
                @click="send"
                class="my-5 py-5">
                Continuar
            </v-btn>
        </v-expansion-panel-content>
    </v-expansion-panel>
  </template>
  
  <script>
    export default {
        name: 'Answer',
        props: {
            room: {
                type: String,
                required: true,
            },
            student: {
                type: String,
                required: true,
            },
            model: {
                type: Object,
                required: true,
            },
        },
        data: () => {
            return {
                answer: null,
                answered: false,
                user: null,
            }
        },
        mounted() {
            this.answer = this.model.answer ? this.model.answer.option : null;
            this.answered = this.model.answer || false;
            this.user = this.$store.state.auth;
        },
        methods: {
            send: async function() {
                try {
                    const res = await this.$axios.post(
                        `/room/${this.room}/student/${this.student}/answer`,
                        { questionCode: this.model.code, optionCode: this.answer },
                        { headers: { 'authorization': this.user.token } }
                    );
                    this.answered = res.data
                    this.$emit('addanswer', res.data)
                } catch (err) {
                    this.error = true;
                    console.log(err);
                }
            }
        }
    }
    </script>

  <style>
  .nuxt-logo {
    height: 180px;
  }
  </style>
  