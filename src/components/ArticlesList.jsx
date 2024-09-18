import { useEffect, useState } from "react"

import Card from "react-bootstrap/Card"

import { getArticles } from "../api"

import { Link } from 'react-router-dom'


const ArticlesList = () => {

const [articles, setArticles] = useState([])

useEffect(() => {
    getArticles()
    .then((data) => {
      setArticles(data);
    });
  }, []);

return (
  <>
  <div className="articlesContainer">
    {articles.map((article) => (
      <Card key={article.id} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={article.article_img_url} />
        <Card.Body>
        <Link to={`/articles/${article.article_id}`}>
            <Card.Title className="articleText">{article.title}</Card.Title>
          </Link>
          <Card.Text className="articleText">{article.description}</Card.Text>
          <Card.Text style={{ color: "black" }}>Article By {article.author}</Card.Text>
        </Card.Body>
      </Card>
    ))}
    </div>
  </>
)};

export default ArticlesList;