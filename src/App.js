import React, { useState } from 'react';
import CardContainer from './components/CardContainer';
import Spotlight from './components/spotlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'bg-[#292B32]' : 'bg-[#F7F7F8]'}`}>
      <div className="fixed top-4 right-4 z-50">
        <button
          className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            } border border-gray-800 focus:outline-none`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <WbSunnyIcon /> : <NightsStayIcon />}
        </button>
      </div>
      <div className="max-w-screen-xl mx-auto p-4">
        <CardContainer isDarkMode={isDarkMode} />
      </div>
      <div className='flex justify-center'>
        <Spotlight isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;
