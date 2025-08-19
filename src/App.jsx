import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RecipesPage from './pages/RecipesPage'
import RecipePage from './pages/RecipePage'
import AboutPage from './pages/AboutPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<RecipesPage />} />
          <Route path="/recipes/:mealId" element={<RecipePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
