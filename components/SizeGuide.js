import React, { useState } from 'react';
import Modal from 'react-modal';

const SizeGuide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='size-guide'>
      <button onClick={openModal} className='size-button'>Size Guide</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Size Guide"
        style={{
            content: {
              maxWidth: "900px",
              maxHeight: "260px",
              margin: "auto",
              padding: "70px 100px",
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
              transform: isModalOpen ? 'scale(1)' : 'scale(0)',
              transition: 'transform 0.3s ease-in-out',
             
            },
            overlay: {
                background: 'rgba(0, 0, 0, 0.5)',
                transition: 'background 0.3s ease-in-out',
              },

          }}

          
      >
        <div>
    
        <div style={{display: 'flex', gap: '6rem'}}>
        <div style={{display: 'flex', gap: '0rem', flexDirection: 'column'}}>
        <h4>US Size Guide:</h4>
        <ul>
          <li>Small: 36-38 inches</li>
          <li>Medium: 39-41 inches</li>
          <li>Large: 42-44 inches</li>
          <li>Extra Large: 45-48 inches</li>
        </ul>
        </div>
        <div style={{display: 'flex', gap: '0rem', flexDirection: 'column'}}>
        <h4>EU Size Guide:</h4>
        <ul>
          <li>Small: 46-48 cm</li>
          <li>Medium: 49-51 cm</li>
          <li>Large: 52-54 cm</li>
          <li>Extra Large: 55-57 cm</li>
        </ul>
        </div>
        </div>
        </div>
      </Modal>
    </div>
  );
};

export default SizeGuide;
