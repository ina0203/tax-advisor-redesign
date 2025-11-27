import React, { useState } from 'react'
import LandingPage from './components/LandingPage'
import EnhancedReceiptFinancePlatform from './components/EnhancedReceiptFinancePlatform'

function App() {
  const [currentView, setCurrentView] = useState('landing') // 'landing' or 'app'

  const handleGetStarted = () => {
    setCurrentView('app')
  }

  const handleBackToLanding = () => {
    setCurrentView('landing')
  }

  return (
    <div>
      {currentView === 'landing' ? (
        <LandingPage onGetStarted={handleGetStarted} />
      ) : (
        <div>
          <div className="fixed top-4 left-4 z-50">
            <button
              onClick={handleBackToLanding}
              className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200"
            >
              ← 랜딩 페이지로
            </button>
          </div>
          <EnhancedReceiptFinancePlatform />
        </div>
      )}
    </div>
  )
}

export default App

