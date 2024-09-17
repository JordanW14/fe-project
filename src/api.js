import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://be-project-gcrn.onrender.com/api",
});

export const getArticles = (article_id) => {
  return ncNews
  .get("/articles")
  .then(({data}) => {
    return data
  })
}
