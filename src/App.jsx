import SignSpark from "./Components/Home/Home"
import StartLearning from "./Components/Start/Start"
import EmojiMatchGame from "./Components/Memory/Memory"
import SignLanguageTutorial from "./Components/Tutorial/Tutorial"
import SignLanguageQuiz from "./Components/Quiz/Quiz"
import { useState, useEffect } from "react"

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Initialize page from URL on load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page') || 'home';
    setCurrentPage(page);
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      const page = event.state?.page || 'home';
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    // Update browser history
    const url = page === 'home' ? '/' : `/?page=${page}`;
    window.history.pushState({ page }, '', url);
  };

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'home':
        return <SignSpark onNavigate={navigateTo} />;
      case 'start':
        return <StartLearning onNavigate={navigateTo} />;
      case 'tutorial':
        return <SignLanguageTutorial onNavigate={navigateTo} />;
      case 'memory':
        return <EmojiMatchGame onNavigate={navigateTo} />;
      case 'quiz':
        return <SignLanguageQuiz onNavigate={navigateTo} />;
      default:
        return <SignSpark onNavigate={navigateTo} />;
    }
  };

  return (
    <>
      {renderCurrentPage()}
    </>
  );
}

export default App;