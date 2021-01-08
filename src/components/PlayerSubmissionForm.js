import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = ({fields, sendSubmission, index}) => {

  const [formFields, setFormFields] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: ''
  });

  const onInputChange = (event) => {
    // console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);
    // Duplicate formFields into new object
    const newFormFields = {
      ...formFields,
    }
  
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const onFormSubmit = (event) => {
    // prevent the browser from trying to submit the form.
    event.preventDefault();

    const submission = fields.map(field => {
      const submittedFields = {...formFields};
      if (field.key) {
        return submittedFields[field.key]
      } else {
        return field
      }
    }).join(' ');

    sendSubmission(submission);

    // reset form fields
    setFormFields({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: ''
    });
  };  

  const inputValid = (field) => {
    return formFields[field.key] !== '';
  };

  const generateInputFields = fields.map((field, index) => {
    if (field.key) {
      return <li key={index} className='unbulleted-List'>
        <input
          name={field.key}
          placeholder={field.placeholder}
          value={formFields[field.key] || ''}
          onChange={onInputChange}
          className={inputValid(field) ? '' : 'PlayerSubmissionFormt__input--invalid'}
          type="text" />
      </li>;
    }
    else {
      return <li key={index} className='unbulleted-List'>
        <span>{field}</span>
      </li>
    }
  });

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          {
            generateInputFields
          }
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
