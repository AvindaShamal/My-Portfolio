
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  highlightText?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  delay = 100, 
  className = "",
  highlightText = ""
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      // After typing is complete, wait 5 seconds then restart
      const restartTimeout = setTimeout(() => {
        setDisplayedText('');
        setCurrentIndex(0);
        setIsComplete(false);
        setShowCursor(true);
      }, 5000);

      return () => clearTimeout(restartTimeout);
    }
  }, [currentIndex, delay, text, isComplete]);

  useEffect(() => {
    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const renderTextWithHighlight = () => {
    if (!highlightText || !displayedText.includes(highlightText)) {
      return displayedText;
    }

    const parts = displayedText.split(highlightText);
    return (
      <>
        {parts[0]}
        {parts.length > 1 && (
          <>
            <span className="text-primary">{highlightText}</span>
            {parts[1]}
          </>
        )}
      </>
    );
  };

  return (
    <span className={className}>
      {renderTextWithHighlight()}
      {showCursor && (
        <span className="animate-pulse text-primary">|</span>
      )}
    </span>
  );
};

export default TypewriterText;
