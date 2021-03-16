<template>
  <form class="col-lg-6 offset-lg-3">
    <div class="form-group">
      <label for="firstName">First name</label>
      <input type="text" class="form-control" id="firstName" placeholder="Enter first name">
    </div>
    <div class="form-group">
      <label for="secondName">Second name</label>
      <input type="text" class="form-control" id="secondName" placeholder="Enter second name">
    </div>
  </form>
</template>

<script>
export default {
name: "second_form"
}
</script>

<style scoped>
form{
  border: 2px skyblue solid;
  border-radius: 5px;
  height: 200px;
}
</style>