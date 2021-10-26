import { RootState, state } from "@/store/state";
import { news } from "@/api/instance/index-instance";
import { NewsItem } from "@/api";

enum MutationTypes {
  SET_TOKEN = "SET_TOKEN",
  SET_NEWS = "SET_NEWS",
}

const mutations = {
  [MutationTypes.SET_TOKEN](state: RootState, token: string) {
    state.token = token;
  },
  [MutationTypes.SET_NEWS](state: RootState, news: NewsItem[]) {
    state.news = news;
  },
};

type Mutations = typeof mutations;

export { MutationTypes, mutations, Mutations };

// export default {
//   SET_NEWS(state, news) {
//     state.news = news;
//   },
//   SET_ASK(state, ask) {
//     state.ask = ask;
//   },
//   SET_JOBS(state, jobs) {
//     state.jobs = jobs;
//   },
//   SET_USER(state, user) {
//     state.user = user;
//   },
//   SET_ITEM(state, item) {
//     state.item = item;
//   },
//   SET_LIST(state, list) {
//     state.list = list;
//   },
// };
