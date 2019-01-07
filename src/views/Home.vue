<template>
  <div class="home">
  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <a v-on:click="logout()">Logout</a>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
   <h1>{{ title }}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'
import router from '../router'

export default {
  name: 'home',
  beforeCreate() {
    console.log('Nothing gets called before me!')
    if(localStorage.status !== "loggedin"){
      router.push({ name: "login" });
    }
	},
  components: {
    HelloWorld
  },
  computed: mapState([
    'title'
  ]),
  methods: {              
  logout: function () {
      	localStorage.status =""
       router.push({ name: "login" });
        
  	},
  }
}
</script>
