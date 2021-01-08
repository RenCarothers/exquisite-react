import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = ({isSubmitted, submissions, revealPoem}) => {

  const prettyPrintPoem = submissions.map((poem, index) => ( // why couldn't I use {} here?
    <p key={index}>{poem}</p>
  ));

  if (isSubmitted) {
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
        </section>
        <div className="FinalPoem__reveal-btn-container">
          <section>
            {prettyPrintPoem}
          </section>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
        </section>
        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={revealPoem}/>
        </div>
    </div>
    );
  }

  // const onButtonClick = () => {
  //   return true
  // };

  // const onButtonClick = () => {
  //   isSubmitted(true);
  //   submissions.map((poem) => {
  //     return poem
  //   });
  // };

  // revealPoem = () => {
  //   submissions.map((poem) => {
  //     return poem
  //   });
  // };
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
