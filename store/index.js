import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeNote: {}
  },
  getters: {},
  mutations: {
    SET_ACTIVE_NOTE(state, note) {
      state.activeNote = note;
    }
  },
  actions: {}
});

// export default store;
