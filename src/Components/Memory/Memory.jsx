import React, { useEffect, useState } from 'react';

const emojiPairs = [
  { emoji: "🤟", meaning: "I Love You" },
  { emoji: "👋", meaning: "Hello" },
  { emoji: "👍", meaning: "Yes" },
  { emoji: "✋", meaning: "Stop" },
  { emoji: "🧡", meaning: "Love" },
  { emoji: "👏", meaning: "Clap" },
];

export default function EmojiMatchGame() {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [lockBoard, setLockBoard] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    const allCards = [];
    emojiPairs.forEach((pair, index) => {
      allCards.push({ id: `${index}-emoji`, value: pair.emoji, type: 'emoji', pairId: index });
      allCards.push({ id: `${index}-text`, value: pair.meaning, type: 'text', pairId: index });
    });

    const shuffled = allCards.sort(() => 0.5 - Math.random()).map(card => ({
      ...card,
      flipped: false,
      matched: false
    }));

    setCards(shuffled);
    setFirstCard(null);
    setSecondCard(null);
    setMatchedPairs(0);
    setLockBoard(false);
    setMessage('');
  };

  const flipCard = (clickedCard) => {
    if (lockBoard || clickedCard.flipped || clickedCard.matched) return;

    const updatedCards = cards.map(card =>
      card.id === clickedCard.id ? { ...card, flipped: true } : card
    );
    setCards(updatedCards);

    if (!firstCard) {
      setFirstCard(clickedCard);
    } else {
      setSecondCard(clickedCard);
      setLockBoard(true);
    }
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      const isMatch =
        firstCard.pairId === secondCard.pairId &&
        firstCard.type !== secondCard.type;

      if (isMatch) {
        setTimeout(() => {
          const updatedCards = cards.map(card =>
            card.pairId === firstCard.pairId
              ? { ...card, matched: true }
              : card
          );
          setCards(updatedCards);
          setMatchedPairs(prev => {
            const total = prev + 1;
            if (total === emojiPairs.length) {
              setMessage('🎉 All emoji meanings matched!');
            }
            return total;
          });
          resetTurn();
        }, 400);
      } else {
        setTimeout(() => {
          const updatedCards = cards.map(card =>
            card.id === firstCard.id || card.id === secondCard.id
              ? { ...card, flipped: false }
              : card
          );
          setCards(updatedCards);
          resetTurn();
        }, 1000);
      }
    }
  }, [secondCard]);

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setLockBoard(false);
  };

  return (
    <div className="min-h-screen bg-purple-50 text-purple-900 flex flex-col items-center justify-center p-6">
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <h1 className="text-3xl font-bold text-purple-700 mb-6">🧠 Match Emoji to Meaning</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-xl">
        {cards.map(card => (
          <div
            key={card.id}
            className="flip-card h-28 sm:h-32 cursor-pointer"
            onClick={() => flipCard(card)}
          >
            <div className={`flip-card-inner ${card.flipped || card.matched ? 'flipped' : ''}`}>
              <div className="flip-card-front bg-purple-700 text-white">
                ❓
              </div>
              <div
                className={`flip-card-back border-2 ${
                  card.matched 
                    ? 'bg-green-500 text-white border-green-500' 
                    : 'bg-white text-purple-700 border-purple-700'
                } ${card.type === 'text' ? 'text-sm sm:text-base px-2' : 'text-2xl'}`}
              >
                {card.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-green-600 text-lg font-semibold">{message}</p>

      <button
        onClick={startGame}
        className="mt-4 px-6 py-2 bg-purple-700 hover:bg-purple-500 text-white rounded-lg text-base transition-colors duration-200"
      >
        Restart Game
      </button>
    </div>
  );
}