<template>
    <v-expansion-panel class="question my-3">
        <v-expansion-panel-header>
            <span>
                <v-icon class="mr-3" color="primary">mdi-checkbox-blank-circle</v-icon>
                {{ model.topic }}
            </span>
            <template v-slot:actions>
                <span><b>+{{ model.xp }}XP</b></span>
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
                    :disabled="true"
                    block
                    outlined
                    class="my-3 py-5"
                    active-class="success white--text" 
                    :value="item.code">
                    <b class="hidden-sm-and-down">{{ item.statement }}</b>
                </v-btn>
            </v-btn-toggle>
        </v-expansion-panel-content>
    </v-expansion-panel>
  </template>
  
  <script>
    export default {
        name: 'Question',
        props: {
            model: {
                type: Object,
                required: false,
            },
        },
        mounted() {
            const option = this.model.options.find( e => e.rigth_answer );
            this.answer = option ? option.code : null;
        },
        data: () => {
            return {
                answer: null,
                answered: true,
            }
        }
    }
</script>

  