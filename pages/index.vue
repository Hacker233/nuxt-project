<template>
  <div>
    <h1>首页</h1>
    {{ msg }}
    <button @click="getPersonData">点击获取数据</button>
    <div>
      {{ person }}
      <p>--------------</p>
      {{ personNew }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data (){
    return {
      person: '',
      personNew: ''
    }
  }, 
  asyncData ({ req, params }){
    return axios.get('http://api.icndb.com/jokes/random').then((res)=>{
      return {msg: res.data.value.joke}
    })
  },
  methods: {
    getPersonData() {
      this.$store.commit('getPerson',this.msg)
      this.person = this.$store.state.person
      this.$store.dispatch('setPersonNew')
      this.personNew = this.$store.state.personNew
    }
  }
}
</script>

<style>


</style>
