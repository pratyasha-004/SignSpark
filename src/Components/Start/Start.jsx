import React, { useEffect, useState } from 'react';
import { BookOpen, BrainCircuit, CheckSquare, ArrowLeft } from 'lucide-react';

const StartLearning = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation
    setIsVisible(true);
  }, []);

  const LearningCard = ({ icon: Icon, title, description, href, onClick,delay = 0 }) => (
    // <a 
    //   href={href} 
    //   className="block w-full max-w-xs"
    //   style={{ animationDelay: `${delay}ms` }}
    // >
    <div 
      className="block w-full max-w-xs cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div className="group bg-white border-2 border-purple-200 rounded-2xl p-8 w-full transition-all duration-300 cursor-pointer shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2 hover:scale-105 hover:border-purple-300 relative overflow-hidden">
        {/* Subtle background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-purple-100/0 group-hover:from-purple-50/30 group-hover:to-purple-100/20 transition-all duration-300 rounded-2xl"></div>
        
        <div className="relative z-10">
          <Icon className="w-11 h-11 text-purple-600 mb-4 mx-auto transition-all duration-300 group-hover:scale-120 group-hover:text-purple-500" />
          <h2 className="text-2xl font-semibold mb-2 text-indigo-900">
            {title}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    {/* </a> */}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-25 to-violet-50 text-indigo-900 flex flex-col">
      <div 
        className={`max-w-4xl mx-auto px-8 py-8 text-center flex-1 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-3 leading-tight">
          Let's Begin Learning!
        </h1>
        <p className="text-purple-700 text-xl mb-10 font-medium">
          Choose a fun way to explore sign language and boost your skills! 👋
        </p>

        <div className="flex flex-wrap gap-8 justify-center mt-8">
          <LearningCard
            icon={BookOpen}
            title="Tutorials"
            description="Explore flashcards in Hindi & English to learn signs step-by-step."
            onClick={() => onNavigate('tutorial')}
            delay={100}
          />
          <LearningCard
            icon={BrainCircuit}
            title="Memory Game"
            description="Sharpen your memory by matching sign cards with meanings."
            // href="#"
             onClick={() => onNavigate('memory')}
            delay={200}
          />
          <LearningCard
            icon={CheckSquare}
            title="Quiz"
            description="Test yourself with quizzes and track how much you've learned."
            // href="#"
            onClick={() => onNavigate('quiz')}
            delay={300}
          />
        </div>

        <button 
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 mt-8 text-purple-600 hover:text-purple-700 font-medium text-lg underline decoration-2 underline-offset-4 hover:underline-offset-8 transition-all duration-300 bg-transparent border-none cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>
      </div>

      <footer className="text-center py-8 bg-purple-100/50 text-purple-700 font-medium">
        © 2025 SignSpark. Keep learning and signing 💜
      </footer>

      <style jsx>{`
        @keyframes gentle-bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        
        .animate-gentle-bounce {
          animation: gentle-bounce 2s ease-in-out infinite;
        }

        @keyframes scale-120 {
          to { transform: scale(1.2); }
        }

        .group:hover .group-hover\\:scale-120 {
          animation: scale-120 0.3s ease forwards;
        }

        /* Custom background gradient */
        .bg-gradient-to-br.from-purple-50.via-purple-25.to-violet-50 {
          background: linear-gradient(145deg, #fdf4ff, #ede9fe, #f5f3ff);
        }
      `}</style>
    </div>
  );
};

export default StartLearning;