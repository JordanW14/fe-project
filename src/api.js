import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://be-project-gcrn.onrender.com/api",
});

export const getArticles = () => {
  return ncNews.get("/articles").then(({ data }) => {
    return data;
  });
};

export const getArticle = (article_id) => {
  return ncNews.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const getArticleComments = (article_id) => {
  return ncNews.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const patchVotes = (article_id) => {
  return ncNews
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then(({ data }) => {
      return data;
    });
};

export const postComment = (username, article_id, body) => {
  return ncNews
    .post(`/articles/${article_id}/comments`, { username, body })
    .then(({ data }) => {
      return data.comment;
    });
};

export const getUsernames = () => {
  return ncNews.get(`/users`).then((res) => {
    const validUsers = res.data;
    const usernames = validUsers.map((validUser) => validUser.username);
    return usernames;
  });
};
