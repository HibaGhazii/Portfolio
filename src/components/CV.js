import React from 'react';

const CV = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Cv/CV-GHAZI-HIBA.pdf'; 
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <div className='text-white transform -translate-y-1/2 mx-64 text-center bg-161616 rounded-full shadow-md shadow-fuchsia-400'>
      <button onClick={downloadCV} className="px-36 py-6 text-2xl font-bold">
        Téléchargez mon Curriculum Vitae
      </button>
    </div>
  );
};

export default CV;