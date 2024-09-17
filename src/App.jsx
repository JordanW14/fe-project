import { Routes, Route } from "react-router-dom"
import Header from "./components/Header.jsx"
import ArticlesList from './components/ArticlesList.jsx'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<ArticlesList />}/>
        
      </Routes>
    </div>
  )
}

export default App