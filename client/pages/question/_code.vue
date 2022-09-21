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
          <v-form ref="form" lazy-validation>
            <v-text-field
              label="Topico da pergunta"
              v-model="form.topic"
              :rules="rules.topic"
              outlined
            ></v-text-field>
            <v-text-field
              label="Valor (XP)"
              v-model="form.value"
              :rules="rules.value"
              outlined
            ></v-text-field>
            <v-textarea
              label="Enunciado da Pergunta"
              v-model="form.statement"
              :rules="rules.statement"
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
                <v-radio-group v-model="form.rigthOption" :rules="rules.rigthOption">
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
              @click="submitForm"
              large>
              Criar Pergunta
            </v-btn>
          </v-form>
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
            form: {
              topic: null,
              statement: null,
              value: 1,
              rigthOption: null,
              options: [
                'SIM',
                'NÃO',
              ]
            },
            rules: {
              topic: [
                v => !!v || 'Requerido',
              ],
              statement: [
                v => !!v || 'Requerido',
              ],
              value: [
                v => !!v || 'Requerido',
                v => (v && /^\d*$/.test(v) && parseInt(v) > 0 ) || 'Deve ser um número inteiro positivo',
              ],
              rigthOption: [ 
                v => !!v || 'Deve escolher a opção correta',
              ],
              options: [
                v => (Array.isArray(v) && v.length > 1 ) || 'Deve Agregar mais opções na pergunta',
              ]
            }
        }
    },
    methods: {
        addOptionAction: function() {
            if (!this.addOption || this.addOption == '') {
                return;
            }
            this.form.options.push(this.addOption);
            this.addOption = null;
        },
        removeOptions: function() {
            this.form.options = [];
        },
        submitForm () {
          this.$refs.form.validate();
        },
    }
  }
  </script>
  
  