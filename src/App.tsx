import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set the page title
    document.title = "Sydney Food Pantry - Nutrition Booklet"

    // Check if the device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="pdf-container">
      {isMobile ? (
        <div className="mobile-message">
          <h2>Nutrition Booklet</h2>
          <p>For the best viewing experience, please:</p>
          <ol>
            <li>Open this page on a desktop or laptop computer</li>
            <li>Or download the PDF to view on your mobile device</li>
          </ol>
          <a 
            href="nutrition-booklet.pdf" 
            download 
            className="download-button"
          >
            Download PDF
          </a>
        </div>
      ) : (
        <iframe
          src="nutrition-booklet.pdf"
          title="Nutrition Booklet"
          width="100%"
          height="100%"
        />
      )}
    </div>
  )
}

export default App
