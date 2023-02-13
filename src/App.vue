<script>

import { mapActions, mapState, mapGetters, mapMutations } from "vuex"
import ReposList from '@/components/ReposList.vue'


export default ({
  components: {
    ReposList
  },
  data() {
    return {

    }
  },
  methods: {

    ...mapActions({
      getRepos: 'getRepos'
    }),
    ...mapMutations({
      setSelectedSort: 'setSelectedSort'
    })

  },
  computed: {
    ...mapState({
      repos: (state => state.repos),
      loading: (state => state.loading),
      selectedSort: (state => state.selectedSort)
    }),
    ...mapGetters({
      sortedRepos: 'sortedRepos'
    })
  },
  mounted() {
    this.getRepos()
  },
})
</script>
    
<template>
  <v-theme-provider theme="dark" with-background>
    <v-container>
      <v-sheet width="500" class="mx-auto">
        <v-select :model-value="selectedSort" @update:model-value="setSelectedSort" clearable label="Filter"
          :items="[{ title: 'By name', value: 'name' }]" :item-title="['title']" item-value="value"></v-select>
      </v-sheet>
      <p class="font-weight-bold my-4">
        Repositories
      </p>

      <v-progress-linear v-if="loading" color="blue-lighten-3" indeterminate :height="12"></v-progress-linear>

      <ReposList :sortedRepos="sortedRepos" />

    </v-container>
  </v-theme-provider>
</template>
<style>
.v-theme-provider {
  min-height: 100vh;
  height: 100%;
}
</style>
