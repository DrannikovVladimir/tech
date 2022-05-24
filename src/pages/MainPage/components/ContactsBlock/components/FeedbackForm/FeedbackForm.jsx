import * as React from 'react';
//styles
import './FeedbackFormStyle.scss';

const FeedbackForm = () => {
  return (
    <div className="feedbackForm">
      <div className="feedbackForm-container">
        <div className="feedbackForm-icon"></div>
        <h3 className="feedbackForm-title">Thank you for submitting the message</h3>
        <p className="feedbackForm-subtitle">Our team will be in touch shortly</p>
      </div>
    </div>
  );
};

export default FeedbackForm;