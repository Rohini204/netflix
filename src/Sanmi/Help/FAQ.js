import React, { useState } from 'react';
import './FAQ.css';

const FAQ = ({ title, faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="faq-section">
      <h3>{title}</h3>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index} onClick={() => toggleAnswer(index)}>
            <strong>{faq.question}</strong>
            {expandedIndex === index && <p>{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
