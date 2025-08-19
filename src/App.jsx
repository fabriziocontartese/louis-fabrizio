import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BookPage from './pages/BookPage'
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
          <Route path="/recipes/:Meal_ID" element={<RecipePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
