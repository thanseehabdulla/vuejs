<template>
  <div class="about">
    <h1>{{ title }}</h1>
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

export default {
  name: 'about',
  components: {                             // Add this
    Stats
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
    }
  }
}
</script>