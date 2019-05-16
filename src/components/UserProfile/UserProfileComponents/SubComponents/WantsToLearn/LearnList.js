import React from 'react';
import LearnRow from './LearnRow';

export default function GoalList(props) {
  const learnRows = [...props.learnTabItems];
  const learnRowItems = learnRows.map(learnRow => (
    <li key={learnRow.id} className="goals__row">
      <LearnRow
        learnTechName={learnRow.learnTechName}
        learnComment={learnRow.learnComment}
      />
    </li>
  ));

  return (
    <div>
      <ul className="goals">{learnRowItems}</ul>
    </div>
  );
}
