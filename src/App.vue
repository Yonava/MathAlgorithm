<template>
  <div>
    <button v-on:click="questions()">Generate Questions</button>
    <h1>{{ equation }}</h1>
    <h1 v-for="i in output" :key="i.id">{{ i }}</h1>
  </div>
</template>

<script>
import GenerateQuestions from './assets/QuestionAssembler'
//import Arithmetic from './classes/Arithematic'

export default {
  name: 'App',
  data: () => {
    return {
      output: [],
      equation: ''
    }
  },
  components: {
  },
  methods: {
    questions() {
      this.output = GenerateQuestions([5, 1], 2)
    }
  }
}
</script>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
