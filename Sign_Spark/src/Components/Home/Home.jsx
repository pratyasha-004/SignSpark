import React, { useState, useEffect, useRef } from 'react';
import { Hand, Menu, X, BrainCircuit, CheckSquare, Award, BookOpen, Play, Users, Heart, Target } from 'lucide-react';

const SignSpark = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const featuresRef = useRef(null);
  const lessonsRef = useRef(null);
  const aboutRef = useRef(null);

  // Smooth scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

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

    const refs = [featuresRef, lessonsRef, aboutRef];
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

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

  const LessonCard = ({ level, title, description, lessons }) => (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-purple-400">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <span className="bg-purple-400 text-purple-900 px-3 py-1 rounded-full text-sm font-semibold">
          {level}
        </span>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <p className="text-purple-300 font-semibold">{lessons} lessons</p>
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
              <button 
                onClick={() => scrollToSection(featuresRef)}
                className="font-medium text-gray-100 hover:text-purple-200 transition-colors px-2 py-1"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection(lessonsRef)}
                className="font-medium text-gray-100 hover:text-purple-200 transition-colors px-2 py-1"
              >
                Lessons
              </button>
              <button 
                onClick={() => scrollToSection(aboutRef)}
                className="font-medium text-gray-100 hover:text-purple-200 transition-colors px-2 py-1"
              >
                About
              </button>
              <button 
                onClick={() => onNavigate('start')}
                className="bg-gradient-to-r from-purple-300 to-purple-400 text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg hover:shadow-purple-300/40 transition-all duration-300"
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
                <button 
                  onClick={() => scrollToSection(featuresRef)}
                  className="font-medium text-gray-100 hover:text-purple-200 transition-colors py-3 border-b border-white/10 text-left"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection(lessonsRef)}
                  className="font-medium text-gray-100 hover:text-purple-200 transition-colors py-3 border-b border-white/10 text-left"
                >
                  Lessons
                </button>
                <button 
                  onClick={() => scrollToSection(aboutRef)}
                  className="font-medium text-gray-100 hover:text-purple-200 transition-colors py-3 border-b border-white/10 text-left"
                >
                  About
                </button>
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
        <h2 className="text-center text-4xl font-black mb-4">
          Why Choose{' '}
          <span className="bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">
            SignSpark?
          </span>
        </h2>
        <p className="text-center text-gray-300 text-xl mb-12 max-w-3xl mx-auto">
          Our innovative learning platform combines cutting-edge technology with proven educational methods
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={BrainCircuit}
            title="Memory Games"
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
            description="Earn badges, track your fluency, and celebrate milestones on your journey to mastery."
          />
          <FeatureCard
            icon={BookOpen}
            title="Structured Curriculum"
            description="Expert-designed learning paths from basic alphabet to complex conversations and cultural nuances."
          />
        </div>
      </section>

      {/* Lessons Section */}
      <section 
        ref={lessonsRef}
        className="max-w-6xl mx-auto px-6 py-16 opacity-0 translate-y-5 transition-all duration-1000"
      >
        <h2 className="text-center text-4xl font-black mb-4">
          Learning{' '}
          <span className="bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">
            Paths
          </span>
        </h2>
        <p className="text-center text-gray-300 text-xl mb-12 max-w-3xl mx-auto">
          Choose your learning journey based on your current skill level and goals
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <LessonCard
            level="Beginner"
            title="Foundations"
            description="Start with the basics: alphabet, numbers, and essential everyday signs."
            lessons="3"
          />
          <LessonCard
            level="Intermediate"
            title="Conversations"
            description="Learn to form sentences, ask questions, and engage in basic conversations."
            lessons="2"
          />
          <LessonCard
            level="Advanced"
            title="Fluency"
            description="Master complex expressions, cultural context, and advanced communication skills."
            lessons="2"
          />
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef}
        className="max-w-6xl mx-auto px-6 py-16 opacity-0 translate-y-5 transition-all duration-1000"
      >
        <h2 className="text-center text-4xl font-black mb-4">
          About{' '}
          <span className="bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">
            SignSpark
          </span>
        </h2>
        <p className="text-center text-gray-300 text-xl mb-12 max-w-3xl mx-auto">
          Empowering communication and breaking down barriers through accessible sign language education
        </p>
        
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-16">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-300 to-purple-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Inclusive Learning</h3>
            <p className="text-gray-300">
              Our platform is designed for everyone - whether you're deaf, hard of hearing, or simply want to learn a beautiful language.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-300 to-purple-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-purple-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Community Driven</h3>
            <p className="text-gray-300">
              Built with input from the deaf and hard of hearing community to ensure authentic, respectful, and effective learning.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-300 to-purple-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-purple-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Goal Focused</h3>
            <p className="text-gray-300">
              From casual conversation to professional interpretation, we help you achieve your specific communication goals.
            </p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            At SignSpark, we believe that communication is a fundamental human right. Our mission is to make 
            sign language learning accessible, engaging, and effective for everyone. Through innovative technology, 
            interactive learning methods, and a supportive community, we're building bridges between the hearing 
            and deaf communities, one sign at a time.
          </p>
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
            © 2025 SignSpark by Pratyasha.
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
