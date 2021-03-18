<template>
  <div id="app">
    <circles v-bind:go_count="count"></circles>
    <first_form v-if="count === 1"></first_form>
    <second_form v-if="count === 2"></second_form>
    <third_form v-if="count === 3"></third_form>
    <br>
    <br>
    <br>
    <br>
    <button type="submit" class="btn btn-primary" v-on:click = 'count > 2 ? count = 1: count += 1'>Press me</button>
  </div>
</template>

<script>
import first_form from './components/first_form.vue'
import second_form from './components/second_form.vue'
import third_form from './components/third_form.vue'
import circles from './components/circles.vue'


export default {
  name: 'App',
  components: {
    circles,
    first_form,
    second_form,
    third_form,
  },
  data() {
    return {
      count: 1
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
