import { RootState } from "@/store/state";

const getters = {
  fetchedNews(state: RootState) {
    return state.news;
  },
};

type Getters = typeof getters;

export { getters, Getters };
