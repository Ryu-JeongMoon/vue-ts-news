import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState, state } from "@/store/state";
import { mutations } from "@/store/mutations";
import getters from "@/store/getters";
import { actions } from "@/store/actions";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state,
  mutations,
  actions,
  getters,
};

export default new Vuex.Store(store);

// export default new Vuex.Store({
//   strict: process.env.NODE_ENV !== 'production',
//   state: {
//     news: [],
//     ask: [],
//     jobs: [],
//     user: {},
//     item: {},
//     list: [],
//   },
//   getters,
//   mutations,
//   actions,
// })
