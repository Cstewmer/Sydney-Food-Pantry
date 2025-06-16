import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    // Set the page title
    document.title = "Sydney Food Pantry - Nutrition Booklet"
  }, [])

  return (
    <div className="pdf-container">
      <iframe
        src="nutrition-booklet.pdf"
        title="Nutrition Booklet"
        width="100%"
        height="100%"
      />
    </div>
  )
}

export default App
