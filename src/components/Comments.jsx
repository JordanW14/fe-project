import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getArticleComments } from "../api"
import Card from "react-bootstrap/Card"

const Comments = () => {

const { article_id } = useParams()

const [comments, setComments] = useState([])

useEffect(() => {
    getArticleComments(article_id)
        .then((comments) => {
            setComments(comments);
        });
        }, [article_id])

    return(
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
    )
}

export default Comments