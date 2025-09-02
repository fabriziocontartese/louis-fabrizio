import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BookPage from './pages/BookPage'
import NewRecipePage from './pages/NewRecipePage'
import RecipePage from './pages/RecipePage'
import AboutPage from './pages/AboutPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<BookPage />} />
          <Route path="/recipes/:mealId" element={<RecipePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/new-recipe" element={<NewRecipePage />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
