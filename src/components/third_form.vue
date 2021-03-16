<template>
  <form class="col-lg-6 offset-lg-3">
<!--    <div class="form-group">-->
<!--      <label for="Country">Country</label>-->
<!--      <input type="text" class="form-control" id="Country" placeholder="Enter the country where you live">-->
<!--    </div>-->
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Tell us something about you</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="first_check" id="first_check" value="option1" checked>
      <label class="form-check-label" for="first_check">
        I agree with your policy
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="second_check" id="second_check" value="option2">
      <label class="form-check-label" for="second_check">
        Send me email notifications
      </label>
    </div>
  </form>
</template>

<script>
export default {
name: "third_component"
}
</script>

<style scoped>
form{
  border: 2px skyblue solid;
  border-radius: 5px;
  height: 200px;
}
</style>