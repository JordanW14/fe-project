import { Routes, Route } from "react-router-dom"
import Header from "./components/Header.jsx"
import ArticlesList from "./components/ArticlesList.jsx"
import SingleArticle from "./components/SingleArticle.jsx"
import Homepage from "./components/Homepage.jsx"
import { UserProvider } from "./components/Username.jsx"

function App() {
  return (
    <UserProvider>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
    </UserProvider>
  );
}

export default App;