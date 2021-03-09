<template>
  <div class="admin">
    Where am I
    <form v-on:submit.prevent="onSubmit" id="AddWAI">
      <!-- name -->
      <div class="field">
        <label class="label">Title</label>
        <input  v-model="formInput.title" type="text" class="input" name="title">
      </div>

      <!-- email -->
      <div class="field">
        <label class="label">Date</label>
        <input v-model="formInput.date" type="date" class="input" name="date">
      </div>

      <div class="field">
        <label class="label">Start Time</label>
        <input v-model="formInput.startTime" type="time" class="input" name="startTime">
      </div>

      <div class="field">
        <label class="label">End Time</label>
        <input v-model="formInput.endTime" type="time" class="input" name="endTime">
      </div>
      
      <div class="field">
        <label class="label">Menu</label>
        <input v-model="formInput.menu" type="text" class="input" name="menu">
      </div>

      <!-- submit button -->
      <div class="field has-text-right">
        <button type="submit" class="button is-danger">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
      return {
        formInput:{
            title:'',
            date:'',
            startTime:'',
            endTime:'',
            menu:'',
        }
      }
  },
  methods: {
      onSubmit(){
          console.log("submit", this.formInput)
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
