import React, { useState } from 'react';

const Accordion = ({ title, contentTitle, content, index, openAccordionIndex, setOpenAccordionIndex }) => {
  const isOpen = openAccordionIndex === index;

  const toggleAccordion = () => {
    setOpenAccordionIndex(isOpen ? null : index);
  };

  return (
    <div className="accordion">
      <div
        className={`accordion-header ${isOpen ? 'selected' : ''}`}
        onClick={toggleAccordion}
      >
        <h3  className={`${isOpen ? 'selected-title ' : ''}`}>{title}</h3>
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}></span>
      </div>
      {isOpen && <div className="accordion-title">{contentTitle}</div>}
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
