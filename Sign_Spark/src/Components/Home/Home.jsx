import React, { useState, useEffect, useRef } from 'react';
import { Hand, Menu, X, BrainCircuit, CheckSquare, Award, BookOpen } from 'lucide-react';

const SignSpark = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const featuresRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-5');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-purple-400">
      <Icon className="w-8 h-8 text-purple-300 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-purple-700 to-purple-600 sticky top-0 z-50 shadow-lg shadow-black/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-purple-300 to-purple-400 p-3 rounded-xl flex items-center justify-center">
                <Hand className="w-7 h-7 text-purple-900" />
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-purple-100 to-purple-300 bg-clip-text text-transparent">
                SignSpark
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="font-medium text-gray-100 hover:text-purple-200 transition-colors px-2 py-1">
                Features
              </a>
              <a href="#" className="font-medium text-gray-100 hover:text-purple-200 transition-colors px-2 py-1">
                Lessons
              </a>
              <a href="#" className="font-medium text-gray-100 hover:text-purple-200 transition-colors px-2 py-1">
                About
              </a>
               <button 
                  onClick={() => onNavigate('start')}
                  className="bg-gradient-to-r from-purple-300 to-purple-400 text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg hover:shadow-purple-300/40 transition-all duration-300 w-full"
                >
                  Get Started
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-white/10 bg-black/95 rounded-lg">
              <div className="flex flex-col space-y-4 px-4">
                <a href="#" className="font-medium text-gray-100 hover:text-purple-200 transition-colors py-3 border-b border-white/10">
                  Features
                </a>
                <a href="#" className="font-medium text-gray-100 hover:text-purple-200 transition-colors py-3 border-b border-white/10">
                  Lessons
                </a>
                <a href="#" className="font-medium text-gray-100 hover:text-purple-200 transition-colors py-3 border-b border-white/10">
                  About
                </a>
                 <button 
                  onClick={() => onNavigate('start')}
                  className="bg-gradient-to-r from-purple-300 to-purple-400 text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg hover:shadow-purple-300/40 transition-all duration-300 w-full"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-purple-300 font-semibold mb-4 text-lg">
          Learn Sign Language Faster
        </p>
        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
          Spark Your{' '}
          <span className="bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">
            Sign Language
          </span>{' '}
          Journey
        </h1>
        <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Master Sign Language with interactive lessons, real-time feedback, and a supportive environment.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          
          <button 
            onClick={() => onNavigate('start')}
            className="bg-gradient-to-r from-purple-300 to-purple-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-purple-300/40 hover:scale-105 transition-all duration-300"
          >
            Start Learning Free
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresRef}
        className="max-w-6xl mx-auto px-6 py-16 opacity-0 translate-y-5 transition-all duration-1000"
      >
        <h2 className="text-center text-4xl font-black mb-12">
          Why Choose{' '}
          <span className="bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">
            SignSpark?
          </span>
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={BrainCircuit}
            title="Memory Game"
            description="Boost your retention with interactive memory games designed to reinforce sign recall and visual cues."
          />
          <FeatureCard
            icon={CheckSquare}
            title="Quiz-Based Learning"
            description="Test your knowledge with fun quizzes after every lesson to stay sharp and measure your progress."
          />
          <FeatureCard
            icon={Award}
            title="Progress Tracking"
            description="Earn badges, track your fluency, and celebrate milestones on your journey."
          />
          <FeatureCard
            icon={BookOpen}
            title="Structured Curriculum"
            description="Expert-designed plans from basic alphabet to complex conversations."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-950 py-12 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-purple-300 to-purple-400 p-3 rounded-xl flex items-center justify-center">
              <Hand className="w-6 h-6 text-purple-900" />
            </div>
            <span className="text-3xl font-black bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">
              SignSpark
            </span>
          </div>
          <p className="text-gray-300 mb-6">
            Empowering communication through sign language education
          </p>
          <div className="flex justify-center gap-6 flex-wrap mb-8">
            <a href="#" className="text-gray-300 hover:text-purple-300 hover:underline transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-300 hover:underline transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-300 hover:underline transition-colors">
              Support
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-300 hover:underline transition-colors">
              Contact
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 SignSpark. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default SignSpark;