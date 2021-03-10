<template>
  <div class="home">
    <h1>Kaitangata</h1>
       <li v-for="item in wai" :key="item.title">
         <div class="divider"></div>
          <p>{{ item.title }}</p>
          <p>{{ date(item.date) }}</p>
          <p>Startish: {{ time(item.startTime) }} Leaving: {{ time(item.endTime) }}</p>
          <p>Menu: {{ item.menu }}</p>
      </li>
      <img src="../assets/kai.octopus.jpg">
  </div>
</template>

<script>
import Moment from 'moment';
import convertTime from 'convert-time'; 
import {api} from '../config';
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
  methods:{
    date(d){
      return Moment(d).format("dddd Do MMMM");
    },
    time(t){
      return convertTime(t);
    }
  },
  async mounted() {
    const result = await fetch(`${api}/wai`)
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
  .divider {
    height: 1px;
    width: 57px;
    background-color: aliceblue;
    margin: 0 auto;
  }

</style>
