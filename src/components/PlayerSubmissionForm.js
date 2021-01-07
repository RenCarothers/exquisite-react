import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = ({fields}) => {
  console.log(fields)

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
          <span>{fields[0]}</span>
          <input
            placeholder={fields[1].placeholder}
            type="text" />
          <input
            placeholder={fields[2].placeholder}
            type="text" />  
          <input
            placeholder={fields[3].placeholder}
            type="text" />
          <input
            placeholder={fields[4].placeholder}
            type="text" />
          <span>{fields[5]}</span>
          <input
            placeholder={fields[6].placeholder}
            type="text" />
          <input
            placeholder={fields[7].placeholder}
            type="text" />
          <span>{fields[8]}</span>  
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
