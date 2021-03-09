<template>
  <div class="home">
       <li v-for="item in wai" :key="item.title">
          <p>Title: {{ item.title }} Date: {{item.date}}</p>
          <p>Start: {{item.startTime}} End: {{item.endTime}}</p>
          <p>Menu: {{item.menu}}</p>
      </li>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      wai: []
    }
  },
  async mounted() {
    const result = await fetch("http://localhost:3000/wai")
    const json = await result.json()
    this.wai = json.wai
    console.log(this.wai);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    list-style-type: none;
  }
</style>
