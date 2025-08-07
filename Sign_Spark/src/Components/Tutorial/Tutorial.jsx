import React, { useState, useEffect } from 'react';

const SignLanguageTutorial = () => {
  const lessons = [
    {
      id: 1,
      title: "Complete Alphabet A-Z",
      description: "Learn the full ASL alphabet from A to Z",
      difficulty: "beginner",
      signs: [
        { letter: 'A', description: 'Make a fist with thumb on the side', handPosition: '✊' },
        { letter: 'B', description: 'Four fingers up, thumb across palm', handPosition: '✋' },
        { letter: 'C', description: 'Curved hand like holding a cup', handPosition: '🤏' },
        { letter: 'D', description: 'Index finger up, thumb and middle finger touch', handPosition: '👆' },
        { letter: 'E', description: 'Fingers curved down touching thumb', handPosition: '✊' },
        { letter: 'F', description: 'Index and thumb touch, other fingers up', handPosition: '👌' },
        { letter: 'G', description: 'Index finger and thumb horizontal', handPosition: '👉' },
        { letter: 'H', description: 'Two fingers horizontal', handPosition: '✌️' },
        { letter: 'I', description: 'Pinky finger up, fist closed', handPosition: '🤙' },
        { letter: 'J', description: 'Pinky finger draws a J shape', handPosition: '🤙' },
        { letter: 'K', description: 'Index and middle up, thumb between them', handPosition: '✌️' },
        { letter: 'L', description: 'Index up, thumb out at right angle', handPosition: '👌' },
        { letter: 'M', description: 'Thumb under first three fingers', handPosition: '✊' },
        { letter: 'N', description: 'Thumb under first two fingers', handPosition: '✊' },
        { letter: 'O', description: 'All fingers curved touching thumb', handPosition: '👌' },
        { letter: 'P', description: 'Like K but pointing down', handPosition: '✌️' },
        { letter: 'Q', description: 'Like G but pointing down', handPosition: '👉' },
        { letter: 'R', description: 'Index and middle crossed', handPosition: '🤞' },
        { letter: 'S', description: 'Fist with thumb over fingers', handPosition: '✊' },
        { letter: 'T', description: 'Thumb between index and middle', handPosition: '✊' },
        { letter: 'U', description: 'Index and middle up together', handPosition: '✌️' },
        { letter: 'V', description: 'Index and middle up, separated', handPosition: '✌️' },
        { letter: 'W', description: 'Index, middle, and ring up', handPosition: '🤟' },
        { letter: 'X', description: 'Index finger curved like hook', handPosition: '☝️' },
        { letter: 'Y', description: 'Thumb and pinky extended', handPosition: '🤙' },
        { letter: 'Z', description: 'Index finger draws Z shape', handPosition: '☝️' }
      ]
    },
    {
      id: 2,
      title: "Greetings & Expressions",
      description: "Essential greetings, expressions, and polite phrases",
      difficulty: "beginner",
      signs: [
        { letter: 'Hello', description: 'Wave hand from forehead outward', handPosition: '👋' },
        { letter: 'Hi', description: 'Simple wave with open hand', handPosition: '👋' },
        { letter: 'Good Morning', description: 'Sunrise motion with both hands', handPosition: '🌅' },
        { letter: 'Good Afternoon', description: 'Sun overhead motion', handPosition: '☀️' },
        // { letter: 'Good Evening', description: 'Sun setting motion', handPosition: '🌇' },
        { letter: 'Good Night', description: 'Moon and sleep gesture', handPosition: '🌙' },
        { letter: 'Thank You', description: 'Fingers to chin, move forward', handPosition: '🙏' },
        { letter: 'Please', description: 'Flat hand circular motion on chest', handPosition: '🤲' },
        { letter: 'Sorry', description: 'Fist circular motion on chest', handPosition: '✊' },
        { letter: 'Excuse Me', description: 'Brushing motion with fingertips', handPosition: '🤲' },
        { letter: 'You\'re Welcome', description: 'Open hand moving forward', handPosition: '🤲' },
        { letter: 'How Are You?', description: 'Pointing then questioning gesture', handPosition: '🤷' },
        { letter: 'Fine', description: 'Thumb to chest, confident gesture', handPosition: '👍' },
        { letter: 'Nice to Meet You', description: 'Handshake motion', handPosition: '🤝' },
        { letter: 'Goodbye', description: 'Wave hand side to side', handPosition: '👋' },
        { letter: 'See You Later', description: 'Point to eye, then wave', handPosition: '👀' },
        { letter: 'Yes', description: 'Nod with fist up and down', handPosition: '✊' },
        { letter: 'No', description: 'Index and middle snap together', handPosition: '✌️' },
        { letter: 'I Love You', description: 'I, L, Y handshape combined', handPosition: '🤟' },
        { letter: 'Help', description: 'Fist on open palm, lift up', handPosition: '🤲' }
      ]
    },
    {
      id: 3,
      title: "Numbers 1-20",
      description: "Learn to count from 1 to 20 in sign language",
      difficulty: "beginner",
      signs: [
        { letter: '1', description: 'Index finger up', handPosition: '☝️' },
        { letter: '2', description: 'Index and middle finger up', handPosition: '✌️' },
        { letter: '3', description: 'Thumb, index, and middle finger up', handPosition: '🤟' },
        { letter: '4', description: 'Four fingers up, thumb tucked', handPosition: '🖖' },
        { letter: '5', description: 'All fingers extended', handPosition: '✋' },
        { letter: '6', description: 'Thumb and pinky touch, others up', handPosition: '🤟' },
        { letter: '7', description: 'Thumb and ring finger touch', handPosition: '🤟' },
        { letter: '8', description: 'Thumb and middle finger touch', handPosition: '🤟' },
        { letter: '9', description: 'Thumb and index finger touch', handPosition: '👌' },
        { letter: '10', description: 'Thumb up, shake side to side', handPosition: '👍' },
        { letter: '11', description: 'Flick index finger twice', handPosition: '☝️' },
        { letter: '12', description: 'Flick index and middle finger', handPosition: '✌️' },
        { letter: '13', description: 'Flick index, middle, ring finger', handPosition: '🤟' },
        { letter: '14', description: 'Flick four fingers', handPosition: '🖖' },
        { letter: '15', description: 'Flick all five fingers', handPosition: '✋' },
        { letter: '16', description: 'Number 10 then 6', handPosition: '👍' },
        { letter: '17', description: 'Number 10 then 7', handPosition: '👍' },
        { letter: '18', description: 'Number 10 then 8', handPosition: '👍' },
        { letter: '19', description: 'Number 10 then 9', handPosition: '👍' },
        { letter: '20', description: 'Show 2 then 0 (fist)', handPosition: '✌️' }
      ]
    },
    {
      id: 4,
      title: "Family & Relationships",
      description: "Signs for family members and relationship terms",
      difficulty: "intermediate",
      signs: [
        { letter: 'Family', description: 'Both hands in F shape, circle around', handPosition: '👪' },
        { letter: 'Mother', description: 'Thumb to chin, then open hand', handPosition: '👩' },
        { letter: 'Father', description: 'Thumb to forehead, then open hand', handPosition: '👨' },
        { letter: 'Sister', description: 'L shape at chin, then index fingers together', handPosition: '👭' },
        { letter: 'Brother', description: 'L shape at forehead, then index fingers together', handPosition: '👬' },
        { letter: 'Daughter', description: 'Girl sign then baby sign', handPosition: '👧' },
        { letter: 'Son', description: 'Boy sign then baby sign', handPosition: '👦' },
        { letter: 'Grandmother', description: 'Mother sign with two bounces', handPosition: '👵' },
        { letter: 'Grandfather', description: 'Father sign with two bounces', handPosition: '👴' },
        { letter: 'Aunt', description: 'A shape near cheek, shake', handPosition: '👩' },
        { letter: 'Uncle', description: 'U shape near temple, shake', handPosition: '👨' },
        { letter: 'Cousin', description: 'C shape at side of head, shake', handPosition: '👫' },
        { letter: 'Friend', description: 'Index fingers hook together twice', handPosition: '👫' },
        { letter: 'Husband', description: 'Boy sign then marriage sign', handPosition: '👨' },
        { letter: 'Wife', description: 'Girl sign then marriage sign', handPosition: '👩' }
      ]
    },
    {
      id: 5,
      title: "Common Phrases",
      description: "Useful everyday phrases in sign language",
      difficulty: "intermediate",
      signs: [
        { letter: 'Where', description: 'Index finger wiggle side to side', handPosition: '👆' },
        { letter: 'When', description: 'Index circles around index', handPosition: '👆' },
        { letter: 'Why', description: 'Touch forehead, then Y shape', handPosition: '🤔' },
        { letter: 'What', description: 'Both hands up, palms up', handPosition: '🤷' },
        { letter: 'Who', description: 'Index finger at chin, bend twice', handPosition: '👤' }
      ]
    },
    {
      id: 6,
      title: "Emotions & Feelings",
      description: "Signs expressing emotions and moods",
      difficulty: "advanced",
      signs: [
        { letter: 'Happy', description: 'Circular motion on chest', handPosition: '😊' },
        { letter: 'Sad', description: 'Fingers down from face', handPosition: '😢' },
        { letter: 'Angry', description: 'Clawed hand from stomach outward', handPosition: '😠' },
        { letter: 'Excited', description: 'Middle fingers circle chest', handPosition: '😄' },
        { letter: 'Love', description: 'Arms across chest', handPosition: '❤️' }
      ]
    },
    {
      id: 7,
      title: "Emergency & Health",
      description: "Signs used in medical or urgent situations",
      difficulty: "advanced",
      signs: [
        { letter: 'Help', description: 'Fist on palm moved upward', handPosition: '🤲' },
        { letter: 'Doctor', description: 'Tapping wrist with fingers', handPosition: '👨‍⚕️' },
        { letter: 'Hospital', description: 'Make an H shape then cross', handPosition: '🏥' },
        { letter: 'Hurt', description: 'Index fingers twist facing each other', handPosition: '🤕' },
        { letter: 'Sick', description: 'Middle fingers touch forehead and stomach', handPosition: '🤒' }
      ]
    }
  ];

  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [currentSignIndex, setCurrentSignIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const [completedSigns, setCompletedSigns] = useState(new Set());
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [failedImages, setFailedImages] = useState(new Set());

  const currentLesson = lessons[currentLessonIndex];
  const currentSign = currentLesson.signs[currentSignIndex];
  const progress = ((currentSignIndex + 1) / currentLesson.signs.length) * 100;

  // Helper function to get media (GIF/PNG/emoji) for sign
  const getSignMedia = (letter, emoji) => {
    // Define which signs should use GIF/PNG instead of emoji
    const mediaMap = {
      // 'A': '/gifs/asl-a.gif',
      // 'B': '/gifs/asl-b.gif', 
      // 'C': '/gifs/asl-c.gif',
      // 'D': '/gifs/asl-d.gif',
      // 'E': '/gifs/asl-e.gif',
      // 'F': '/gifs/asl-f.gif',
      // 'G': '/gifs/asl-g.gif',
      // 'H': '/gifs/asl-h.gif',
      // 'I': '/gifs/asl-i.gif',
      // 'J': '/gifs/asl-j.gif',
      // 'K': '/gifs/asl-k.gif',
      // 'L': '/gifs/asl-l.gif',
      // 'M': '/gifs/asl-m.gif',
      // 'N': '/gifs/asl-n.gif',
      // 'O': '/gifs/asl-o.gif',
      // 'P': '/gifs/asl-p.gif',
      // 'Q': '/gifs/asl-q.gif',
      // 'R': '/gifs/asl-r.gif',
      // 'S': '/gifs/asl-s.gif',
      // 'T': '/gifs/asl-t.gif',
      // 'U': '/gifs/asl-u.gif',
      // 'V': '/gifs/asl-v.gif',
      // 'W': '/gifs/asl-w.gif',
      // 'X': '/gifs/asl-x.gif',
      // 'Y': '/gifs/asl-y.gif',
      // 'Z': '/gifs/asl-z.gif',
      'Hello': '/gifs/hello.gif',
     'Thank You': '/src/gifs/thanku.gif',
     'Good Morning':'/src/gifs/gdmorning.gif',
     'Good Afternoon':'/src/gifs/gdafternoon.gif',
     'Good Night':'/src/gifs/gdnight.gif',
      'Please': '/gifs/please.gif',
      'Sorry': '/gifs/sorry.gif',
      'Help': '/src/gifs/help.gif',
      'Family': '/src/gifs/family.gif',
      'Mother': '/src/gifs/mother.gif',
      'Father': '/src/gifs/father.gif',
      'Sister':'/src/gifs/sister.gif',
      'Brother':'/src/gifs/brother.gif',
      'Daughter':'/src/gifs/daughter.gif',
      'Son':'/src/gifs/son.gif',
      'Grandmother':'/src/gifs/grandma.gif',
      'Grandfather':'/src/gifs/grandpa.gif',
      'Aunt':'/src/gifs/aunt.gif',
      'Uncle':'/src/gifs/uncle.gif',
      'Cousin':'/src/gifs/cousin.gif',
      'Friend':'/src/gifs/friend.gif',
      'Husband':'/src/gifs/husband.gif',
      'Wife':'/src/gifs/wife.gif',
      'Happy': '/src/gifs/happy.gif',
      'Sad': '/src/gifs/sad.gif',
      'Angry':'/src/gifs/angry.gif',
      'Excited':'/src/gifs/excited.gif',
      'Love': '/src/gifs/love.gif',
      'Doctor':'/src/gifs/doctor.gif',
      'Hospital':'/src/gifs/hospital.gif',
      'Hurt':'/src/gifs/hurt.gif',
      'Sick':'/src/gifs/sick.gif',
      'Who':'/src/gifs/who.gif',
    };

    // Return GIF/PNG if available, otherwise return emoji
    return mediaMap[letter] || emoji;
  };

  // Helper function to render sign media
  const renderSignMedia = (letter, emoji, isMainDisplay = true) => {
    const media = getSignMedia(letter, emoji);
    const imageKey = `${letter}-${isMainDisplay ? 'main' : 'thumb'}`;
    
    // If it's not a file path (i.e., it's an emoji), render emoji directly
    if (!media.includes('/gifs/') && !media.includes('/images/')) {
      return <div className={isMainDisplay ? "text-6xl" : ""}>{media}</div>;
    }
    
    // If image failed before, show emoji
    if (failedImages.has(imageKey)) {
      return <div className={isMainDisplay ? "text-6xl" : ""}>{emoji}</div>;
    }
    
    // If image loaded successfully, show image
    if (loadedImages.has(imageKey)) {
      return (
        <img 
          src={media} 
          alt={`ASL sign for ${letter}`}
          className={isMainDisplay ? "w-40 h-40 object-contain" : "w-6 h-6 object-contain"}
        />
      );
    }
    
    // First time loading - show emoji while image loads in background
    return (
      <div className="relative flex items-center justify-center">
        {/* Always show emoji first */}
        <div className={isMainDisplay ? "text-6xl" : ""}>{emoji}</div>
        
        {/* Hidden image that loads in background */}
        <img 
          src={media} 
          alt={`ASL sign for ${letter}`}
          className="absolute opacity-0 w-0 h-0"
          onLoad={() => {
            setLoadedImages(prev => new Set(prev).add(imageKey));
          }}
          onError={() => {
            setFailedImages(prev => new Set(prev).add(imageKey));
          }}
        />
      </div>
    );
  };

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800 border-green-200',
    intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    advanced: 'bg-red-100 text-red-800 border-red-200'
  };

  const filteredLessons = lessons.filter(lesson => 
    filter === 'all' || lesson.difficulty === filter
  );

  const getDifficultyProgress = (difficulty) => {
    const difficultyLessons = lessons.filter(l => l.difficulty === difficulty);
    const completedCount = difficultyLessons.reduce((count, lesson) => {
      const lessonCompleted = lesson.signs.every(sign => 
        completedSigns.has(`${lesson.id}-${sign.letter}`)
      );
      return count + (lessonCompleted ? 1 : 0);
    }, 0);
    return `${completedCount}/${difficultyLessons.length}`;
  };

  const getCurrentLevel = () => {
    const beginnerProgress = getDifficultyProgress('beginner');
    const intermediateProgress = getDifficultyProgress('intermediate');
    
    if (beginnerProgress === '3/3') return 'Advanced';
    if (intermediateProgress !== '0/2') return 'Intermediate';
    return 'Beginner';
  };

  const getTotalProgress = () => {
    const totalSigns = lessons.reduce((total, lesson) => total + lesson.signs.length, 0);
    return `${completedSigns.size}/${totalSigns}`;
  };

  const handleNextSign = () => {
    if (currentSignIndex < currentLesson.signs.length - 1) {
      setCurrentSignIndex(currentSignIndex + 1);
    }
  };

  const handlePrevSign = () => {
    if (currentSignIndex > 0) {
      setCurrentSignIndex(currentSignIndex - 1);
    }
  };

  const handleCompleteSign = () => {
    const signKey = `${currentLesson.id}-${currentSign.letter}`;
    setCompletedSigns(prev => new Set(prev).add(signKey));
  };

  const selectLesson = (lessonIndex) => {
    setCurrentLessonIndex(lessonIndex);
    setCurrentSignIndex(0);
  };

  const selectSign = (signIndex) => {
    setCurrentSignIndex(signIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg text-2xl">
                📚
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Sign Language Tutorial</h1>
                <p className="text-gray-600 mt-1">Learn American Sign Language (ASL) step by step</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full">
                <span>👤</span>
                <span>Current Level: {getCurrentLevel()}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full">
                <span>🏆</span>
                <span>Progress: {getTotalProgress()}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Lessons</h2>
              
              {/* Filter Buttons */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Filter by Difficulty</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['all', 'beginner', 'intermediate', 'advanced'].map((filterOption) => (
                    <button
                      key={filterOption}
                      onClick={() => setFilter(filterOption)}
                      className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                        filter === filterOption
                          ? filterOption === 'all' 
                            ? 'bg-blue-100 text-blue-800 border-2 border-blue-300'
                            : `${difficultyColors[filterOption]} border-2`
                          : 'bg-gray-100 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
                      }`}
                    >
                      {filterOption === 'all' ? 'All Levels' : filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress by Difficulty */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Progress by Difficulty</h4>
                {['beginner', 'intermediate', 'advanced'].map((difficulty) => (
                  <div key={difficulty} className="flex justify-between items-center mb-2 last:mb-0">
                    <span className="text-sm text-gray-600 capitalize">{difficulty}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[difficulty]}`}>
                      {getDifficultyProgress(difficulty)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Lesson List */}
              <div className="space-y-3">
                {filteredLessons.map((lesson, index) => {
                  const actualIndex = lessons.findIndex(l => l.id === lesson.id);
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => selectLesson(actualIndex)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        currentLessonIndex === actualIndex
                          ? 'border-blue-300 bg-blue-50 shadow-md'
                          : 'border-gray-200 bg-white hover:border-blue-200 hover:bg-blue-50'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{lesson.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{lesson.description}</p>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[lesson.difficulty]}`}>
                          {lesson.difficulty}
                        </span>
                        <span className="text-xs text-gray-500">{lesson.signs.length} signs</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Lesson Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                <h2 className="text-2xl font-bold mb-2">{currentLesson.title}</h2>
                <p className="text-blue-100 mb-4">{currentLesson.description}</p>
                <div className="flex items-center gap-4">
                  <span className="text-sm">Sign {currentSignIndex + 1} of {currentLesson.signs.length}</span>
                  <div className="flex-1 bg-indigo-600 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-white h-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{Math.round(progress)}%</span>
                </div>
              </div>

              {/* Sign Display */}
              <div className="p-8 text-center">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-full w-40 h-40 mx-auto mb-6 flex items-center justify-center shadow-lg">
                  {renderSignMedia(currentSign.letter, currentSign.handPosition, true)}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{currentSign.letter}</div>
                <div className="text-lg text-gray-600 max-w-md mx-auto mb-8">{currentSign.description}</div>

                {/* Controls */}
                <div className="flex justify-center gap-4 mb-8">
                  <button
                    onClick={handlePrevSign}
                    disabled={currentSignIndex === 0}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>←</span>
                    <span>Previous</span>
                  </button>
                  <button
                    onClick={handleNextSign}
                    disabled={currentSignIndex === currentLesson.signs.length - 1}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>Next</span>
                    <span>→</span>
                  </button>
                </div>

                {/* Practice Section */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Practice Tips</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-2">Hand Position</h5>
                      <p className="text-sm text-gray-600">Focus on the exact finger placement and hand shape. Practice slowly at first.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-2">Memory Aid</h5>
                      <p className="text-sm text-gray-600">Try to associate the sign with the letter shape or create a mental connection.</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCompleteSign}
                    className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 mx-auto"
                  >
                    <span>Mark as Completed</span>
                    <span>🏆</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Reference */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Reference - {currentLesson.title}</h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                {currentLesson.signs.map((sign, index) => (
                  <button
                    key={index}
                    onClick={() => selectSign(index)}
                    className={`p-3 rounded-lg border-2 transition-all hover:scale-105 ${
                      index === currentSignIndex
                        ? 'border-blue-300 bg-blue-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-blue-200'
                    }`}
                  >
                    <div className="text-2xl mb-1 flex items-center justify-center h-8">
                      {renderSignMedia(sign.letter, sign.handPosition, false)}
                    </div>
                    <div className="text-xs font-medium text-gray-700">{sign.letter}</div>
                    {completedSigns.has(`${currentLesson.id}-${sign.letter}`) && (
                      <div className="text-green-600 text-xs mt-1">✓</div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignLanguageTutorial;