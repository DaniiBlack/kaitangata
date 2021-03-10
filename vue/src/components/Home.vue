<template>
  <div class="home">
       <li v-for="item in wai" :key="item.title">
          <p>{{ item.title }}</p>
          <p>{{ item.date }}</p>
          <p>Startish: {{ item.startTime }} Endish: {{ item.endTime }}</p>
          <p>Menu: {{ item.menu }}</p>
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
    const result = await fetch("https://still-hollows-12753.herokuapp.com/")
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
