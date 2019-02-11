import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeNote: '',
  },
  mutations: {
    updateActiveNote(state, note) {
      state.activeNote = note;
    },
  },
  actions: {
    updateActiveNote({ commit }, note) {
      commit('updateActiveNote');
    },
  },
  getters: {
    activeNote: (state) => state.activeNote,
  },
});
