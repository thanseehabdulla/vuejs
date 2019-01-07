<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   <h1>{{ title }}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: mapState([
    'title'
  ])
}
</script>
