<template>
  <div>
    <button v-on:click="questions()">Generate Questions</button>
    <input type="range" min="2" max="15" v-model="max">{{max}}
    <h1>{{ equation }}</h1>
    <h1 v-for="i in output" :key="i.id">{{i}}</h1>
  </div>
</template>

<script>
import GenerateProblems from './assets/QuestionAssembler'
export default {
  name: 'App',
  data: () => {
    return {
      output: [],
      equation: '',
      max: 0
    }
  },
  components: {
  },
  methods: {
    questions() {
      this.output = GenerateProblems()
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
