import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleComments, deleteComment } from "../api";
import Card from "react-bootstrap/Card";
import AddComment from "./AddComment";

const Comments = () => {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);
    const [currentUsername, setCurrentUsername] = useState("");

    useEffect(() => {
        getArticleComments(article_id)
            .then((comments) => {
                setComments(comments);
            });
    }, [article_id]);

    const handleNewComment = (newComment) => {
        setComments((existingComments) => [newComment, ...existingComments]);
        setCurrentUsername(newComment.author);
    };

    const handleDeleteComment = (comment_id) => {
        deleteComment(comment_id)
            .then(() => {
                setComments((prevComments) => prevComments.filter(comment => comment.comment_id !== comment_id));
            });
    };

    return (
        <div>
            <AddComment article_id={article_id} onNewComment={handleNewComment} onUsernameChange={setCurrentUsername}/>
            {comments.length === 0 ? (
                <p>No comments</p>
            ) : (
                comments.map((comment) => (
                    <Card.Body className="commentsContainer" key={comment.comment_id}>
                        <div>
                            <p>Comment by: {comment.author}</p>
                            <p>{comment.body}</p>
                            {comment.author === currentUsername && (
                                <button className="deleteButton" onClick={() => handleDeleteComment(comment.comment_id)}>
                                    Delete
                                </button>
                            )}
                        </div>
                    </Card.Body>
                ))
            )}
        </div>
    );
};

export default Comments;