import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://be-project-gcrn.onrender.com/api",
});

export const getArticles = () => {
  return ncNews
  .get("/articles")
  .then(({data}) => {
    return data
  })
}

export const getArticle = (article_id) => {
  return ncNews
  .get(`/articles/${article_id}`)
  .then(({data}) => {
    return data
  })
}