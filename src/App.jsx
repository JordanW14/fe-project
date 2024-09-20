import { Routes, Route } from "react-router-dom"
import Header from "./components/Header.jsx"
import ArticlesList from "./components/ArticlesList.jsx"
import SingleArticle from "./components/SingleArticle.jsx"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;