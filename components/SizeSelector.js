import React, { useState } from 'react';

const SizeSelector = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="size-selector">
      <p className='color-title'>Select size</p>
      <div className="size-options">
        {sizes.map((size, index) => (
          <div
            key={index}
            className={`size-option ${selectedSize === size ? 'selected' : ''}`}
            onClick={() => handleSizeChange(size)}
          >
            {size}
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default SizeSelector;
