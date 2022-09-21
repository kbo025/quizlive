<template>
    <v-row justify="center">
      <v-col class="maincol" cols="12" sm="8" md="6">
        <div class="title text-center">
            <h3><b>Olá: {{ 'Gabo' }}</b></h3>
        </div>
        <div class="subtitle">
          <h3>Agregue os dados da pergunta.</h3>
        </div>
        <div class="content">
            <v-text-field
              label="Topico da pergunta"
              v-model="topic"
              outlined
            ></v-text-field>
            <v-text-field
              label="Valor (XP)"
              v-model="value"
              outlined
            ></v-text-field>
            <v-textarea
              label="Enunciado da Pergunta"
              outlined
            ></v-textarea>
            <v-text-field
                v-model="addOption"
                outlined
                append-icon="mdi-plus-circle"
                label="Agregar Opção"
                type="text"
                @click:append="addOptionAction"
            ></v-text-field>
            <fieldset class="px-3 py-3">
                <label for="">Opções:</label>
                <v-divider></v-divider>
                <v-radio-group v-model="rigthOption">
                    <v-radio
                        v-for="item in options"
                        :key="item"
                        :label="item"
                        :value="item"
                    ></v-radio>
                </v-radio-group>
                <v-divider></v-divider>
                <v-btn small outlined color="error" @click="removeOptions">
                    Remover
                </v-btn>
            </fieldset>
            <v-btn
              block
              class="my-3"
              color="primary"
              elevation="2"
              large>
              Criar Pergunta
            </v-btn>
        </div>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    name: 'QuestionPage',
    data: function() {
        return {
            addOption: null,
            topic: null,
            statemen: null,
            value: 1,
            rigthOption: null,
            options: [
                'SIM',
                'NÃO',
            ]
        }
    },
    methods: {
        addOptionAction: function() {
            if (!this.addOption || this.addOption == '') {
                return;
            }
            this.options.push(this.addOption);
            this.addOption = null;
        },
        removeOptions: function() {
            this.options = [];
        }
    }
  }
  </script>
  
  