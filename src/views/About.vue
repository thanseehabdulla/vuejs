<template>
  <div class="about">
  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <a v-on:click="logout()">Logout</a>
    </div>
    <h1>{{ title }}</h1>
   <div id="app">
    <div v-for="user in users" :key="users.id">
        <h1>{{ user.name }}</h1>
        <p>{{ user.email }}</p>
    </div><button @click="fetchUsers">Click me!</button>
   </div>
    <h1>This is an about page</h1>
      <stats />
      <form @submit.prevent="addLink">
   	  <input class="link-input" type="text" placeholder="Add a Link" v-model="newLink" />
	</form>
	<li v-for="(link, index) in links" v-bind:key="index">
    {{ link }}
    <button v-on:click="removeLinks(index)" class="rm">Remove</button>  <!-- Add this -->
  </li>
  </div>
</template>


<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Stats from '@/components/Stats.vue'
import router from '../router'

export default {
  name: 'about',
  beforeCreate() {
    console.log('Nothing gets called before me!')
    if(localStorage.status !== "loggedin"){
      router.push({ name: "login" });
    }
},
  components: {                             // Add this
    Stats
  },
  data () {
    return {
      users: []
    }
  },
  computed: mapState([
    'title',
    'links'
  ]),
    methods: {                                   // Add this:
    ...mapMutations([
      'ADD_LINK'
    ]),
    ...mapActions([                  // Add this
      'removeLink'
    ]),
    addLink: function() {
      this.ADD_LINK(this.newLink)
      this.newLink = ''
    },
    removeLinks: function(link) {    // Add this
      this.removeLink(link)
    },
    fetchUsers: function () {
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      this.$http.get(baseURI)
      .then((result) => {
        this.users = result.data
      })
  	},
  	methods: {              
  	logout: function () {
     localStorage.status =""
  	 router.push({ name: "login" });
  	},
  }
  }
}
</script>