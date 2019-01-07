<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <h1>This is an about page</h1>
      <stats />
  </div>
</template>


<script>
import { mapState } from 'vuex'
import Stats from '@/components/Stats.vue'

export default {
  name: 'about',
  components: {                             // Add this
    Stats
  },
  computed: mapState([
    'title',
    'links'
  ])
}
</script>