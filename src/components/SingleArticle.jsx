import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Card from "react-bootstrap/Card"
import { getArticle } from "../api"
import Comments from "./Comments"
import Votes from "./Votes"

const SingleArticle = () => {

    const { article_id } = useParams()

    const [article, setArticle] = useState({})
    
    useEffect(() => {
        getArticle(article_id)
        .then((article) => {
            setArticle(article)
        })
    }, [article_id])

    return (
        <>
        <div className="articlesContainer">
        <Card style={{ width: "18rem" }} className="Article">
            <Card.Img variant="top" src={article.article_img_url} />
            <Card.Body>
                <Card.Title>{<h1>{article.title}</h1>}</Card.Title>
                <Card.Text>Topic: {article.topic}</Card.Text>
                <Card.Text>Written By {article.author}</Card.Text>
                <Card.Text>{article.body}</Card.Text>
                <Votes article_id={article.article_id} votes={article.votes}/>
            </Card.Body>
        </Card>
            <Comments/>
        </div>
        </>
    )
}

export default SingleArticle 