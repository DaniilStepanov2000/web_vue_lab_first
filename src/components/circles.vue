<template>
  <ul>
      <li :class=" {active: go_count === 1}">{{todos[0].text}}</li>
      <li :class=" {active: go_count === 2}" id="middle">{{todos[1].text}}</li>
      <li :class=" {active: go_count === 3}">{{todos[2].text}}</li>
  </ul>
</template>

<script>
export default {
  name: "circles",

  props: ['go_count'],
  data(){
    return {
      todos: [
        {text: "1"},
        {text: "2"},
        {text: "3"}
      ],
      isActive: true
    }
  }
}
</script>

<style scoped>
li{
  display: inline-block;
  border-radius: 30px;
  border: 1px skyblue solid;
  padding: 20px;
}
.active{
  background-color: #28a745;
}
#middle{
  margin-left: 20px;
  margin-right: 20px;
}
</style>