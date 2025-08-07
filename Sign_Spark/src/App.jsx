import SignSpark from "./Components/Home/Home" 
import StartLearning from "./Components/Start/Start"
import EmojiMatchGame from "./Components/Memory/Memory"
import SignLanguageTutorial from "./Components/Tutorial/Tutorial"
import SignLanguageQuiz from "./Components/Quiz/Quiz"
import { useState } from "react"
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
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