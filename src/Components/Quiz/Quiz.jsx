import React, { useState } from 'react';

const quizData = [
  {
    question: "What does this sign (✌) represent?",
    options: ["Peace", "Love", "A", "Victory"],
    answer: "Peace"
  },
  {
    question: "What letter is represented by a fist (👊) in ASL?",
    options: ["A", "B", "E", "S"],
    answer: "A"
  },
  {
    question: "The sign for 'Thank You' in ASL starts from where?",
    options: ["Chin", "Forehead", "Chest", "Shoulder"],
    answer: "Chin"
  },
  {
    question: "Which handshape represents the letter 'C' in ASL?",
    options: ["Clawed hand", "Flat hand", "Fist", "Open palm"],
    answer: "Clawed hand"
  },
  {
    question: "What does the sign for 'I love you' look like?",
    options: ["Thumb, index, and pinky extended", "All fingers up", "Peace sign", "Only thumb up"],
    answer: "Thumb, index, and pinky extended"
  },
  {
    question: "How do you sign 'Hello' in ASL?",
    options: ["Wave your hand", "Point upward", "Tap your chest", "Make a fist"],
    answer: "Wave your hand"
  },
  {
    question: "What does the letter 'B' look like in ASL?",
    options: ["Four fingers up, thumb folded", "All fingers closed", "Pointing finger", "Open palm"],
    answer: "Four fingers up, thumb folded"
  },
  {
    question: "The sign for 'Please' in ASL involves:",
    options: ["Rubbing chest in circular motion", "Tapping forehead", "Pointing down", "Clapping hands"],
    answer: "Rubbing chest in circular motion"
  },
  {
    question: "How do you sign 'Yes' in ASL?",
    options: ["Nod fist up and down", "Thumbs up", "Point to yourself", "Shake head"],
    answer: "Nod fist up and down"
  },
  {
    question: "What does the letter 'F' look like in ASL?",
    options: ["Index and thumb touching, other fingers up", "All fingers down", "Peace sign", "Pointing finger"],
    answer: "Index and thumb touching, other fingers up"
  },
  {
    question: "The sign for 'Sorry' in ASL is made by:",
    options: ["Making a fist and rubbing chest", "Pointing down", "Waving both hands", "Touching forehead"],
    answer: "Making a fist and rubbing chest"
  },
  {
    question: "How do you sign 'Water' in ASL?",
    options: ["W handshape touching chin", "Cupping hands", "Pointing to mouth", "Making waves"],
    answer: "W handshape touching chin"
  },
  {
    question: "The letter 'L' in ASL is formed by:",
    options: ["Thumb and index finger forming L shape", "Closed fist", "All fingers up", "Pointing finger"],
    answer: "Thumb and index finger forming L shape"
  },
  {
    question: "How do you sign 'Good' in ASL?",
    options: ["Flat hand from chin moving forward", "Thumbs up", "Clapping", "Pointing up"],
    answer: "Flat hand from chin moving forward"
  },
  {
    question: "What does the sign for 'Family' involve?",
    options: ["F handshapes making a circle", "Pointing to everyone", "Hugging motion", "Holding hands"],
    answer: "F handshapes making a circle"
  }
];

export default function SignLanguageQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [answerSelected, setAnswerSelected] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuizData, setShuffledQuizData] = useState(() => {
    // Shuffle questions and their options
    const shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5).slice(0, 5);
    return shuffledQuestions.map(quiz => ({
      ...quiz,
      options: [...quiz.options].sort(() => Math.random() - 0.5)
    }));
  });

  const currentQuiz = shuffledQuizData[currentQuestion];

  const handleAnswerSelect = (option) => {
    if (answerSelected) return;
    
    setSelectedAnswer(option);
    setAnswerSelected(true);
    
    if (option === currentQuiz.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < shuffledQuizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setAnswerSelected(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    // Shuffle questions and their options when restarting
    const shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5).slice(0, 5);
    const newShuffledData = shuffledQuestions.map(quiz => ({
      ...quiz,
      options: [...quiz.options].sort(() => Math.random() - 0.5)
    }));
    
    setShuffledQuizData(newShuffledData);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer('');
    setAnswerSelected(false);
    setShowResult(false);
  };

  const getOptionStyle = (option) => {
    if (!answerSelected) {
      return "bg-purple-100 border-purple-200 hover:bg-purple-200 text-purple-800";
    }
    
    if (option === currentQuiz.answer) {
      return "bg-green-100 border-green-400 text-green-800";
    } else if (option === selectedAnswer) {
      return "bg-red-100 border-red-400 text-red-800";
    } else {
      return "bg-purple-100 border-purple-200 text-purple-800";
    }
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-purple-100 flex items-center justify-center p-4">
        <div className="bg-white/90 p-8 rounded-2xl w-full max-w-md shadow-lg border-2 border-purple-200">
          <h1 className="text-2xl font-bold text-center mb-6 text-purple-700">
            Sign Language Quiz
          </h1>
          <div className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <div className="text-xl text-purple-900 mb-6">
              You got <strong className="text-purple-700">{score}</strong> out of{' '}
              <strong className="text-purple-700">{shuffledQuizData.length}</strong> correct!
            </div>
            <button
              onClick={resetQuiz}
              className="bg-purple-700 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-purple-600 transition-colors duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center p-4">
      <div className="bg-white/90 p-8 rounded-2xl w-full max-w-md shadow-lg border-2 border-purple-200">
        <h1 className="text-2xl font-bold text-center mb-6 text-purple-700">
          Sign Language Quiz
        </h1>
        
        <div className="mb-4 text-sm text-purple-600 text-center">
          Question {currentQuestion + 1} of {shuffledQuizData.length}
        </div>

        <div className="text-lg mb-6 text-purple-900">
          {currentQuiz.question}
        </div>

        <ul className="space-y-3 mb-6">
          {currentQuiz.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 ${getOptionStyle(option)} ${
                answerSelected ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              {option}
            </li>
          ))}
        </ul>

        <button
          onClick={handleNext}
          disabled={!answerSelected}
          className="w-full bg-purple-700 text-white py-3 px-6 rounded-lg text-base font-medium transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-purple-600 disabled:hover:bg-gray-400"
        >
          {currentQuestion + 1 === shuffledQuizData.length ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}