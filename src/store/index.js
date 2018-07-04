import Vue from 'vue';
import Vuex from 'vuex';
import categoryService from '../services/categoryService';

Vue.use(Vuex);

const state = {
  categories: [],
  isLoading: false,
  adminMode: false
}

const mutations = {
  SET_CATEGORIES(state, obj) {
    state.categories = obj
  },
  CHANGE_ADMIN_MODE(state, obj) {
    state.adminMode = !state.adminMode
  }
}

const getters = {
  getCategories: store => store.categories,
  getIsLoading: store => store.isLoading,
  getAdminMode: store => store.adminMode
}

const actions = {
  setCategories({ commit }, obj) {
    commit('SET_CATEGORIES', obj)
  },
  fetchCategories({ commit }) {
    categoryService.get().then(response => {
      console.log(response.data)
      commit('SET_CATEGORIES', response.data.categories)
    })
  },
  changeAdminMode({ commit }) {
    commit('CHANGE_ADMIN_MODE')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
