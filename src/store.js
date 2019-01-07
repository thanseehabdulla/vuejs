import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
 	 title: 'My ASD Title',
 	 links: [
      'http://google.com',
      'http://coursetro.com',
      'http://youtube.com'
    ]
  },
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {
	ADD_LINK: (state, link) => {
	      state.links.push(link)
	    },
	REMOVE_LINK: (state, link) => {        // Add this:
      state.links.splice(link, 1)
    }
  },
  actions: {
	removeLink: (context, link) => {       // Add this:
      context.commit("REMOVE_LINK", link)
    }
  }
})
