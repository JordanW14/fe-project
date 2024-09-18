import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Card from "react-bootstrap/Card"
import { getArticle, getArticleComments } from "../api"

const SingleArticle = () => {

    const { article_id } = useParams()

    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    
    useEffect(() => {
        getArticle(article_id)
        .then((article) => {
            setArticle(article)
        })
        getArticleComments(article_id)
        .then((comments) => {
            setComments(comments);
        });
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
                <Card.Text>Votes: {article.votes}</Card.Text>
                <Card.Text>{article.body}</Card.Text>
            </Card.Body>
        </Card>
            <div>
            <h2 className="commentsContainer">Comments</h2>
            {comments.length === 0 ? (
                <p>No comments</p>
                ) : (
                comments.map((comment) => (
                <>
                <Card.Body className="commentsContainer">
                <div key={comment.comment_id}>
                    <p>Comment by: {comment.author}</p>
                    <p>{comment.body}</p>
                </div>
                </Card.Body>
                </>
                ))
            )}
            </div>
        </div>
        </>
    )
}

export default SingleArticle 