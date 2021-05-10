import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    facts:[],
    fact: {},
    factRandom: null
  },
  mutations: {
    SET_FACTS(state, facts){
      state.facts = facts;
    },
    SET_FACT(state, fact){
      state.fact = fact;
    },
    SET_FACT_RANDOM(state, factRandom){
      state.factRandom = factRandom;
    }
  },
  actions: {
    getFacts({commit}){
      axios.get('https://cat-fact.herokuapp.com/facts')
      .then(response => {
        commit('SET_FACTS', response.data);
      })
      .catch(error => console.log(error))
    },
    getFact({ commit }, id){
      axios.get(`https://cat-fact.herokuapp.com/facts/${id}`)
        .then(response => {
          commit('SET_FACT', response.data);
        })
        .catch(error => console.log(error))
    },
    getFactRandom({ commit }){
      axios.get('https://cat-fact.herokuapp.com/facts/random')
        .then(response => {
          commit('SET_FACT_RANDOM', response.data);
        })
        .catch(error => console.log(error))
    }
  },
  modules: {
  }
})
