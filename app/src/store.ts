import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeNote: '',
    searching: false,
    searchResults: [{
      noteId: 0,
      note: '',
      timestamp: 0,
    }],
    notes: [
      {
        noteId: 1,
        note: 'hello world 1',
        timestamp: 1009873,
      },
      {
        noteId: 2,
        note: 'hey hello there id 2',
        timestamp: 1009873,
      },
      {
        noteId: 3,
        note: 'this is a note with id 3',
        timestamp: 1009873,
      },
      {
        noteId: 4,
        note: 'swimming hello id 4',
        timestamp: 1009873,
      },
    ],
  },
  mutations: {
    updateActiveNote(state, note) {
      state.activeNote = note;
    },
    updateSearchResults(state, searchInput) {
      state.searching = true;
      const searchResults = state.notes.filter((item) => item.note.match(searchInput));
      state.searchResults = searchResults;
    },
    disableSearch(state) {
      state.searching = false;
    },
  },
  actions: {
    disableSearch({commit}) {
      commit('disableSearch');
    },
    updateSearchResults({ commit }, searchInput: string) {
      commit('updateSearchResults', searchInput);
    },
    updateActiveNote({ commit }, note) {
      commit('updateActiveNote');
    },
  },
  getters: {
    activeNote: (state) => state.activeNote,
    searchStatus: (state) => state.searching,
  },
});
