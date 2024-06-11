import React from 'react';
import { isMobile } from 'react-device-detect';

const App = () => {
  return (
    <div className='dark:bg-black h-dvh px-4 '>
      {isMobile ? 
        (
          <div className='flex flex-col py-2 gap-2'>
            <div className='section-container'>
              <h3 className='font-bold'>Work</h3>   
              <h3>+</h3>
            </div>
            <div className='primary-btn'>
              <h3 className='font-bold text-black'>button</h3>
            </div>
          </div>
        ) : 
        <h1 className='font-circular font-bold'>Estás en un dispositivo portatil</h1> 
        }
    </div>
  );
};

export default App;
