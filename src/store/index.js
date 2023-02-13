import { createStore } from "vuex"




export default createStore({
  state: () => ({
    repos: [],
    loading: false,
    selectedSort: null,
  }),
  mutations: {
    setRepos(state, data) {
      state.repos = data
    },
    setLoading(state, bool) {
      state.loading = bool
    },
    setSelectedSort(state, selected) {
      state.selectedSort = selected
    }
  },
  getters: {
    sortedRepos(state) {
      if (state.selectedSort === null) return [...state.repos]
      return [...state.repos].sort((repo1, repo2) => {
        return repo1[state.selectedSort]?.localeCompare(repo2[state.selectedSort])
      })
    }
  },
  actions: {
    async getRepos({ commit }) {
      commit('setLoading', true)
      let query = `query Data { 
        repositoryOwner(login:"octocat"){
          repositories(first:70){
            nodes{
              name
              issues(last:10) {
            edges {
              node {
                id
                closed
                body
                title
                comments(last:10) {
                  edges {
                    node {
                      id
                      createdAt
                      body
                    }}}}}}}}}}`
      let url = 'https://api.github.com/graphql'
      try {
        let response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_MY_TOKEN}`
          },
          body: JSON.stringify({ query })
        })
        let data = await response.json()
        commit('setRepos', data.data.repositoryOwner.repositories.nodes)
      } catch (e) {
        console.log(e)
      } finally {
        commit('setLoading', false)
      }
    }
  }
})