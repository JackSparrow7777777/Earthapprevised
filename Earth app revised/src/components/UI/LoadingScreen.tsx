import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  isVisible: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible }) => {
  const [progress, setProgress] = useState(18);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setProgress(p => Math.min(p + Math.random() * 15, 100));
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div id="loading" className={`loading ${isVisible ? '' : 'hidden'}`} style={{ zIndex: 10 }}>
      <div className="loading-ring" aria-hidden="true"></div>
      <div>
        <p className="eyebrow">Astra Terra</p>
        <h1>Calibrating orbit</h1>
        <div className="meter" aria-hidden="true">
          <span style={{ width: `${progress}%` }}></span>
        </div>
        <p id="loading-note">Loading planetary layers...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
