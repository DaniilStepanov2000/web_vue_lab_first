<template>
  <form class="col-lg-6 offset-lg-3">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
  </form>
</template>

<script>
export default {
name: "first_form"
}
</script>

<style scoped>


form{
  border: 2px skyblue solid;
  border-radius: 5px;
  height: 200px;
}
</style>