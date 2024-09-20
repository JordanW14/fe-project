import { useState, useEffect } from "react";
import { postComment, getUsernames } from "../api";

const AddComment = ({ article_id, onNewComment }) => {
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");
  const [validUsernames, setValidUsernames] = useState([]);
  const [isValidUser, setIsValidUser] = useState(false);

  useEffect(() => {
    getUsernames()
      .then((usernames) => {
        setValidUsernames(usernames);
      });
  }, []);

  const handleUsernameChange = (e) => {
    const enteredUsername = e.target.value;
    setUsername(enteredUsername);
    if (validUsernames.includes(enteredUsername)) {
      setIsValidUser(true);
    } else {
      setIsValidUser(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidUser) {
      postComment(username, article_id, comment)
        .then((newComment) => {
          setComment("");
          setUsername("");
          setIsValidUser(false);
          onNewComment(newComment)
        });
    }
  };

  return (
    <div className="commentsContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please enter username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        
        <textarea
          placeholder="Comment here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        
        <button type="submit" disabled={!isValidUser}>
        {isValidUser ? "Post comment" : "Enter username to comment"}
        </button>
      </form>
    </div>
  );
};

export default AddComment;