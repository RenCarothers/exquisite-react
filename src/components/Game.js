import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  const [submissionList, setSubmissionList] = useState([]);
  const [lastSubmission, setLastSubmission] = useState('');
  const [player, setPlayer] = useState(1);
  const [finalizePoem, setFinalizePoem] = useState(false);

  const addSubmission = (submission) => {
    console.log(submission) // delete laterz
    
    // Duplicate the submission list.
    const newSubmissionList = [...submissionList];

    console.log(newSubmissionList); // delete meee

    newSubmissionList.push(submission);

    console.log(newSubmissionList); // delete meee

    setSubmissionList(newSubmissionList);
  
    setPlayer(player +1)

    setLastSubmission(submissionList[submissionList.length-1]);

    console.log(submissionList) // delete laterz

  }

  const revealPoem = () => {
    setFinalizePoem(true);
  };

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      { (submissionList.length !== 0) ? <RecentSubmission submission={lastSubmission} /> : <span /> }

      <PlayerSubmissionForm fields={FIELDS} sendSubmission={addSubmission} index={player}/>

      <FinalPoem submissions={submissionList} isSubmitted={finalizePoem} revealPoem={revealPoem} />

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
