import { NewsItem } from "@/api";

const state = {
  news: [] as NewsItem[],
  token: String,
};

type RootState = typeof state;

export { state, RootState };
