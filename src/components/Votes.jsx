import { useState } from "react"
import { patchVotes } from "../api"

const Votes = ({ article_id, votes }) => {

    
    const [articleVotes, setArticleVotes] = useState(0)
    
    const handleVote = () => {
        setArticleVotes((articleVotes) => articleVotes + 1)
        patchVotes(article_id)
    }
    console.log(votes, "<==votes")
    
    return (
      <div>
        <h2>Current votes: {votes+articleVotes}</h2>
        <button onClick={handleVote}>
          +1 Vote
        </button>
      </div>
    )
  }
  
  export default Votes