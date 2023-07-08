import React, { useState } from 'react';

const ColorSelector = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-selector">
                <p className='color-title'>Color Selector</p>

      <div className="color-options">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-option ${selectedColor === color ? 'selected' : ''}`}
            style={{ backgroundColor: color.hex }}
            onClick={() => handleColorChange(color)}
          >
          
          </div>
        ))}
      </div>
      {selectedColor && (
        <p className='color-name'>
         {selectedColor.name}
        </p>
      ) }
    </div>
  );
};

export default ColorSelector;
