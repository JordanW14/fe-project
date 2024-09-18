import { useEffect, useState } from "react"

import Card from "react-bootstrap/Card"

import { getArticles } from "../api"


const ArticlesList = () => {

const [articles, setArticles] = useState([])

useEffect(() => {
    getArticles()
    .then((data) => {
      setArticles(data);
    });
  }, []);
console.log(articles)
return (
  <>
    {articles.map((article) => (
      <Card key={article.id} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={article.article_img_url} />
        <Card.Body>
          <Card.Title className="articleText">{article.title}</Card.Title>
          <Card.Text className="articleText">{article.description}</Card.Text>
          <Card.Text style={{ color: "black" }}>Article By {article.author}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  </>
)};

export default ArticlesList;